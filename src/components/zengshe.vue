<template>
  <div class="zengshe">
    <div class="quan">
      <div class="zeng">
        <div class="top">
          <p>新增设备</p>
          <router-link to="/ruku">
          <i class="el-icon-close"></i>
          </router-link>
        </div>
        <div class="xia">
          <ul>
            <li>
              选择分类：<el-select
                v-model="select1"
                slot="prepend"
                placeholder="请选择"
              >
                <el-option
                  label="行政办公设备-桌椅类"
                  value="行政办公设备-桌椅类"
                ></el-option>
                <el-option
                  label="行政办公设备-桌椅类1"
                  value="行政办公设备-桌椅类1"
                ></el-option>
                <el-option
                  label="行政办公设备-桌椅类2"
                  value="行政办公设备-桌椅类2"
                ></el-option>
              </el-select>
            </li>
            <li>设备名称：<el-input v-model="input0"></el-input></li>
            <li>编码：<el-input v-model="input1"></el-input></li>
            <li>单价：<el-input v-model="input2"></el-input></li>
            <li>数量：<el-input v-model="input3"></el-input></li>
            <li>规格：<el-input v-model="input4"></el-input></li>
            <li>
              存放地点：<el-select
                v-model="select"
                slot="prepend"
                placeholder="请选择"
              >
                <el-option label="库房1" value="1"></el-option>
                <el-option label="库房2" value="2"></el-option>
                <el-option label="库房3" value="3"></el-option>
              </el-select>
            </li>
            <li>
              是否唯一:<el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </li>
          </ul>
          <el-row>
            <el-button @click="add">提交</el-button>
          </el-row>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "zengshe",
  data() {
    return {
      input0: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      select1: "",
      select: "",
      radio: "1",
    };
  },

  methods: {
    add() {
      if (
        this.input0 != "" &&
        this.input1 != "" &&
        this.input2 != "" &&
        this.input3 != "" &&
        this.select1 != "" &&
        this.input4 != "" &&
        this.select != ""
      ) {
        let sz = {
          fen: this.select1,
          name: this.input0,
          bian: this.input1,
          dan: this.input2,
          shu: this.input3,
          gui: this.input4,
          cun: this.select,
          shi: (this.radio == this.radio) == 1 ? "是" : "否",
          name1: this.values,
          ku: "2017-11-6",
          shang: "√",
        };
        console.log(sz);
        this.$router.push({
          name: "ruku",
          params: {
            items: sz,
          },
        });
      } else {
        alert(3);
      }
    }
  },
};
</script>
<style scoped>
.zengshe {
  width: 100%;
  height: 800px;
  background-color: white;
}
.zeng {
  width: 440px;
  height: 470px;
  margin: 100px auto;
  background-color: rgba(244, 244, 246, 1);
}
.top {
  height: 40px;
  background-color: rgba(26, 179, 148, 1);
}
.top p {
  font-size: 15px;
  color: white;
  padding: 10px;
}
.el-icon-close {
  float: right;
  color: white;
  font-size: 20px;
  margin: -40px 10px;
  font-weight: bold;
}
.xia ul li {
  list-style: none;
  padding: 3px;
}
.el-input {
  width: 55%;
}
.xia ul li:nth-of-type(3) {
  margin: 0px 33px;
}
.xia ul li:nth-of-type(4) {
  margin: 0px 33px;
}
.xia ul li:nth-of-type(5) {
  margin: 0px 33px;
}
.xia ul li:nth-of-type(6) {
  margin: 0px 33px;
}
.el-button {
  width: 100px;
  background: rgba(26, 179, 148, 1);
  margin-left: 35%;
  color: white;
}
</style>
