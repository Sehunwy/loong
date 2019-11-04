<template>
  <div ref="tree-menus" style="height: 900px;width: 100%">
    <div class="menus-details" v-for="menu in meuns" :style="{'display':menu.isRoot?'block':'none'}" :ref="`${menu.parentId}`" :class="`${menu.isRoot}`"
         @click="showMenus(menu)">
      <span style="margin-left: 20px">{{menu.title}}</span>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "tree",
        data() {
            return {
                data: [
                    {
                        path: '/',
                        name: 'test',
                        meta: {title: '服务管理1',isHref:true},
                        children: [
                            {
                                path: 'basic',
                                name: 'basic',
                                meta: {title: '应用管理1-1'},
                                children: [
                                    {
                                        path: 'basic',
                                        name: 'basic',
                                        meta: {title: '设备管理1-1-1'},
                                    },
                                    {
                                        path: 'big',
                                        name: 'big',
                                        meta: {title: '文件管理1-1-2'},
                                    }
                                ]
                            },
                            {
                                path: 'big',
                                name: 'big',
                                meta: {title: '权限管理1-2'},
                            }
                        ]
                    },
                    {
                        path: '/test',
                        name: 'test',
                        meta: {title: '高级管理2'},
                        children: [        //子路由,嵌套路由
                            {
                                path: 'basic',
                                name: 'basic1',
                                meta: {title: 'NAS管理2-1'},
                            },
                            {
                                path: 'big',
                                name: 'big1',
                                meta: {title: '配额管理2-2'},
                            }
                        ]
                    }
                ],
                meuns: [],
                index: -1,
                root: false
            }
        },
        methods: {
            setMenus: function (data, isRoot, parentId) {
                for (let item of data) {
                    if (isRoot == undefined) {
                        isRoot = true
                    }
                    this.index++;
                    this.meuns.push({
                        title: item.meta.title,
                        id: this.index,
                        parentId: 'parent'+parentId,
                        isRoot: isRoot
                    })
                    if (item.children) {
                        this.setMenus(item.children, false, this.index);
                    }
                }
            },
            showMenus: function (data) {
                let parentId = 'parent'+data.id;
                let display = '';
                // let notRoot = document.querySelector('.false');
                // let notRoot = document.getElementsByClassName('false')
                let notRoot = $('.false');
                console.log(notRoot)
                if(data.isRoot) {
                    this.root = true;
                    $('.false').hide();
                }
                else {
                    this.root = false;
                }
                if(this.$refs[`${parentId}`] != undefined) {
                    for(let child of this.$refs[`${parentId}`]) {
                        display = child.style.display === 'none' ? 'block' : 'none';
                        child.style.display = display;
                        child.style.backgroundColor = '#2A374D';
                    }
                }
            }
        },
        created() {
            this.setMenus(this.data);
            console.log(this.meuns)
        },
        watch: {
            root: function (newVal,oldVal) {
                // this.root = false;
            }
        }
    }
</script>

<style scoped>
  .menus-details {
    width: 100%;
    height: 44px;
    color: #ffffff;
    font-size: 13px;
    line-height: 44px;
    cursor: pointer;
    /*background-color: #38455A;*/
  }

  .menus-details:hover {
    background-color: #475369;
  }
</style>
