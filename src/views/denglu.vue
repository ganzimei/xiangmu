<template>
  <div class="home">
    <div style="width:40%">账号<el-input v-model="number" placeholder="请输入账号"></el-input></div>
    <div style="width:40%">密码<el-input placeholder="请输入密码" v-model="pwd" show-password></el-input></div>
    <el-button type="primary" @click="login()">登录</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      number: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://139.9.169.87:8081/examsystem/login?username="+this.number+"&password="+this.pwd )
        .then((res) => {
          localStorage.setItem("token", this.number);
          this.$router.push({
              name:'Home',
              params:{
                  zhi:this.number
              }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.but {
  // margin: 0 auto;
  background: Red;
  color: #fff;
  margin: 15px 40px;
  width: 50px;
  height: 20px;
  padding: 0px 0;
  line-height: 20px;
  text-align: center;
}
</style>
