<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <tou></tou>
    <div class="wen">
      <div class="wen1">
        <p>待办事项</p>
        <ul>
          <li>4条教学设备借入申请<span>最近一条时间：2017-11-03  09:00</span></li> 
          <li>1条易耗品领用申请<span>最近一条时间：2017-11-03  09:00</span></li>
          <li>1条教学设备报修申请<span>最近一条时间：2017-11-03  09:00</span></li>
        </ul>
      </div>
      <div class="wen2">
        <ul>
          <li>4条教学设备借入申请<span>最近一条时间：2017-11-03  09:00</span></li> 
          <li>1条易耗品领用申请<span>最近一条时间：2017-11-03  09:00</span></li>
          <li>1条教学设备报修申请<span>最近一条时间：2017-11-03  09:00</span></li>
        </ul>
      </div>
    </div>

    <div class="zi">
      <p>资产监控</p>
      <div class="yi">
        <div class="yi1">
          <i class="el-icon-coin"></i>
        </div>
        <span>资产总量</span>
        <a>138,000</a>
      </div>

      <div class="er">
        <div class="er1">
          <i class="el-icon-toilet-paper"></i>
        </div>
        <span>资产总额</span>
        <a>10,138,000</a>
      </div>

      <div class="san">
        <div class="san1">
          <i class="el-icon-discount"></i>
        </div>
        <span>房产面积</span>
        <a>7,738,000</a>
      </div>

      <div class="si">
        <div class="si1">
          <i class="el-icon-box"></i>
        </div>
        <span>地产面积</span>
        <a>638,000</a>
      </div>
    </div>

    <div class="tu">
      <div class="yy">
        <img class="img3" src="../../public/images/3.png" />
        <p>设备借出统计</p>
        <ul>
          <li><img class="img4" src="../../public/images/4.png" /> 设备库存</li>
          <li><img class="img5" src="../../public/images/5.png" /> 设备借出</li>
        </ul>
      </div>

      <div class="ee">
        <img class="img3" src="../../public/images/3.png" />
        <p>易耗品分发统计</p>
        <ul>
          <li><img class="img4" src="../../public/images/4.png" /> 易耗品库存</li>
          <li><img class="img6" src="../../public/images/6.png" /> 易耗品分发</li>
        </ul>
      </div>

      <div class="sa">
        <img class="img3" src="../../public/images/3.png" />
        <p>挂失资产统计</p>
        <ul>
          <li><img class="img4" src="../../public/images/4.png" /> 书桌</li>
          <li><img class="img6" src="../../public/images/6.png" /> 乒乓球</li>
          <li><img class="img5" src="../../public/images/5.png" /> 电脑桌</li>
          <li><img class="img7" src="../../public/images/7.png" /> 量筒</li>
          <li><img class="img8" src="../../public/images/8.png" /> 试管</li>
        </ul>
      </div>

      <div class="ss">
        <img class="img3" src="../../public/images/3.png" />
        <p>报废资产统计</p>
        <ul>
          <li><img class="img4" src="../../public/images/4.png" /> 书桌</li>
          <li><img class="img6" src="../../public/images/6.png" /> 乒乓球</li>
          <li><img class="img5" src="../../public/images/5.png" /> 电脑桌</li>
          <li><img class="img7" src="../../public/images/7.png" /> 量筒</li>
          <li><img class="img8" src="../../public/images/8.png" /> 试管</li>
        </ul>
      </div>
    </div>

    <div class="tong">
      <p>资产统计</p>
      <div class="t1">
        <p>设备分类数量统计</p>
      </div>
      <div class="t2">
        <p>设备分类金额统计</p>
      </div>
      <div class="t3">
        <p>易耗品分类数量统计</p>
      </div>
      <div class="t4">
        <p>易耗品分类金额统计</p>
      </div>
<div id="myChart" :style="{width: '1100px', height: '300px'}"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import tou from '@/components/tou'
export default {

  name: "Home",
  components: {
    // HelloWorld
    tou
  },
  data() {
    return {
    };
  },
   mounted(){
    this.drawLine();
  },
  created(){
    console.log(this.$route.params.zhi)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
     drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
    dataset: {
        source: [
            ['score', '数量', 'product'],
            [89.3, 58212, '后勤设备'],
            [57.1, 78254, '文体设备'],
            [74.4, 41032, '教学设备'],
            [50.1, 12755, '行政办公设备']
        ]
    },
    grid: {containLabel: true},
    xAxis: {name: 'amount'},
    yAxis: {type: 'category'},
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        // dimension: 0,
        inRange: {
            color: ['blue','pink'],
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
            }
        }
    ]
});
    }
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 1050px;
  /* margin: 0px auto; */
  /* background-color: grey; */
}
.wen{
  width: 93%;
  height: 160px;
  margin: 0px auto;
  background-color: white;
  margin-top: 30px;
}
.wen1{
  border: 1px white dashed;
  border-right-color: gainsboro;
  width: 45%;
  height: 160px;
}
.wen1 p{
  font-size: 16px;
  color: gray;
  margin: 10px 10px;
}
.wen1 ul li{
  margin: 0px 10px;
  font-size: 15px;
  padding: 5px;
}
.wen1 ul li span{
  margin: 50px;
}
.wen2{
  float: right;
  margin-top: -163px;
  /* border: 1px black solid; */
  width: 45%;
  height: 160px;
}
.wen2 ul{
  margin-top: 45px;
  margin-left: -50px;
}
.wen2 ul li{
  margin: 0px 10px;
  font-size: 15px;
  padding: 5px;
}
.wen2 ul li span{
  margin: 50px;
}

