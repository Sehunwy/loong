<template>
  <div class="home-page">
    <tab :tabArr="tabArr" @currentCom="getCurrentCom" style="min-width: 970px"></tab>
    <div class="mt15 showView">
      <div :is="currentView"></div>
    </div>
  </div>
</template>

<script>
    import cloudStorage from '@/components/homePage/cloudStorage'
    import virtualCloud from '@/components/homePage/virtualCloud'
    import cloudDisk from '@/components/homePage/cloudDisk'
    import tab from '@/components/tab'
    import '@/assets/css/common.css';

    export default {
        name: "homePage",
        data() {
            return {
                currentView: '',
                tabArr: [
                    {
                        component: 'cloudStorage',
                        text: '云存储'
                    },
                    {
                        component: 'virtualCloud',
                        text: '虚拟云'
                    },
                    {
                        component: 'cloudDisk',
                        text: '云盘'
                    }
                ]
            }
        },
        methods: {
            getCurrentCom: function (currentView) {
                this.currentView = currentView;
            }
        },
        components: {
            cloudStorage, virtualCloud, cloudDisk, tab
        },
    }
</script>

<style scoped>
  .home-page {
    width: 100%;
    height: 100%;
  }

  .showView {
    width: 100%;
    height: calc(100% - 60px);
    overflow: auto;
  }
</style>
