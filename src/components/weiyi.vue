<template>
  <div class="weiyi">
    <tou></tou>
    <div class="zi">
      <p>教学设备管理>设备借出和归还>未处理借入申请</p>
    </div>

    <div class="ge">
      <p><router-link to="/jieg"> >> 返回 </router-link></p>
      <el-row>
        <el-button class="jie">借出</el-button>
      </el-row>
      <el-row>
        <el-button class="ju">拒绝</el-button>
      </el-row>
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
          <el-table-column label="申请人姓名" width="150">
            <template slot-scope="scope">{{ scope.row.fen }}</template>
          </el-table-column>
          <el-table-column prop="suo" label="所在部门" width="100">
          </el-table-column>
          <el-table-column prop="shen" label="申请时间" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="she" label="借入设备" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="shi" label="借入时间" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="yu" label="预计归还时间" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作" width="150px">
            <template slot-scope="scope">
              <el-button class="bian"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >拒绝</el-button
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
  name: "weiyi",
  components: {
    tou,
  },
  data() {
    return {
      input: "",
      value1: "",
      tableData: [
        {
          fen: "李飘飘",
          suo: "",
          shen: "2017-11-6",
          she: "查看详情",
          shi: "2017-11-16",
          yu: "2017-11-26"
        },
        {
          fen: "李飘飘",
          suo: "",
          shen: "2017-11-6",
          she: "查看详情",
          shi: "2017-11-16",
          yu: "2017-11-26"
        },
        {
          fen: "李飘飘",
          suo: "",
          shen: "2017-11-6",
          she: "查看详情",
          shi: "2017-11-16",
          yu: "2017-11-26"
        },
        {
          fen: "",
          suo: "",
          shen: "",
          she: "",
          shi: "",
          yu: ""
        },
        {
          fen: "",
          suo: "",
          shen: "",
          she: "",
          shi: "",
          yu: ""
        },
        {
          fen: "",
          suo: "",
          shen: "",
          she: "",
          shi: "",
          yu: ""
        },
        
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
.weiyi {
  width: 100%;
  height: 750px;
}
.zi p {
  font-size: 15px;
  margin: 10px 50px;
}
.ge {
  width: 93%;
  height: 600px;
  margin-top: 50px;
  margin: 0 auto;
  background: white;
}
.ge p {
  color: grey;
  font-size: 15px;
  margin-left: 30px;
  padding-top: 10px;
  text-decoration: none;
}
a{
  text-decoration: none;
}
.jie{
  margin-left: 30px;
  width: 100px;
  border-color: rgb(26, 179, 148);
  background: rgb(26, 179, 148);
  color: white;
  border-radius: 0px;
}
.ju{
  margin: -40px 150px;
  position: absolute;
  width: 100px;
  border-color: rgb(237, 86, 101);
  background: rgb(237, 86, 101);
  color: white;
  border-radius: 0px;
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
