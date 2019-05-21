<template>
    <div class="Content">
        <div class="Login">
            <div class="loginBox">
                <el-input type="text" v-model="username" placeholder="请输入账号" ></el-input>
                <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                <el-row>
                    <el-button type="success" @click="getData()">登录</el-button>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    data() {
    return {
      username:'',
      password: '',
      userToken: '',
      menus:'',
    }
  },
  methods: {
       getData(){
            var _this = this;
            var _params = {
                "params" : {
                    username:_this.username,
                    password:_this.password
                },				
                "method" : "/login",
            }
            //非空判断
            if(_this.username==''|| _this.password==''){
                alert('账号或密码不能为空');
            }else{
               
                console.log("66666"+localStorage.getItem('Authorization'))
                _this.$post(_params).then(res => {
                _this.data=res.data
                _this.userToken = '' + res.data.data.token;
                console.log("res"+JSON.stringify(res.data.data))
                console.log("token"+_this.userToken)
                
                localStorage.setItem('Authorization', _this.userToken)
                console.log(localStorage.getItem('Authorization'))
                if(res.data.code==200){
                _this.menus=res.data.data.menus
                 this.$router.push({
                     name:"home"
                     }) 
                //  console.log(res) 
                 localStorage.setItem('menus', JSON.stringify(_this.menus));
                 console.log( _this.menus)  
                }else if(res.data.code==500){
                   console.log(res.data.message);
                }
            }).catch(err => {
                alert(err.response.data.message)
                console.log(err.response)
            })
            }   
        },
    }
}
 
</script>
<style lang="less" scoped>
 .Content{
     height: 100%;
     background-image: url("../assets/img/bg.png");
     background-size: cover;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .Login{
     width: 400px;
     height: 400px;
     background: white;
     margin-top: -100px;
     border-radius: 10px;
     display: flex;
     align-content: center;
     flex-direction: column;

 }
 .loginBox{
     height: 100%;
     padding:40px 15px;
 }
.el-input--suffix{
    margin-top: 20px;
    margin-bottom: 20px;
}
.el-row{
    display: flex;
    justify-content: center;
}
</style>
<style>
.el-input input{
    border-color: black!important;
}
</style>
