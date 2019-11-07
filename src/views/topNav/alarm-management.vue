<template>
  <div style="width: 100%;height: 100%">
    <tab :tabArr="tabArr"></tab>
  </div>
</template>

<script>
    import tab from '@/components/tab'
    import currentAlarm from '@/views/topNav/alarm/current-alarm'
    import historyAlarm from '@/views/topNav/alarm/history-alarm'
    export default {
        name: "alarm-management",
        data() {
            return {
                tabArr:[
                    {
                        component: currentAlarm,
                        text: '当前告警'
                    },
                    {
                        component: historyAlarm,
                        text: '历史告警'
                    },
                ]
            }
        },
        components: {
            tab
        },
    }
</script>

<style scoped>

</style>
