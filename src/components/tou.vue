<template>
      <div class="shang">
      <img class="img1" src="../../public/images/1.png" />
      <p>XX学校资产管理系统</p>
      <div class="xuan">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#fff"
          background-color="black"
        >
          <el-submenu index="1" >  
            <template slot="title" ><i class="sp">资源管理</i></template>
            <el-menu-item index="1-1" class="aa"
              ><a class="disabled">教学设备</a><a><router-link to="/ruku">入库</router-link></a><a><router-link to="/jieg">借出和归还</router-link></a
              ><a><router-link to="/gua">挂失</router-link></a><a><router-link to="/xiu">报修</router-link></a><a><router-link to="/fei">报废</router-link></a></el-menu-item
            >
            <el-menu-item index="1-2" class="aa"
              ><a class="disabled">易耗品</a><a><router-link to="/yiru">入库</router-link></a><a><router-link to="/yifen">分发</router-link></a><a><router-link to="/hexiao">核销</router-link></a></el-menu-item>
            <el-menu-item index="1-3" class="aa"
              ><a class="disabled">地产</a><a><router-link to="/dideng">登记</router-link></a><a><router-link to="/digai">改造</router-link></a><a>核销</a></el-menu-item>
            <el-menu-item index="1-4" class="aa"
              ><a class="disabled">房产</a><a><router-link to="/fangdeng">登记</router-link></a><a><router-link to="/fangwei">维修</router-link></a><a><router-link to="/fanggai">改造</router-link></a><a>核销</a></el-menu-item>
            <el-menu-item index="1-5" class="aa"
              ><a class="disabled">其他资产</a><a><router-link to="/qiru">入库</router-link></a><a><router-link to="/qigua">挂失</router-link></a><a><router-link to="/qixiu">报修</router-link></a><a><router-link to="/qifei">报废</router-link></a></el-menu-item>
            <el-menu-item index="1-6" class="aa"><a class="disabled">项目</a><a><router-link to ="/bala">录入</router-link></a></el-menu-item>
          </el-submenu>
          <el-menu-item index="2">申请&批审</el-menu-item>
          <el-menu-item index="3">统计</el-menu-item>
          <el-menu-item index="4">设置</el-menu-item>
          <el-menu-item index="5">操作日志</el-menu-item>
          <el-menu-item index="6">帮助</el-menu-item>
        </el-menu>
        <div class="line"></div>
        <img class="img2" src="../../public/images/2.png" />
        <span>{{username}}</span>
        <a>学校管理员</a>
      </div>
    </div>
</template>
<script>
export default {
  data(){
     return{
        activeIndex: "1",
      activeIndex2: "1",
      username:localStorage.getItem("token")
     }
  },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped>
.sp{
  color: #fff;
  font-style: inherit;
}
.shang {
  height: 60px;
  background-color: black;
}
.img1 {
  margin: 15px 10px;
}
.shang p {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: -48px 23px;
}
.xuan {
  width: 70%;
  float: right;
  height: 40px;
}

.el-menu.el-menu--horizontal {
  /* border-bottom: solid 1px #e6e6e6; */
  background: #000;
  color: #ffffff;
}
.xuan > ul > li {
  margin-left: 30px;
  color: white;
}
.xuan > ul > li:first-of-type {
  margin-left: -40px;
}
.aa > a {
  margin-left: 50px;
  color: #ffffff !important;
}
.aa > a:first-of-type {
  margin-left: 0px;
  color: #ffffff !important;
}
.disabled {
  pointer-events: none;
  display: disabled;
}
.el-submenu__title {
  color: white !important;
}
.el-menu-item{
  background-color: black;
  color: white;
}
element.style {
    border-bottom-color: transparent;
    color: #fff !important;
}
.img2{
  position: absolute;
  width: 50px;
  right: 190px;
  top: 15px;
}
.xuan span{
  color: white;
  font-size: 15px;
  position: absolute;
  right: 138px;
  top: 27px;
}
.xuan a{
  width: 100px;
  height: 25px;
  background-color: teal;
  position: absolute;
  right: 25px;
  top: 25px;
  font-size: 15px;
  color: white;
  line-height: 25px;
  text-align: center;
}
.element.style {
    color: #ffffff !important;
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border-bottom: 2px solid #409EFF;
    color: #ffffff !important;
}
a{
  color: #fff;
  text-decoration: none;
}
</style>