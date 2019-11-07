<template>
  <div class="table">
    <div class="table-header back-f8f9fa min-wid">
      <div class="table-row header-row ptb10 c9 fs12" ref="headerRow">
        <div v-for="(titl,index) in title" :class="[index==(title.length-1)?'':'boder-rig']"
             class="row-details pl20 pr10" :style="{width:dataWid[index]+'px'}">
          <span class="pl10">{{titl.title}}</span>
        </div>
      </div>
    </div>
    <div class="table-body" ref="bodyRef">
      <div class="min-wid" ref="tableBody">
        <div v-for="(data,ind) in datas" class="table-row body-row ptb10 c3 fs12 border-bott"
             :class="[ind%2==0?'back-white':'back-f8f9fa']" :ref="`row${ind}`">
          <div v-for="(titl,index) in title" :class="[index==(title.length-1)?'':'boder-rig']"
               class="row-details pl20 pr10" :style="{width:dataWid[index]+'px'}" style="position: relative"
               @mouseenter="mouseover(ind,index)" @mouseleave="mouseLeave(ind,index)">
            <!--            <span v-if="index==0" class="pl10">-->
            <!--                <input type="checkbox">-->
            <!--            </span>-->
            <!--超过显示可点击图标-->
            <span v-show="iconShow[ind][index]" class="more-icon" @click="moreClick(ind,index)">
              <svg aria-hidden='true' class="icon">
                <use xlink:href="#icon-iiconfont-angle-up"></use>
              </svg>
            </span>
            <div v-show="isShowMore[ind][index]" class="show-more" :style="{top: moreTop}">
              <!--超过显示内容-->
              <div v-html="$options.filters.formater(data[titl.name],titl.formater,titl.pattern)"
                   class="more-details" :ref="`showMore${ind}${index}`"></div>
              <!--关闭超过显示内容图标-->
              <span class="details-close cursor-pointer" @click="closeMore(ind,index)">
              <svg aria-hidden='true' class="icon">
                  <use xlink:href="#icon-guanbi2"></use>
                </svg>
            </span>
            </div>
            <!-- 表格显示icon-->
            <span v-if="titl.type=='button'">
              <span v-for="btn in titl.operations" class="pl10" :title="btn.text" @click="btn.callBack(data)">
                <svg aria-hidden='true' class="icon">
                  <use :xlink:href="btn.icon"></use>
                </svg>
              </span>
            </span>
            <!-- 表格显示内容-->
            <div v-else class="pl10 ellip" :ref="`content${ind}${index}`">
              <span v-html="$options.filters.formater(data[titl.name],titl.formater,titl.pattern)"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {formatDate} from '@/assets/js/formatDate'  //引入时间格式化js
    export default {
        name: "LoongTable",
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
                datas: [
                    {
                        "name": "1",
                        "domain": ".com     张三张三张三张三张三张三张三张三张三张三张三张三张三testttttttttttttttttttttttttttttt",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "2",
                        "domain": "dd.cn",
                        "service": "NFS",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "3",
                        "domain": "cccaf2.ccc",
                        "service": "HTTP",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "4",
                        "domain": "dd.cn",
                        "service": "FTP",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "5",
                        "domain": "cccaf2.ccc",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "6",
                        "domain": "dd.cn",
                        "service": "NFS",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "7",
                        "domain": "cccaf2.ccc",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "8",
                        "domain": "dd.cn",
                        "service": "NFS",
                        "balancer": "Round",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "9",
                        "domain": "cccaf2.ccc",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "10",
                        "domain": "dd.cn",
                        "service": "NFS",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "9",
                        "domain": "cccaf2.ccc",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "10",
                        "domain": "dd.cn",
                        "service": "NFS",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "9",
                        "domain": "cccaf2.ccc",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "10",
                        "domain": "dd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cn",
                        "service": "NFS",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "9",
                        "domain": "cccaf2.ccc",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "10",
                        "domain": "dd.cn",
                        "service": "NFS",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "9",
                        "domain": "cccaf2.ccc",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "10",
                        "domain": "dd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cn",
                        "service": "NFS",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "9",
                        "domain": "cccaf2.ccc",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "10",
                        "domain": "dd.cn",
                        "service": "NFS",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "9",
                        "domain": "cccaf2.ccc",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "10",
                        "domain": "dd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cn",
                        "service": "NFS",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "9",
                        "domain": "cccaf2.ccc",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "10",
                        "domain": "dd.cn",
                        "service": "NFS",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    },
                    {
                        "name": "9",
                        "domain": "cccaf2.ccc",
                        "service": "CIFS",
                        "balancer": "Service",
                        "autoFailover": true,
                        "failbackPolicy": "auto",
                        "ctime": 1564736083000,
                        "count": 0
                    },
                    {
                        "name": "10",
                        "domain": "dd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cndd.cn",
                        "service": "NFS",
                        "balancer": "Round-Robin",
                        "autoFailover": true,
                        "failbackPolicy": "manual",
                        "ctime": 1564736581000,
                        "count": 1
                    }
                ],
                isMultiple: 'multiple',
                setWid: 0,
                count: 0,
                notWid: [],
                dataWid: [],
                titleWid: 0,
                bodyWid: 0,
                isShowMore: [[]],
                iconShow: [[]],
                reallyShow: [[]],
                prompt: [-1, -1, -1, -1],
                moreTop: '10px',
            }
        },
        methods: {
            getWid: function () {
                for (let i in this.title) {
                    if (this.title[i].width != '' && this.title[i].width != undefined) {
                        this.setWid = this.setWid + parseInt(this.title[i].width);
                        this.dataWid[i] = parseInt(this.title[i].width) - 31;
                    } else {
                        this.count++;
                        this.notWid.push(i)
                    }
                }
            },
            getRemainWid: function (currentWidth, difference) {
                let remainWid = (currentWidth - this.setWid) / this.count - 31;
                for (let index of this.notWid) {
                    this.$set(this.dataWid, index, remainWid);
                }
                this.$set(this.dataWid, this.notWid.length - 1, remainWid - difference);
            },
            arrayInit: function () {
                for (let dataI in this.datas) {
                    this.isShowMore[dataI] = [];
                    this.reallyShow[dataI] = [];
                    this.iconShow[dataI] = [];
                    for (let titleI in this.title) {
                        this.isShowMore[dataI][titleI] = false;
                        this.reallyShow[dataI][titleI] = false;
                        this.iconShow[dataI][titleI] = false;
                    }
                }
            },
            isShow: function () {
                let content;
                for (let dataI in this.datas) {
                    for (let titleI in this.title) {
                        content = this.$refs[`content${dataI}${titleI}`];
                        if (content != undefined) {
                            if (content[0].offsetWidth < content[0].scrollWidth) {
                                this.reallyShow[dataI][titleI] = true;
                            } else {
                                this.reallyShow[dataI][titleI] = false;
                            }
                        } else {
                            this.reallyShow[dataI][titleI] = false;
                        }
                    }
                }
            },
            // 鼠标移入事件
            mouseover: function (dataI, titleI) {
                this.$set(this.iconShow[dataI], titleI, this.reallyShow[dataI][titleI]);
                this.iconShow.push();
            },
            // 鼠标移出事件
            mouseLeave: function (dataI, titleI) {
                this.$set(this.iconShow[dataI], titleI, false);
                this.iconShow.push();
            },
            // 点击查看省略信息
            moreClick: function (dataI, titleI) {
                this.prompt[2] = dataI;
                this.prompt[3] = titleI;
                if (this.prompt[0] != -1) {
                    this.$set(this.isShowMore[this.prompt[0]], this.prompt[1], false);
                }
                this.$set(this.isShowMore[dataI], titleI, true);
                this.isShowMore.push();
                this.prompt[0] = dataI;
                this.prompt[1] = titleI;
                this.$nextTick(function () {
                    this.displayPosition(dataI, titleI);
                })

            },
            // 关闭查看更多信息
            closeMore: function (dataI, titleI) {
                this.$set(this.isShowMore[dataI], titleI, false);
                this.isShowMore.push();
            },
            displayPosition: function (dataI, titleI) {
                let showOffHei;
                let offTop;
                let bodyOffHei;
                let scrTop;
                showOffHei = this.$refs[`showMore${dataI}${titleI}`][0].offsetHeight;
                offTop = this.$refs[`row${dataI}`][0].offsetTop;
                bodyOffHei = this.$refs.bodyRef.offsetHeight;
                scrTop = this.$refs.bodyRef.scrollTop;
                if (showOffHei + offTop + 10 > bodyOffHei + scrTop) {
                    this.moreTop = -(showOffHei - 36) + 'px'
                } else {
                    this.moreTop = '10px'
                }
            }
        },
        created() {
            this.getWid();
            this.arrayInit();
        },
        mounted() {
            let _this = this;
            this.titleWid = this.$refs.headerRow.offsetWidth;
            this.bodyWid = this.$refs.tableBody.offsetWidth;
            window.onresize = () => {
                this.titleWid = this.$refs.headerRow.offsetWidth;
                this.bodyWid = this.$refs.tableBody.offsetWidth;
            };
            this.$refs.bodyRef.onscroll  = () => {
                if(_this.prompt[0]!=-1) {
                    this.displayPosition(this.prompt[0],this.prompt[1]);
                }

            }
        },
        filters: {
            //时间格式化
            formater: function (value, incomingType, type) {
                let types = typeof incomingType;
                if (types == "undefined") {
                    return value;
                } else if (types == "function") {
                    return incomingType(value, type);
                } else if (types == "string" && incomingType == "dateFormat") {
                    return formatDate(value, type);
                }
            }
        },
        watch: {
            titleWid: function (newVal, oldVal) {
                let difference = newVal - this.bodyWid;
                this.getRemainWid(newVal, difference);
                this.$nextTick(function () {
                    this.isShow();
                })
            }
        }
    }
