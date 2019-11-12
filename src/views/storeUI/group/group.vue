<template>
  <div style="padding-top: 20px;height: calc(100% - 20px)">
    <div class="group fl">
      <div style="padding: 40px;position: relative">
        <div style="width: 100px;height: 100px;border: 1px solid #000000;margin: 20px;position: absolute;top: 0px" @mouseover="mouseOver('isShowTip1','elemInfo1')"
             @mouseleave="mouseLeave('isShowTip1','elemInfo1')" ref="elemInfo1"></div>
        <loongBalloonTip :tipTitle="tipTitle" :tipPlacement="tipPlacement" :elementInfo="elementInfo" :isShowTip="isShowTip1" :tipColor="tipColor" :tipBackColor="tipBackColor"></loongBalloonTip>
      </div>
      <div style="padding: 40px;position: relative">
        <div style="width: 100px;height: 100px;border: 1px solid #000000;margin: 20px;position: absolute;top: 40px" @mouseover="mouseOver('isShowTip','elemInfo2')"
             @mouseleave="mouseLeave('isShowTip','elemInfo2')" ref="elemInfo2"></div>
        <loongBalloonTip :tipTitle="tipTitle" :tipPlacement="tipPlacement" :elementInfo="elementInfo" :isShowTip="isShowTip" :tipColor="tipColor" :tipBackColor="tipBackColor"></loongBalloonTip>
      </div>
    </div>
    <div class="clear"></div>
  </div>

</template>

<script>
    import loongBalloonTip from "@/components/loongBalloonTip/loongBalloonTip"

    export default {
        name: "group",
        data() {
            return {
                tipPlacement: "",
                tipBackColor: '',
                tipColor: '',
                elementInfo: '',
                tipTitle:'气泡旗袍',
                isShowTip: false,
                isShowTip1: false
            }
        },
        methods: {
            // 鼠标移入事件
            mouseOver: function (showWhich,ref) {
                this[showWhich] = true;
                this.elementInfo = this.$refs[ref];
            },
            // 鼠标移出事件
            mouseLeave: function (showWhich,ref) {
                this[showWhich] = false;
                this.elementInfo = this.$refs[ref];
            }
        },
        components: {
            loongBalloonTip
        }
    }
</script>

<style scoped>
  .group {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    /*margin-top: 20px;*/
  }
</style>
