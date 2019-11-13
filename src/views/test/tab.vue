<template>
  <div class="tab">
    <loongTab :tabArr="tabArr" :activeTab="activeTab"></loongTab>
  </div>
</template>

<script>
    import cloudStorage from '@/components/homePage/cloudStorage'
    import virtualCloud from '@/components/homePage/virtualCloud'
    import cloudDisk from '@/components/homePage/cloudDisk'
    import loongTab from '@/components/loongTab/loongTab'

    export default {
        name: "tab",
        data() {
            return {
                tabArr: [
                    {
                        component: cloudStorage, // 显示的组件
                        text: '云存储'            // tab名
                    },
                    {
                        component: virtualCloud,
                        text: '虚拟云'
                    },
                    {
                        component: cloudDisk,
                        text: '云盘'
                    }
                ], // tab项
                activeTab: 2 // 初始激活tab
            }
        },
        components: {
            loongTab
        },
        mounted() {
            console.log(this.tabArr)
        }
    }
</script>

<style scoped>
  .tab {
    width: 100%;
    height: 100%;
  }
</style>
