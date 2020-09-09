<template>
  <div>
    <p>{{shijian | guolu}}</p>
    <!-- {{new Data()}} -->
  </div>
</template>

<script>
var pasetime = function(datetime) {
  return datetime < 10 ? "0" + datetime : datetime;
};
export default {
  data() {
    return {
      shuru: "",
      shijian: new Date(),
      daojishi: 30,
      checkedNames: []
    };
  },
  filters: {
    daxie(val) {
      if (val != "") {
        return val.charAt(0).toUpperCase() + val.slice(1);
      }
    },
    guolu(value) {
       var date = new Date(value);
      var nian = pasetime(date.getFullYear());
      var yue = pasetime(date.getMonth()+1);
      var ri = pasetime(date.getDate());
      var shi = pasetime(date.getHours());
      var fen = pasetime(date.getMinutes());
      var miao = pasetime(date.getSeconds());
      console.log(yue)
      console.log(ri)
      return (
        nian +
        "年" +
        yue +
        "月" +
        ri +
        "日" +
        "      " +
        shi +
        ":" +
        fen +
        ":" +
        miao
      );
    }
  },
  methods: {
    tiaozhuan() {}
  },
  created() {
    let than = this;
    (this.timer = setInterval(function() {
      than.shijian = new Date();
    }, 1000)),
      (this.timer1 = setInterval(function() {
        than.daojishi--;
        if (than.daojishi == 0) {
          than.$router.push({
            path: "/"
          });
        }
      }, 1000));
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.timer1) {
      clearInterval(this.timer1);
    }
  }
  //转换时间格式
};
</script>

<style>
</style>