<template>

  <div class="login">
    <div>
      <el-input placeholder="请输入用户名" v-model="name" clearable class="input_style"></el-input>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>
    <div>
      <el-input placeholder="请输入密码" v-model="pwd" show-password class="input_style"></el-input>
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>
    <div>
      <button @click="login" class="login_style">登录</button>
    </div>
    <div>
      <a href="Register" class="registernow">没有账号？现在注册！</a>
    </div>

  </div>

</template>

<script>
  export default {
    name: "Login",
    data(){
      return {
        name: '',
        pwd : '',
        error : {
          name: '',
          pwd : ''
        }
      }
    },
    methods:{
      login(){
        const { name, pwd, $router} = this
        this.$router.push({
          name: "Main",
          params: {
            username: this.name
          }
        });
      },

        Register(){
          this.$router.push({
            name:"Register",
          })
        }
    }
  }
</script>

<style>


  .login{
    margin:0 auto;
    margin-top: 100px;
    border: 2px solid #4CAF50;
    width: 350px ;
    height: 300px ;
  }
  .input_style{
    width: 200px;
    border: 1px solid #4CAF50;

    margin-top: 30px;

  }
  .login_style{
    width: 200px;
    height: 50px;
    border-radius: 4px;
    margin-top: 25px;
    margin-bottom: 20px;
     background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
  }
  .registernow{
    margin: 10px;
  }
</style>
