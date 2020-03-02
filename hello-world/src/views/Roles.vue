
<template>
  <div class="user-container">
    <div class="user-filter-container">
      <el-input v-if="$permission(2)" placeholder="权限名称" class="username" v-model="Query.name"></el-input>

      <el-button
        class="search"
        type="primary"
        icon="el-icon-search"
        @click="onSearch(Query.username)"
      >搜索</el-button>

      <el-button
        
        class="add"
        type="primary"
        icon="el-icon-document-add"
        @click="dialogVisible=true,dialogTitle='新增'"
      >新增</el-button>
    </div>
    <div class="user-table-container">
      <bmp-table :dataSource="userEntity" :column="column" :loading="loading" :pageSize="10">
        <el-table-column label="操作" width="230" align="center">
          <template slot-scope="{row}">
            <el-button type="success" size="mini" @click="edit(row)">修改</el-button>

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
          <el-form-item label="权限名称" prop="name">
            <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="权限详情" prop="detail">
            <el-input type="text" v-model="ruleForm.detail" autocomplete="off"></el-input>
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
        this.resetForm("ruleForm");
      }
    }
  },
  data() {
    return {
      column: [
        {
          label: "ID",
          prop: "id"
        },
        {
          label: "详情",
          prop: "detail"
        },

        {
          label: "权限名称",
          prop: "name"
        },
        {
          label: "权限唯一标识符",
          prop: "mark"
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
      loading: true,
      sexModel: "",
      dialogTitle: "新增",
      // 操作弹框
      dialogVisible: false,
      Query: {
        name: "",
        pageSize: 10,
        currentPage: 1,
        total: 0
      },

      sexList: ["男", "女"],
      userEntity: [],
      ruleForm: {
        name: "",
        detail: ""
      },
      rules: {
        name: [{ required: true, message: "请输入权限名称", trigger: "blur" }],
        detail: [{ required: true, message: "请输入权限名称", trigger: "blur" }]
      }
    };
  },
  mounted() {
    this.initRoleTable(this.Query);
  },
  methods: {
    beforeClose(done) {
      done();
    },
    freeze(row) {
      let title = row.freeze
        ? "确认解冻此用户, 是否继续?"
        : "确认冻结此用户, 是否继续?";
      // let message = row.freeze ? "解冻成功!" : "冻结成功!";

      this.$confirm(title, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.roleUpdateXhr({
            id: row.id,
            freeze: !row.freeze
          }).then(() => {
            this.onSearch();

          });
        })
        .catch(e => {
          // console.log(e);
          
        });
    },
    edit(row) {
      this.dialogVisible = true;
      this.dialogTitle = "修改";

      this.$nextTick(() => {
        this.id = row.id;
        this.ruleForm.name = row.name;
        this.ruleForm.detail = row.detail;
      });
    },
    roleAddXhr(data) {

      return this.$fetch({
        url: "/api/roles/add",
        method: "post",
        data: data
      }).then(res => {
        if (!res) return;
        this.dialogVisible = false;

        this.onSearch();
      });
    },

    roleUpdateXhr(data) {
      return this.$fetch({
        url: "/api/roles/update",
        method: "post",
        data: data
      }).then(res => {
        if (!res) return;
        this.dialogVisible = false;
      });
    },
    onSearch(username) {
      this.handleCurrentChange(1);
    },
    handleCurrentChange(val) {
      this.loading = true;
      this.Query.currentPage = val;
      this.initRoleTable(this.Query);
    },
    handleSizeChange(val) {
      this.loading = true;
      this.Query.pageSize = val;
      this.initRoleTable(this.Query);
    },
    initRoleTable(query) {
      this.$fetch({
        url: "/api/roles/pager",
        method: "post",
        data: {
          pageNum: query.currentPage,
          pageSize: query.pageSize,
          name: query.name
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
            url: "/api/roles/delete",
            method: "post",
            data: {
              id: row.id
            }
          }).then(res => {
            if(!res)return;
            this.onSearch();
           
          });
        })
        .catch((e) => {
        //  console.err(e)
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.dialogTitle == "新增") {
            this.roleAddXhr(this.ruleForm);
          } else {
            this.roleUpdateXhr({
              id: this.id,
              name: this.ruleForm.name,
              detail: this.ruleForm.detail
            }).then(res => {

              this.onSearch();
              
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


      