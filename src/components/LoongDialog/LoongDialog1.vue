<template>
  <div style="position: relative;z-index: 1000">
      <span v-html="dialogClickData" @click="clickButton()">
      </span>
    <div class="loong-dialog" v-show="dialogIsShow">
      <div :style="{top:dialogTop+'px',left:dialogLeft+'px'}" class="dialog-popup"
           :class="[isBigger?'dialog-popupMax':'dialog-popupNormal']">
        <div class="dialog-popupTop" @mousedown="mousedown($event)">
          <div class="dialog-popTitle" v-html="titleDialog"></div>
          <div class="dialog-maximize" @click="isBiggerDialog()">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kelong"></use>
            </svg>
          </div>
          <div class="dialog-popClose" @click="colseDialog()">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guanbi1"></use>
            </svg>
          </div>
        </div>
        <div class="dialog-content" v-html="contentDialog"></div>
      </div>
      <div class="dialog-cover-layer" ref="popup">
        test
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LoongDialog",
        data() {
            return {
                dialogIsShow: false,
                isBigger: false,
                dialogLeft: '',
                dialogTop: '',
                popupWid: '',
                popupHei: ''
            }
        },
        props: {
            dialogClickData: {},
            titleDialog: {},
            contentDialog: {}
        },
        methods: {
            // 点击显示弹窗
            clickButton: function () {
                this.dialogIsShow = true;
                this.$nextTick(function () {
                    this.popupWid = this.$refs.popup.clientWidth;
                    this.popupHei = this.$refs.popup.clientHeight;
                    this.dialogLeft = this.popupWid / 2;
                    this.dialogTop = this.popupHei / 2;
                })
            },
            // 点击关闭按钮，关闭弹窗
            colseDialog: function () {
                this.dialogIsShow = false;
            },
            // 是否放大，缩小弹窗
            isBiggerDialog: function () {
                this.isBigger = !this.isBigger;
            },
            // 鼠标按下事件
            mousedown: function (event) {
                let clientX = event.clientX;
                let clientY = event.clientY;
                let _this = this;
                let top = _this.dialogTop;
                let left = _this.dialogLeft;
                let popWid = 580 / 2;
                let popHei = 380 / 2;
                document.onmousemove = e => {
                    let clientXNow = e.clientX;
                    let clientYNow = e.clientY;
                    _this.dialogTop = clientYNow - clientY + top;
                    _this.dialogLeft = clientXNow - clientX + left;
                }
                document.onmouseup = e => {
                    // 鼠标弹起来的时候不再移动
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            }
        }
    }
</script>

<style scoped>

  .loong-dialog {
    width: 100%;
    height: 100%;
  }

  .dialog-cover-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgba(3, 20, 32, 1) none repeat scroll 0 0;
    opacity: 0.3;
  }

  .dialog-popup {
    position: absolute;
    background-color: white;
    z-index: 10000;
    border-radius: 10px;
  }

  .dialog-popupNormal {
    width: 580px;
    height: 380px;
    margin-left: -290px;
    margin-top: -190px;
  }

  .dialog-popupMax {
    width: 860px;
    height: 540px;
    margin-left: -430px;
    margin-top: -270px;
  }

  .dialog-popupTop {
    width: 100%;
    height: 50px;
    background-color: #38455A;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    cursor: move;
  }

  .dialog-popTitle {
    position: absolute;
    color: #ffffff;
    line-height: 50px;
    left: 10px;
  }

  .dialog-popClose {
    position: absolute;
    color: #ffffff;
    top: 18px;
    right: 18px;
    font-size: 14px;
  }

  .dialog-popClose, .dialog-maximize:hover {
    cursor: pointer;
  }

  .dialog-maximize {
    position: absolute;
    color: #ffffff;
    top: 18px;
    right: 50px;
    font-size: 16px;
  }

  .dialog-content {
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    padding: 15px;
    line-height: 25px;
    height: calc(100% - 50px);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
</style>
