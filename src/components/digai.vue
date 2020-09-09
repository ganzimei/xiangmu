<template>
  <div class="digai">
    <tou></tou>
    <div class="zi">
      <p>地产管理>地产改造</p>
    </div>
    <div class="biao">
      <p>改造记录</p>
      <el-row>
        <el-button>+新增改造</el-button>
      </el-row>
      <el-input v-model="input" placeholder="请输入编码或名称"></el-input>
      <span>改造时间：</span>
      <input type="text" vlaue="" class="ru" />
      <a>-</a>
      <input type="text" vlaue="" class="ru1" />
      <el-row>
        <el-button class="cha">查询</el-button>
      </el-row>
      <el-row>
        <el-button class="pi">批量导入</el-button>
      </el-row>
      <el-dropdown>
        <el-button type="primary" class="dao">
          导出excel<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" class="tan">
          <el-dropdown-item>导出全部</el-dropdown-item>
          <el-dropdown-item>导出选中</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="ge">
      <template>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="编码" width="180">
            <template slot-scope="scope">{{ scope.row.fen }}</template>
          </el-table-column>
          <el-table-column prop="name" label="名称" width="120">
          </el-table-column>
          <el-table-column prop="tu" label="土地面积（㎡）" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="jian" label="建筑面积（㎡）" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="fei" label="非建筑面积（㎡）" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="di" label="地址" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="zh" label="改造开始时间" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="bian" label="改造结束时间" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作" width="150px">
            <template slot-scope="scope">
              <el-button class="bian"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button class="shan"
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-row>
        <el-button class="bao1">批量删除</el-button>
      </el-row>
      <div class="ye">
        <p>共5页，每页展示10条</p>
        <el-pagination
  background
  layout="prev, pager, next"
  :total="50">
</el-pagination>
      </div>

    </div>
  </div>
</template>
<script>
import tou from "@/components/tou";
export default {
  name: "digai",
  components: {
    tou,
  },
  data() {
    return {
      input: "",
      tableData: [
        {
          fen: "",
          name: "",
          tu: "",
          jian: "",
          fei: "",
          di: "",
          zh: "",
          bian: ""
        },
        {
          fen: "",
          name: "",
          tu: "",
          jian: "",
          fei: "",
          di: "",
          zh: "",
          bian: ""
        },
        {
          fen: "",
          name: "",
          tu: "",
          jian: "",
          fei: "",
          di: "",
          zh: "",
          bian: ""
        },
        {
          fen: "",
          name: "",
          tu: "",
          jian: "",
          fei: "",
          di: "",
          zh: "",
          bian: ""
        },
        
        
      ],
      multipleSelection: [],
      handleSelectionChange:[],
    };
  },
  methods: {
    handleClick() {
      alert("button click");
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style scoped>
.ruku {
  width: 100%;
  height: 850px;
}
.zi p {
  font-size: 15px;
  margin: 10px 50px;
}
.biao {
  width: 93%;
  height: 100px;
  margin-top: 30px;
  margin: 0 auto;
  background: white;
}
.biao p {
  font-size: 15px;
  margin: 30px;
  padding-top: 10px;
  color: grey;
}
.el-button {
  background: rgba(237, 86, 101);
  border-radius: 0;
  color: white;
  margin: -10px 30px;
  height: 35px;
}
.el-input {
  border-color: rgba(61, 185, 160);
  width: 280px;
  margin-left: 160px;
  margin-top: -30px;
  position: absolute;
  height: 35px;
}
.el-input__inner {
  border-radius: none;
}
.biao span {
  font-size: 14px;
  margin: -20px 445px;
  position: absolute;
  color: grey;
}
.ru {
  width: 100px;
  height: 30px;
  margin-left: 520px;
  margin-top: -30px;
  position: absolute;
  border-color: rgb(61, 185, 160);
  border-color: rgb(61, 185, 160);
}
.biao a {
  margin-left: 630px;
  margin-top: -22px;
  position: absolute;
  font-size: 20px;
}
.ru1 {
  width: 100px;
  height: 30px;
  margin-left: 650px;
  margin-top: -30px;
  position: absolute;
  border-color: rgb(61, 185, 160);
  border-color: rgb(61, 185, 160);
}
.cha {
  background: rgb(61, 185, 160);
  border-color: rgb(61, 185, 160);
  border-radius: 0;
  color: white;
  margin: -29px 765px;
  width: 80px;
  position: absolute;
  height: 35px;
}
.pi {
  background: rgb(243, 166, 76);
  border-color: rgb(243, 166, 76);
  border-radius: 0;
  color: white;
  margin: -29px 1000px;
  border: none;
  width: 100px;
  position: absolute;
  height: 35px;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.dao {
  background: rgb(243, 166, 76);
  border-color: rgb(243, 166, 76);
  border-radius: 0;
  color: white;
  margin: -29px 1110px;
  border: none;
  width: 100px;
  position: absolute;
  height: 35px;
}
.tan {
  position: absolute;
  top: 200px;
  left: 1150px;
  /* display: none; */
}
.ge {
  width: 93%;
  height: 600px;
  margin-top: 50px;
  margin: 0 auto;
  background: white;
}
.el-table{
  background-color: gray;
}
.bian{
  margin: 0px 0px;
  width: 60px;
  background: white;
  color:grey;
  border: none;
}
.shan{
  position: absolute;
  margin: 0px 0px;
  width: 60px;
  background: white;
  color:grey;
  border: none;
}
.bao{
  background: white;
  border-color: red;
  color: red;
  margin: 10px 10px;
}
.bao1{
  background: white;
  border-color: rgb(61, 185, 160);
  color: rgb(61, 185, 160);
  margin: 35px 30px;
  position: absolute;
}
.ye p{
  font-size: 15px;
  color: grey;
  float: right;
  margin: 5px 350px;
}
.el-pagination{
  margin: 40px 900px;
}

</style>
