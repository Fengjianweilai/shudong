<template>
  <div class="register">
    <div>
      <el-input placeholder="请输入邮箱" v-model="email" clearable class="input_style"></el-input>
      <span v-if="error.email" class="err-email">{{error.email}}</span>
    </div>

    <div>
      <el-input placeholder="请输入用户名" v-model="name" clearable class="input_style"></el-input>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>

    <div>
      <el-input placeholder="请输入密码" v-model="pwd" show-password class="input_style"></el-input>
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>
    <div>
      <el-button type="primary" @click="Register" class="register_style">注册</el-button>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: "Register",
    data(){
      return {
        email:'',
        name: '',
        pwd : '',
        error : {
          name: '',
          pwd : ''
        }
      }
    },
    methods:{
      Register(){
        const { email,name, pwd, $router} = this
        this.$router.push({
          name: "Register",
          params: {
            username: this.name
          }
        });
      }
    }
  }
</script>

<style>
  .register{
    margin-top: 200px;
     color:#008800;
  }
  .input_style{
    width: 200px;
    margin-bottom: 10px;
  }

  .register_style{
   width: 200px;

  }
</style>
