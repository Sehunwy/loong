<template>
  <div class="service">
    <LoongDialog :modalType="modalType" :button="dialogClickData" :title="titleDialog" :content="contentDialog" :buttons="buttonsDialog"></LoongDialog>
  </div>
</template>

<script>
    import LoongDialog from "@/components/LoongDialog/LoongDialog";

    export default {
        name: "service",
        data() {
            return {
                dialogClickData: '<button class="confirm-button button-common">点击</button>',
                titleDialog: 'titleDialog',
                contentDialog: '<div style="margin: 10px">contentDialog</div>',
                buttonsDialog: [
                    {
                        "txt": "查询绑定",
                        "className": "confirm-button button-common",
                        "callback": function () {
                            console.log("查询绑定");
                        }
                    },
                    {
                        "txt": "取消绑定",
                        "className": "cancel-button button-common",
                        "callback": function () {
                            return true;
                        }
                    }
                ],
                modalType: 'min'
            }
        },
        components: {
            LoongDialog
        }
    }
</script>

<style scoped>
  .service {
    width: 100%;
    height: calc(100% - 20px);
    background-color: #ffffff;
    margin-top: 20px;
  }
</style>
