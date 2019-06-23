<template>
    <div class="github-callback">
        <h1>等待github响应</h1>
    </div>
</template>
<style>
.github-callback{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  created() {
    const { code } = this.$route.query;
    this.sendCode(code);
  },
  methods: {
    sendCode(code) {
      this.$fetch({
        url: "/api/callback",
        method: "get",
        data: {
          code
        }
      }).then(res => {
        // if (!res) {
        //   this.$router.replace("/login");
        //   return;
        // }

        this.$router.replace("/");
        this.$store.dispatch('login/setUserInfo', res.data);
      });
    }
  }
};
</script>
