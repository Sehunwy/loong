<template>
  <div v-if="tipShow" class="loong-balloon-tip" :style="{top:tipTop,left:tipLeft}">
    <div class="balloon-tip">
      <div :class="arrowClass" :style="{top:top,left:left,borderColor:borderStyle}"></div>
      <div class="tip-content" ref="tipContent" :style="{color:color}">
        <div class="tip-details" ref="tipDetails" :style="{backgroundColor:backColor}">
          {{tipTitle}}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "loongBalloonTip",
        data() {
            return {
                top: '9px',
                left: '-4px',
                arrowClass: 'arrow-right',
                tipTop: '0px',
                tipLeft: '0px',
                tipShow: false,
                borderStyle: 'transparent #333 transparent transparent',
                color: '',
                backColor: '',
                placement: ''
            }
        },
        props: {
            tipPlacement: {},
            elementInfo: {},
            isShowTip: {},
            tipBackColor: {},
            tipColor: {},
            tipTitle: {}
        },
        methods: {
            balloonPlace: function () {
                let offsetWidth = this.elementInfo.offsetWidth;
                let offsetHeight = this.elementInfo.offsetHeight;
                let offsetTop = this.elementInfo.offsetTop;
                let offsetLeft = this.elementInfo.offsetLeft;
                this.color = this.tipColor;
                this.backColor = this.tipBackColor;
                this.placement = this.tipPlacement;
                if(this.color == undefined || this.color == ''){
                    this.color = '#ffffff';
                }
                if(this.backColor == undefined || this.backColor == '') {
                    this.backColor = '#333333';
                }
                if(this.placement == undefined || this.placement == '') {
                    this.placement = 'right';
                }
                if (this.placement == "top") {
                    let tipContent = this.$refs.tipContent;
                    this.top = tipContent.offsetHeight + 'px';
                    this.left = '17px';
                    this.arrowClass = 'arrow-top';
                    this.tipTop = offsetTop - tipContent.offsetHeight - 4 + 'px';
                    this.tipLeft = offsetLeft + offsetWidth / 2 - 20 + 'px';
                    this.borderStyle = ''+this.backColor+' transparent transparent';
                } else if (this.placement == "bottom") {
                    this.top = "-4px";
                    this.left = '17px';
                    this.arrowClass = 'arrow-bottom';
                    this.tipTop = offsetTop + offsetHeight + 4 + 'px';
                    this.tipLeft = offsetLeft + offsetWidth / 2 - 20 + 'px';
                    this.borderStyle = 'transparent transparent '+this.backColor+'';
                } else if (this.placement == "left") {
                    let tipDetails = this.$refs.tipDetails;
                    this.left = tipDetails.offsetWidth + 'px';
                    this.top = "11px";
                    this.arrowClass = 'arrow-left';
                    this.tipTop = offsetTop + offsetHeight / 2 - 15 + 'px';
                    this.tipLeft = offsetLeft - tipDetails.offsetWidth - 4 + 'px';
                    this.borderStyle = 'transparent transparent transparent '+this.backColor+'';
                } else {
                    this.top = "9px";
                    this.left = '-4px';
                    this.arrowClass = 'arrow-right';
                    this.tipTop = offsetTop + offsetHeight / 2 - 15 + 'px';
                    this.tipLeft = offsetLeft + offsetWidth + 4 + 'px';
                    this.borderStyle = 'transparent '+this.backColor+' transparent transparent'
                }
            }
        },
        watch: {
            isShowTip: function (newVal, oldVal) {
                this.tipShow = newVal;
                this.$nextTick(function () {
                    if (this.tipShow) {
                        this.balloonPlace();
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .loong-balloon-tip {
    position: absolute;
  }

  .balloon-tip {
    position: relative;
    max-width: 600px;
  }

  .arrow-bottom {
    position: absolute;
    border-width: 0 4px 4px;
    /*border-color: transparent transparent #333;*/
    border-style: solid;
  }

  .arrow-top {
    position: absolute;
    border-width: 4px 4px 0;
    /*border-color: #333 transparent transparent;*/
    border-style: solid;
  }

  .arrow-left {
    position: absolute;
    border-width: 4px 0 4px 4px;
    /*border-color: transparent transparent transparent #333;*/
    border-style: solid;
  }

  .arrow-right {
    position: absolute;
    border-width: 4px 4px 4px 0;
    /*border-color: transparent #333 transparent transparent;*/
    border-style: solid;
  }

  .tip-content {
    float: left;
    width: 100%;
    line-height: 20px;
    font-size: 12px;
  }

  .tip-details {
    float: left;
    max-width: 100%;
    word-wrap: break-word;
    padding: 5px 10px;
    border-radius: 3px;
  }
</style>
