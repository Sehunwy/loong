<template>
  <div style="width: 100%;height: 100%;background-color: #ffffff;overflow-y: hidden">
    <div style="height: 52px;padding: 0 20px">
      <div class="fl mr10 pt10 pb10">
        <div class="btn-opr cursor-pointer color-1188dd" @click="ignoreAlarm()">忽略</div>
      </div>
      <div class="fl mr10 pt10 pb10">
        <div class="btn-opr cursor-pointer color-1188dd" @click="refreshAlarm()">刷新</div>
      </div>
    </div>
    <div style="height: calc(100% - 150px);overflow: auto;" ref="table">
      <LoongTable :titleData="title" :datas="datas" :chooseWay="chooseWay"
                  @selectData="getData" @tablePageNum="getPageData" :pageNum="pageNum" :isRequest="isRequest" :isFlow="isFlow" :selectWay="selectWay" :tableHei="tableHei"></LoongTable>
    </div>
    <div style="width: 100%;overflow: hidden;margin-top: 50px" v-if="isFlow=='page'">
      <div style="margin-left: calc(50% - 210px);min-width: 500px;">
        <loongPagination v-if="isRequest" :totalPage="totalPage" :limits="limits" :pageNum="pageNum"
                         :pageSize="pageSize" @pageInfo="getPageData"></loongPagination>
      </div>
    </div>
  </div>
</template>

<script>
    import LoongTable from '@/components/LoongTable/LoongTable'
    import loongPagination from '@/components/loongPagination/loongPagination'
    import axios from 'axios'

    export default {
        name: "current-alarm",
        data() {
            return {
                title: [
                    {
                        name: "service",
                        title: "服务",
                        width: "200px",
                    },
                    {
                        name: "name",
                        title: "组名",
                        width: "200px"
                    },
                    {
                        name: "domain",
                        title: "域名",
                        width: ""
                    },
                    {
                        name: "autoFailover",
                        title: "故障切换策略",
                        width: "201px"
                    },
                    {
                        name: "ctime",
                        title: "修改时间",
                        formater: 'dateFormat',
                        pattern: "Y-M-D h:m:s"
                    },
                    {
                        name: "ctime",
                        title: "修改时间",
                        formater: function (value, type) {
                            let d = new Date(parseInt(value));
                            let Y = d.getFullYear();
                            let M = d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
                            let date = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
                            let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
                            let minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
                            let second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
                            if (type == '年月日' || type == 1) {
                                return Y + "年" + M + "月" + date + "日";
                            }
                            if (type == 'Y-M-D' || type == 2) {
                                return Y + "-" + M + "-" + date;
                            }
                            if (type == 'Y.M.D' || type == 3) {
                                return Y + "." + M + "." + date;
                            }
                            if (type == 'Y/M/D' || type == 4) {
                                return Y + "/" + M + "/" + date;
                            }
                            if (type == '年月日 时分秒' || type == 5) {
                                return Y + "年" + M + "月" + date + "日 " + hour + ":" + minute + ":" + second;
                            }
                            if (type == 'Y-M-D h:m:s' || type == 6) {
                                return Y + "-" + M + "-" + date + " " + hour + ":" + minute + ":" + second;
                            }
                            if (type == 'Y.M.D h:m:s' || type == 7) {
                                return Y + "." + M + "." + date + " " + hour + ":" + minute + ":" + second;
                            }
                            if (type == 'Y/M/D h:m:s' || type == 8) {
                                return Y + "/" + M + "/" + date + " " + hour + ":" + minute + ":" + second;
                            }
                            if (type == '年月日 时分' || type == 9) {
                                return Y + "年" + M + "月" + date + "日 " + hour + ":" + minute;
                            }
                            if (type == 'Y-M-D h:m' || type == 10) {
                                return Y + "-" + M + "-" + date + " " + hour + ":" + minute;
                            }
                            if (type == 'Y.M.D h:m' || type == 11) {
                                return Y + "." + M + "." + date + " " + hour + ":" + minute;
                            }
                            if (type == 'Y/M/D h:m' || type == 12) {
                                return Y + "/" + M + "/" + date + " " + hour + ":" + minute;
                            }
                            return value;
                        },
                        pattern: "Y-M-D h:m:s"
                    },
                    {
                        "name": "operation",
                        "title": "操作",
                        "type": "button",
                        "width": '100px',
                        "operations": [{
                            "icon": "#icon-rilizuo",
                            "text": "扩容",
                            "callBack": function (data) {
                                console.log(data);
                            }
                        }, {
                            "icon": "#icon-rilizuo",
                            "text": "修改",
                            "callBack": function (data) {
                                console.log(data);
                            }
                        }, {
                            "icon": "#icon-rilizuo",
                            "text": "test",
                            "callBack": function (data,) {
                                console.log(data);
                                alert("ssss");
                            }
                        }]
                    }],
                datas: [],
                chooseWay: 'checkbox',  // checkbox 多选   radio 单选
                selectWay:"selectBox", // row 行选中   selectBox check选框选中
                selectDatas: [],
                tableHei: "42px",
                pageSize: 20,
                pageNum: 1,
                totalPage: 1,
                isRequest: false, // 数据是否请求完
                limits: [10, 20, 30, 40, 50, 60],
                isFlow: "page", // flow 流加载  page 分页加载
                existPage:[]
            }
        },
        methods: {
            getData: function (data) {
                this.selectDatas = data;
            },
            refreshAlarm: function () {
                this.pageNum = 1;
                this.datas = [];
                this.existPage = [];
                this.getTableData();
            },
            ignoreAlarm: function () {
                console.log(this.selectDatas)
            },
            getTableData: function () {
                this.isRequest = false;
                axios.get('http://13.15.11.34:3000/getlist', {
                    params: {
                        pageSize: this.pageSize,
                        pageNum: this.pageNum,
                    }
                })
                    .then(response => {
                        this.totalPage = response.data.totalPage;
                        if(this.isFlow == "flow") {
                            if(this.existPage.indexOf(this.pageNum) == -1) {
                                this.existPage[this.pageNum] = this.pageNum;
                                this.datas = this.datas.concat(response.data.data);
                            }
                        }else {
                            this.datas = response.data.data;
                        }
                        this.isRequest = true;
                    })
                    .catch((error) => {
                        alert('请求失败了哦')
                    })
            },
            getPageData: function (data) {
                if(this.isFlow == "flow") {
                    this.pageNum = data;
                }
                else {
                    this.pageSize = data.pageSize;
                    this.pageNum = data.pageNum;
                }
            }
        },
        created() {
            this.getTableData();
        },
        watch: {
            pageSize: function (newVal, oldVal) {
                this.getTableData();
            },
            pageNum: function (newVal, oldVal) {
                this.getTableData();
            }
        },
        components: {
            LoongTable, loongPagination
        },
    }
</script>

<style scoped>
  .btn-opr {
    display: inline-block;
    height: 32px;
    padding: 0 10px;
    background-color: #EEF7FF;
    font-size: 12px;
    line-height: 32px;
    border-radius: 4px;
    font-family: PingFangSC-Regular;
  }

  .btn-opr:hover {
    background-color: #DDEEFF;;
  }
</style>
