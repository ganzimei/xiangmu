<template>
  <div class="jieg">
    <tou></tou>
    <div class="zi">
      <p>教学设备管理>设备借出和归还</p>
    </div>
    <div class="biao">
      <p>借出与归还记录</p>
      <el-row>
        <el-button><router-link to="/weiyi">查看未处理申请</router-link></el-button>
      </el-row>
      <el-input v-model="input" placeholder="请输入编码或名称"></el-input>
      <el-input v-model="input" placeholder="借用人姓名" class="ren"></el-input>
      <span>借出时间：</span>
      <div class="block">
        <el-date-picker type="date" v-model="value1"> </el-date-picker>
        <a>-</a>
      </div>
      <div class="block1">
        <el-date-picker type="date" v-model="value1" class="v2">
        </el-date-picker>
      </div>
      <el-row>
        <el-button class="cha">查询</el-button>
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
          size="12px"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="分类" width="100">
            <template slot-scope="scope">{{ scope.row.fen }}</template>
          </el-table-column>
          <el-table-column prop="name" label="名称" width="50">
          </el-table-column>
          <el-table-column prop="bian" label="编码" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="dan" label="单价(元)" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="chu" label="借出数量" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="gui" label="规格" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="xing" label="借用人姓名" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="suo" label="所在部门" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="jie" label="借出时间" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="huan" label="归还时间" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="shu" label="归还数量" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="zhuang" label="归还状态" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作" width="150px">
            <template slot-scope="scope">
              <el-button class="bian"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >查看</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </template>
      <div class="ye">
        <p>共5页，每页展示10条</p>
        <el-pagination background layout="prev, pager, next" :total="50">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import tou from "@/components/tou";
export default {
  name: "jieg",
  components: {
    tou,
  },
  data() {
    return {
      input: "",
      value1: "",
      tableData: [
        {
          fen: "行政办公设备-桌椅类",
          name: "办公桌",
          bian: "03036752",
          dan: "100.00",
          chu: "10",
          gui: "普通",
          xing: "李飘飘",
          suo: "语文组",
          jie: "2017-11-6",
          huan: "—",
          shu: "0",
          zhuang: "未归还"
        },
        {
          fen: "行政办公设备-桌椅类",
          name: "椅子",
          bian: "03036752",
          dan: "50.00",
          chu: "10",
          gui: "普通",
          xing: "李飘飘",
          suo: "语文组",
          jie: "2017-11-6",
          huan: "2017-11-6",
          shu: "10",
          zhuang: "全部归还"
        },
        {
          fen: "行政办公设备-桌椅类",
          name: "椅子",
          bian: "03036752",
          dan: "50.00",
          chu: "10",
          gui: "普通",
          xing: "李飘飘",
          suo: "语文组",
          jie: "2017-11-6",
          huan: "2017-11-6",
          shu: "6",
          zhuang: "部分归还"
        },
        {
          fen: "行政办公设备-桌椅类",
          name: "椅子",
          bian: "03036752",
          dan: "50.00",
          chu: "10",
          gui: "普通",
          xing: "李飘飘",
          suo: "语文组",
          jie: "2017-11-6",
          huan: "",
          shu: "0",
          zhuang: "未归还"
        },
        {
          fen: "行政办公设备-桌椅类",
          name: "椅子",
          bian: "03036752",
          dan: "50.00",
          chu: "10",
          gui: "普通",
          xing: "李飘飘",
          suo: "语文组",
          jie: "2017-11-6",
          huan: "2017-11-6",
          shu: "6",
          zhuang: "部分归还"
        },
        {
          fen: "",
          name: "",
          bian: "",
          dan: "",
          chu: "",
          gui: "",
          xing: "",
          suo: "",
          jie: "",
          huan: "",
          shu: "",
          zhuang: ""
        },
        {
          fen: "",
          name: "",
          bian: "",
          dan: "",
          chu: "",
          gui: "",
          xing: "",
          suo: "",
          jie: "",
          huan: "",
          shu: "",
          zhuang: ""
        }
      ],
      multipleSelection: [],
      handleSelectionChange: [],
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
.jieg {
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
  background: white;
  border-radius: 0;
  color: red;
  border-color: red;
  margin: -10px 30px;
  height: 35px;
  width: 130px;
}
.el-input {
  border-color: rgba(61, 185, 160);
  width: 145px;
  margin-left: 178px;
  margin-top: -30px;
  position: absolute;
  height: 35px;
}
.ren {
  border-color: rgba(61, 185, 160);
  width: 110px;
  margin-left: 328px;
  margin-top: -30px;
  position: absolute;
  height: 35px;
}

.el-input__inner {
  border-radius: none;
}
.biao span {
  font-size: 14px;
  margin: -20px 440px;
  position: absolute;
  color: grey;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 140px;
  margin-left: 503px;
}
.biao a {
    margin: -8px -53px;
    position: absolute;
    color: red;
    font-size: 15px;
    text-decoration: none;
}
.block a{
    margin: -23px 652px;
    position: absolute;
    color: grey;
    font-size: 20px;
}
.block1 {
  width: 140px;
  margin-left: 165px;
  position: absolute;
}
.cha {
  background: rgb(61, 185, 160);
  border-color: rgb(61, 185, 160);
  border-radius: 0;
  color: white;
  margin: -29px 850px;
  width: 80px;
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
.ge {
  width: 93%;
  height: 600px;
  margin-top: 50px;
  margin: 0 auto;
  background: white;
}
.cell {
  font-size: 12px !important;
}
.ye p {
  font-size: 15px;
  color: grey;
  float: right;
  margin: 5px 350px;
}
.el-pagination {
  margin: 10px 900px;
}
.bian{
  margin: 0px 0px;
  width: 60px;
  background: white;
  color:grey;
  border: none;
}
</style>
