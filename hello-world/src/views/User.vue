
<template>
  <div class="user-container">
    <div class="user-filter-container">
      <el-input placeholder="用户名" class="username" v-model="Query.username"></el-input>
      <!-- <el-select clearable class="sex" placeholder="性别" v-model="sexModel">
        <el-option v-for="item in sexList" :key="item" :label="item" :value="item"></el-option>
      </el-select>-->
      <el-button
        class="search"
        type="primary"
        icon="el-icon-search"
        @click="onSearch(Query.username)"
      >搜索</el-button>

      <el-button class="add" type="primary" icon="el-icon-document-add" @click="add()">新增</el-button>
    </div>
    <div class="user-table-container">
      <bmp-table :dataSource="userEntity" :column="bmpTableData" :loading="loading">
        <el-table-column label="冻结状态" width="80px;" align="center">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.freeze ? 'danger' : 'success'"
            >{{scope.row.freeze ? '冻结' : '正常'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="230" align="center">
          <template slot-scope="{row}">
            <el-button type="success" size="mini" @click="edit(row)">修改</el-button>
            <el-button type="primary" size="mini" @click="freeze(row)">{{row.freeze ? '解冻' :'冻结'}}</el-button>

            <el-button
              v-if="row.status!='deleted'"
              size="mini"
              type="danger"
              @click="remove(row,'deleted')"
            >删除</el-button>
          </template>
        </el-table-column>
      </bmp-table>

      <bmp-pager
        :total="Query.total"
        :pageSize="Query.pageSize"
        :currentPage="Query.currentPage"
        :handleCurrentChange="handleCurrentChange"
        :handleSizeChange="handleSizeChange"
      />
    </div>

    <div class="user-operator-container">
      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="beforeClose"
      >
        <el-form
          style="padding-right:20px;"
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
        >
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          
          <el-form-item label="密码" prop="password" v-if="dialogTitle == '新增'">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass" v-if="dialogTitle == '新增'">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="权限" prop="permission">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="ruleForm.permission" @change="handleCheckedCitiesChange">
              <el-checkbox
                v-for="rolesItem in roles"
                :label="rolesItem.id.toString()"
                :key="rolesItem.id"
              >{{rolesItem.name}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import bmpPager from "@/components/Pager";
import bmpTable from "@/components/Table";
export default {
  components: {
    bmpPager,
    bmpTable
  },
  watch: {
    dialogVisible() {
      //   总是清除框内容

      if (this.dialogVisible == false) {
        this.$nextTick(() => {
          this.resetForm("ruleForm");
         
        })
        
      }
    }
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (value.length < 8) {
        callback(new Error("必须大于8位"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if ("" === value) {
        callback(new Error("请输入密码"));
      } else if (value.length < 8) {
        callback(new Error("密码不能小于8位"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      loading: true,
      bmpTableData: [
        {
          label: "用户名",
          prop: "username"
        },
        {
          label: "创建时间",
          prop: "createdAt"
        },
        {
          label: "更新时间",
          prop: "updatedAt"
        }
      ],
      checkAll: false,

      roles: [],
      isIndeterminate: false,

      //
      sexModel: "",
      dialogTitle: "新增",
      // 操作弹框
      dialogVisible: false,
      Query: {
        username: "",
        pageSize: 10,
        currentPage: 1,
        total: 0
      },

      sexList: ["男", "女"],
      userEntity: [],
      ruleForm: {
        username: "",
        password: "",
        checkPass: "",
        permission: []
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  mounted() {
    this.initUserTable(this.Query);
    this.roleAllXhr();
  },

  methods: {
    handleCheckAllChange(val) {
      this.ruleForm.permission = val
        ? this.roles.map(item => item.id.toString())
        : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {

      const checkedCount = value.length;
      this.checkAll = checkedCount === this.roles.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.roles.length;
    },
    //
    beforeClose(done) {
      done();
    },
    roleAllXhr() {
      this.$fetch({
        url: "/api/roles/all",
        method: "get"
      }).then(res => {
        if (!res) return;
        this.roles = res.data;
      });
    },

    freeze(row) {
      let title = row.freeze
        ? "确认解冻此用户, 是否继续?"
        : "确认冻结此用户, 是否继续?";
      let message = row.freeze ? "解冻成功!" : "冻结成功!";

      this.$confirm(title, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.userFreezeXhr({
            id: row.id,
            freeze: !row.freeze
          })
        })
        .catch(e => {
          console.err(e);

        });
    },
    add() {
      this.dialogVisible = true;
      this.dialogTitle = "新增";

      
    },
    edit(row) {
      this.dialogVisible = true;
      this.dialogTitle = "修改";
      //   神坑之ref挂载时机
      this.$nextTick(() => {
        this.id = row.id;

        this.ruleForm.username = row.username;
        this.ruleForm.permission = row.roles.map(item => item.id.toString());

        // this.ruleForm.permission = row.permission.trim()
        //   ? row.permission.split(",")
        //   : [];
          // 权限有可能被删除
 
        this.handleCheckedCitiesChange(this.ruleForm.permission);
      });
    },
    userFreezeXhr(data){
      return this.$fetch({
        url: "/api/users/freeze",
        method: "post",
        data: data
      }).then(res => {
        if (!res) return;
 
        this.initUserTable(this.Query);
      });
    },
    userAddXhr(data) {
      return this.$fetch({
        url: "/api/users/add",
        method: "post",
        data: data
      }).then(res => {
        if (!res) return;
        this.dialogVisible = false;
        this.$message({
          type: "success",
          message: "新增用户成功"
        });
        this.initUserTable(this.Query);
      });
    },

    userUpdateXhr(data) {
      return this.$fetch({
        url: "/api/users/update",
        method: "post",
        data: data
      }).then(res => {
        if (!res) return;
        this.dialogVisible = false;
      });
    },
    onSearch() {
      this.initUserTable(this.Query);
    },
    handleCurrentChange(val) {
      this.Query.currentPage = val;
      this.initUserTable(this.Query);
    },
    handleSizeChange(val) {
      this.Query.pageSize = val;
      this.initUserTable(this.Query);
    },
    initUserTable(query) {
      this.$fetch({
        url: "/api/users/list",
        method: "post",
        data: {
          pageNum: query.currentPage,
          pageSize: query.pageSize,
          username: query.username
        }
      }).then(res => {
        this.loading = false;
        if (!res) return;
        this.userEntity = res.data.rows;
        this.Query.total = res.data.count;
      });
    },
    onAdd() {},
    remove(row) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$fetch({
            url: "/api/users/remove",
            method: "post",
            data: {
              id: row.id
            }
          }).then(res => {
            if (!res) return;
            this.initUserTable(this.Query);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.dialogTitle == "新增") {
            this.userAddXhr(this.ruleForm);
          } else {
            this.userUpdateXhr({
              id: this.id,
              username: this.ruleForm.username,

              permission: this.ruleForm.permission
            }).then(res => {
              if (!res) return;
              this.initUserTable(this.Query);
            });
          }
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      // 重置的时候不能取消全选的状态
      this.$nextTick(() => {
        this.isIndeterminate = false;
        this.checkAll = false;
      })
      
    }
  }
};
</script>
<style lang="scss" scoped>
.user-container {
  padding: 20px;
}
.user-table-container {
  overflow: scroll;
}
.user-filter-container {
  padding-bottom: 20px;
  // 这个地方突然发现inline-block 的元素居然没有间距了 parry

  .username {
    width: 200px;
  }
  .sex {
  }
}
</style>


      