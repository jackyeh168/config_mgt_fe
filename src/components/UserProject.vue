<template>
  <div>

    <el-container>
      <el-header>
        <h1><b>Config Manager</b></h1>
      </el-header>
      <el-main>
        <el-row>

          <el-col :span="6">&nbsp;</el-col>

          <el-col :span="12">
            <el-row>
              <el-col :span="6">Account</el-col>
              <el-col :span="18"><el-input v-model="account"
                        placeholder="Enter your account"></el-input></el-col>
            </el-row>

            <el-row>
              <el-col :span="6">Password</el-col>
              <el-col :span="18"><el-input v-model="password"
                        placeholder="Enter your password" show-password></el-input></el-col>
            </el-row>

          <el-button type="primary" @click="login" plain round>Login</el-button>

          </el-col>

          <el-col :span="6">&nbsp;</el-col>

        </el-row>

      </el-main>
      <el-footer>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      account: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
