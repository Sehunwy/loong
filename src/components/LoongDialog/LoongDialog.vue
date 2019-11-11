<template>
  <div class="dialog">
    <div v-html="button" @click="setShowDialog(true)"></div>
<!--    <button class="confirm-button button-common" @click="setShowDialog(true)">button</button>-->
    <div v-show="showDialog" class="loong-dialog">
      <div class="dialog-popup" ref="loongDialog" :style="{top:top,left:left}" :class="[modalType=='min'?'min-dialog':'max-dialog']">
        <div class="dialog-popupTop fs14" @mousedown="mousedown($event)">
          <div class="ellip dialog-title" v-html="title">
          </div>
          <div class="dialog-close" @click="setShowDialog(false)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guanbi1"></use>
            </svg>
          </div>
        </div>
        <div class="dialog-body-wrap">
          <div class="body-wrap">
            <div class="dialog-content" v-html="content" :class="[modalType=='min'?'min-dialog-content':'max-dialog-content']">
            </div>
            <div class="dialog-buttons">
              <div class="buttons-wrap">
                <button v-for="button in buttons" :class="button.className" @click="buttonClick(button.callback)">
                  {{button.txt}}
                </button>
<!--                <button class="confirm-button button-common">确定</button>-->
<!--                <button class="cancel-button button-common">取消</button>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dialog-cover-layer"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LoongDialog",
        data() {
            return {
                showDialog: false,
                top: "0px",
                left: "0px"
            }
        },
        methods: {
            // 显示 关闭弹窗
            setShowDialog: function (bool) {
                this.showDialog = bool;
                if (bool) {
                    this.setLocation()
                }
            },
            // 鼠标按下事件 移动弹窗
            mousedown: function (event) {
                let loongDialog = this.$refs.loongDialog;
                let offsetTop = loongDialog.offsetTop;
                let offsetLeft = loongDialog.offsetLeft;
                let clientX = event.clientX;
                let clientY = event.clientY;
                let _this = this;
                document.onmousemove = e => {
                    let windowHei = window.innerHeight;
                    let windowWid = window.innerWidth;
                    let wid = loongDialog.offsetWidth;
                    let hei = loongDialog.offsetHeight;
                    let bottom = windowHei - hei;
                    let right = windowWid - wid;
                    let clientXNow = e.clientX;
                    let clientYNow = e.clientY;
                    let top = clientYNow - clientY + offsetTop;
                    let left = clientXNow - clientX + offsetLeft;
                    if (top <= 0) {
                        top = 0;
                    }
                    if (left <= 0) {
                        left = 0;
                    }
                    if (left >= right) {
                        left = right
                    }
                    if (top >= bottom) {
                        top = bottom;
                    }
                    _this.top = top + 'px';
                    _this.left = left + 'px';
                    // loongDialog.style.top = top + 'px';
                    // loongDialog.style.left = left + 'px';
                }
                document.onmouseup = e => {
                    // 鼠标弹起来的时候不再移动
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            },
            // 设置弹窗居中显示
            setLocation: function () {
                this.$nextTick(function () {
                    let windowHei = window.innerHeight;
                    let windowWid = window.innerWidth;
                    let loongDialog = this.$refs.loongDialog;
                    this.top = (windowHei - loongDialog.offsetHeight) / 2 + 'px';
                    this.left = (windowWid - loongDialog.offsetWidth) / 2 + 'px';
                })
            },
            // 点击按钮
            buttonClick: function (callback) {
                let result = callback();
                if(result!=undefined) {
                    this.showDialog = !result
                }
            }
        },
        mounted() {
            window.onresize = () => {
                this.setLocation();
            };
        },
        props:{
            button:{},
            title:{},
            content:{},
            buttons:{},
            modalType:{}
        },
    }
</script>

<style scoped>
  .buttons-wrap {
    position: absolute;
    bottom: 15px;
    right: 30px
  }

  .dialog-buttons .button-common {
    margin-left: 15px;
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
    position: fixed;
    z-index: 10000;
  }

  .min-dialog {
    width: 580px;
  }

  .max-dialog {
    width: 860px;
  }

  .dialog-popupTop {
    width: 100%;
    height: 44px;
    line-height: 44px;
    background-color: #38455A;
    color: #ffffff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    cursor: move;
  }

  .dialog-title {
    margin-left: 20px;
    width: calc(100% - 80px)
  }

  .dialog-close {
    position: absolute;
    top: 0px;
    right: 10px;
    cursor: pointer
  }

  .dialog-body-wrap {
    background: #E9ECEF;
    padding: 0 5px 5px 5px;
  }

  .body-wrap {
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.19);
    border-radius: 0px 0px 2px 2px;
  }

  .dialog-content {
    width: 100%;
    /*min-height: 257px;*/
    overflow: auto;
    line-height: 25px;
    background-color: #ffffff;
  }

  .min-dialog-content {
    min-height: 257px;
  }

  .max-dialog-content {
    height: 496px;
  }

  .dialog-buttons {
    height: 62px;
    width: 100%;
    border-top: 1px solid #E9ECEF;
  }
</style>