</script>

<style scoped>
  .min-wid {
    min-width: 600px;
  }

  .ptb10 {
    padding: 10px 0;
  }

  .back-f8f9fa {
    background-color: #f8f9fa;
  }

  .boder-rig {
    border-right: 1px solid #e9ecef;
  }

  .border-bott {
    border-bottom: 1px solid #E9ECEF;;
  }

  .table {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .table-row:hover {
    background-color: #F3F5F7 !important;
  }

  .table-header {
    border-bottom: 1px solid #E9ECEF;
    border-top: 1px solid #E9ECEF;
  }

  .header-row {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .table-body {
    height: calc(100% - 55px);
    overflow: auto;
    position: relative;
  }

  .body-row {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .more-icon {
    position: absolute;
    right: 0px;
    border-left: 1px solid #e9ecef;
    background-color: #F3F5F7
  }

  .more-details {
    position: absolute;
    left: -21px;
    top: -10px;
    width: calc(100% + 21px);
    min-height: 38px;
    max-height: 152px;
    line-height: 38px;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #ffffff;
    border: 1px solid #e6e6e6;
    padding: 4px;
    z-index: 2;
    overflow-y: auto;
    -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, .4);
    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, .4);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .4);
  }

  .details-close {
    position: absolute;
    font-size: 20px;
    right: -20px;
    top: -25px;
    z-index: 3;
  }

  .show-more {
    position: relative;
    /*top: 10px;*/
    /*top: -12px;*/
  }
</style>
