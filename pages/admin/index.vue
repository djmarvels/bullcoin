<template>
  <div class="admin">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <h3 class="text-center admin-title">
            Авторизация
          </h3>
        </div>
        <div class="col col-12">
          <el-form ref="form" class="admin-form" :model="form">
            <el-form-item
              prop="login"
              :rules="[
                { required: true, message: 'Please type login', trigger: 'blur' },
              ]"
            >
              <el-input v-model="form.login" placeholder="Type login" type="text" />
            </el-form-item>
            <el-form-item
              prop="password"
              :rules="[
                { required: true, message: 'Please type password', trigger: 'blur' },
              ]"
            >
              <el-input v-model="form.password" placeholder="Type password" type="password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="w-100" @click="Authorize" v-html="'Authorize'" />
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'IndexVue',
    data : () => ({
        form : {
            login    : null,
            password : null
        }
    }),
    mounted() {
        if (this.$cookies.get('admin')) {
            this.$router.push(this.localePath('/admin/articles/'));
        }
    },
    methods : {
        Authorize() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    if (!(this.form.login !== process.env.ADMIN_LOGIN && this.form.password !== process.env.ADMIN_PASSWORD)) {
                        this.$cookies.set('admin', 'admin');
                        this.$router.push(this.localePath('/admin/articles/'));
                    }
                    else {
                        this.$notify.error({ title : 'Error', message : 'Bad password' });
                    }
                }
            });
        }
    }
};
</script>

<style scoped lang="scss">
.admin {
  min-height: calc(100vh - 200px);
  &-form {
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 60px auto 0;
  }
  &-title {
    margin-top: 60px;
  }
}
</style>
