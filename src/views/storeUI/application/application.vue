<template>
  <div class="application">
    <button class="button-common confirm-button" @click="showTip()">点击</button>
    <loongTip :tipContent="tipContent" :tipType="tipType" :showTip="isShowTip" @isTipShow="getShow"></loongTip>
  </div>
</template>

<script>
    import loongTip from "@/components/loongTip/loongTip"

    export default {
        name: "application",
        data() {
            return {
                tipContent: 'error！请进行一些更改。',
                tipType: 'error',
                isShowTip: false
            }
        },
        methods: {
            showTip: function () {
                this.tipContent = 'warning！请进行一些更改。';
                this.tipType = 'warning';
                this.isShowTip = true;
            },
            getShow: function (show) {
                this.isShowTip = show;
            }
        },
        components: {
            loongTip
        }
    }
</script>

<style scoped>
  .application {
    width: 100%;
    height: calc(100% - 20px);
    background-color: #ffffff;
    margin-top: 20px;
  }
</style>