.zi{
  width: 93%;
  height: 180px;
  margin: 0px auto;
  background-color: white;
  margin-top: 30px;
}
.zi p{
  font-size: 16px;
  color: gray;
  margin: 20px 10px;
}
.yi{
  width: 280px;
  height: 100px;
  background-color: rgba(237, 86, 101, 1);
  margin-left: 30px;
  box-sizing: border-box;
  float: left;
}
.yi1{
  width: 80px;
  height: 100px;
  background-color: rgba(197,91,101);
  box-shadow: none;
}
.el-icon-coin{
  line-height: 100px;
  color: white;
  font-size: 60px;
  margin-left: 5px;
}
.yi span{
  font-size: 16px;
  color: white;
  float: left;
  margin: -90px 90px;
}
.yi a{
  font-size: 30px;
  font-weight: bold;
  color: white;
  float: left;
  margin: -40px 160px;
}
.er{
  width: 280px;
  height: 100px;
  background-color: rgba(247, 165, 79, 1);
  margin-left: 20px;
  box-sizing: border-box;
  float: left;
}
.er1{
  width: 80px;
  height: 100px;
  background-color: rgba(204,146,86);
  box-shadow: none;
}
.el-icon-toilet-paper{
  line-height: 100px;
  color: white;
  font-size: 60px;
  margin-left: 5px;
}
.er span{
  font-size: 16px;
  color: white;
  float: left;
  margin: -90px 90px;
}
.er a{
  font-size: 30px;
  font-weight: bold;
  color: white;
  float: left;
  margin: -40px 125px;
}
.san{
  width: 280px;
  height: 100px;
  background-color: rgba(28, 133, 199, 1);
  margin-left: 20px;
  box-sizing: border-box;
  float: left;
}
.san1{
  width: 80px;
  height: 100px;
  background-color: rgba(50,124,170);
  box-shadow: none;
}
.el-icon-discount{
  line-height: 100px;
  color: white;
  font-size: 60px;
  margin-left: 5px;
}
.san span{
  font-size: 16px;
  color: white;
  float: left;
  margin: -90px 90px;
}
.san a{
  font-size: 30px;
  font-weight: bold;
  color: white;
  float: left;
  margin: -40px 135px;
}
.si{
  width: 280px;
  height: 100px;
  background-color: rgba(26, 179, 148, 1);
  margin-left: 20px;
  box-sizing: border-box;
  float: left;
}
.si1{
  width: 80px;
  height: 100px;
  background-color: rgba(49,156,134);
  box-shadow: none;
}
.el-icon-box{
  line-height: 100px;
  color: white;
  font-size: 60px;
  margin-left: 5px;
}
.si span{
  font-size: 16px;
  color: white;
  float: left;
  margin: -90px 90px;
}
.si a{
  font-size: 30px;
  font-weight: bold;
  color: white;
  float: left;
  margin: -40px 160px;
}
.tu{
  width: 93%;
  height: 180px;
  margin: 0px auto;
  background-color: white;
  margin-top: 0px;
}
.yy{
  width: 280px;
  height: 165px;
  margin-left: 30px;
  box-sizing: border-box;
  float: left;
}
.yy p{
  font-size: 13px;
  margin: -90px 38px;
}
.yy ul{
  margin-top: 60px;
  margin-left: 128px;
}
.yy ul li{
  list-style: none;
  padding: 5px;
  font-size: 13px;  
}
.ee{
  width: 280px;
  height: 165px;
  margin-left: 20px;
  box-sizing: border-box;
  float: left;
}
.ee p{
  font-size: 13px;
  margin: -90px 32px;
}
.ee ul{
  margin-top: 60px;
  margin-left: 128px;
}
.ee ul li{
  list-style: none;
  padding: 5px;
  font-size: 13px;  
}
.sa{
  width: 280px;
  height: 165px;
  margin-left: 20px;
  box-sizing: border-box;
  float: left;
}
.sa p{
  font-size: 13px;
  margin: -90px 38px;
}
.sa ul{
  margin-top: 10px;
  margin-left: 128px;
}
.sa ul li{
  list-style: none;
  padding: 5px;
  font-size: 13px;  
}
.ss{
  width: 280px;
  height: 165px;
  margin-left: 30px;
  box-sizing: border-box;
  float: left;
}
.ss p{
  font-size: 13px;
  margin: -90px 38px;
}
.ss ul{
  margin-top:10px;
  margin-left: 128px;
}
.ss ul li{
  list-style: none;
  padding: 5px;
  font-size: 13px;  
}
.tong{
  width: 93%;
  height: 350px;
  margin: 0px auto;
  background-color: white;
  margin-top: 30px;
}
.tong p{
  font-size: 16px;
  color: gray;
  margin: 10px 10px;
}
.t1{
  width: 160px;
  height: 40px;
  background-color: rgba(26, 179, 148, 1);
  margin-left: 30px;
  float: left;
}
.t1 p{
  font-size: 15px;
  color: white;
  text-align: center;
}
.t2{
  width: 160px;
  height: 40px;
  background-color:gainsboro;
  margin-left: 10px;
  float: left;
}
.t2 p{
  font-size: 15px;
  color: black;
  text-align: center;
}
.t3{
  width: 160px;
  height: 40px;
  background-color:gainsboro;
  margin-left: 10px;
  float: left;
}
.t3 p{
  font-size: 15px;
  color: black;
  text-align: center;
}
.t4{
  width: 160px;
  height: 40px;
  background-color: gainsboro;
  margin-left: 10px;
  float: left;
}
.t4 p{
  font-size: 15px;
  color: black;
  text-align: center;
}



</style>
