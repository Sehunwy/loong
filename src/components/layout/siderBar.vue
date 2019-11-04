<template>
  <div class="loong-sider" :style="{'width': isFold ? '58px':'180px'}" :class="foldClass">
    <div class="sider-logo">
      <img :src="logo" alt="">
    </div>
    <div class="loong-menus">
      <div class="menuList">
        <div :id="`${menu.id}`" class="menus-details" v-for="(menu,index) in meuns"
             :style="{'display':menu.isRoot?'block':'none'}" ref="menusDetails" :parentId="`${menu.parentId}`"
             :class="[backColor[index].backClass,backColor[index].backClass == 'color-1188DD'? 'back-animation':'']"
             @click="showMenus(menu)" :url="`${menu.path}`" :isRoot="`${menu.isRoot}`">
          <span class="menu-parcel">
            <span :title="`${menu.meta.title}`">
            <svg class="icon menus-icon" aria-hidden="true">
              <use :xlink:href='"#"+menu.icon' :ref="`icon${menu.id}`"></use>
            </svg>
          </span>
          <span style="margin-left: 10px" v-show="!isFold">{{menu.meta.title}}</span>
          </span>
        </div>
      </div>
    </div>
    <div class="fold" @click="isFoldClick()">
      <span class="fold-icon">
        <svg class="icon" aria-hidden="true">
        <use :xlink:href="isFold ? '#icon-muluzhankai':'#icon-mulushouqi'"></use>
      </svg>
      </span>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "siderBar",
        data() {
            return {
                isFold: false,
                foldClass: '',
                foldWid: '180px',
                routerInfo: [],
                meuns: [],
                index: -1,
                root: false,
                backColor: [],
            }
        },
        props: {
            logo: {}
        },
        methods: {
            isFoldClick: function () {
                this.isFold = !this.isFold;
                this.foldClass = this.isFold ? 'foldT' : 'foldF';
                this.foldWid = this.isFold ? '58px' : '180px';
                this.$emit('siderFold', this.isFold)
            },
            setMenus: function (data, isRoot, parentId) {
                for (let item of data) {
                    if (item.path != '*' && item.meta != undefined) {
                        if (isRoot == undefined) {
                            isRoot = true
                        }
                        this.index++;
                        this.meuns.push({
                            meta: item.meta,
                            id: this.index,
                            parentId: parentId,
                            isRoot: isRoot,
                            path: item.path,
                            name: item.name,
                            hasChild: item.children != undefined && item.children[0].meta != undefined,
                            icon: item.meta.iconClose,
                            hasRedirect: item.redirect != undefined ? item.redirect : false
                        });
                        this.backColor.push({
                            isRoot: isRoot,
                            backClass: 'color-38455A',
                            path: item.path,
                            beforeClass: 'color-38455A',
                            hasChild: item.children != undefined && item.children[0].meta != undefined
                        })
                        if (item.children) {
                            this.setMenus(item.children, false, this.index);
                        }
                    }
                }
            },
            showMenus: function (data) {
                let dataId = data.id;
                let parentDom = this.$refs.menusDetails;
                let parentId;
                let display;
                let reallyDis;
                if (!data.hasRedirect) {
                    this.$router.replace(data.path);
                    this.setSelect(data.path);
                }
                for (let i in parentDom) {
                    parentId = parentDom[i].getAttribute("parentid");
                    reallyDis = parentDom[i].style.display;
                    if (data.isRoot) {
                        if (parentDom[i].getAttribute("isRoot") == 'false') {
                            parentDom[i].style.display = 'none';
                            this.meuns[i].icon = this.meuns[i].meta.iconClose;
                        }
                    }
                    if (data.hasChild) {
                        if (this.backColor[i].backClass == 'color-1188DD') {
                            this.backColor[i].backClass = this.backColor[i].backClass;
                        } else {
                            this.backColor[i].backClass = 'color-38455A';
                        }
                        this.backColor[i].beforeClass = 'color-38455A';
                        if (dataId == parentId) {
                            if (this.backColor[i].backClass == 'color-1188DD') {
                                this.backColor[i].backClass = this.backColor[i].backClass;
                            } else {
                                this.backColor[i].backClass = 'color-2A374D';
                            }
                            this.backColor[i].beforeClass = 'color-2A374D';
                            display = reallyDis === 'none' ? 'block' : 'none';
                            parentDom[i].style.display = display;
                        }
                        if (display == 'none') {
                            if (!this.backColor[i - 1].isRoot) {
                                this.backColor[i - 1].beforeClass = 'color-2A374D';
                            }
                        }
                    }
                }
                for (let i in parentDom) {
                    if (this.meuns[i].hasChild) {
                        this.meuns[i].icon = parentDom[parseInt(i) + 1].style.display === 'none' ? this.meuns[i].meta.iconClose : this.meuns[i].meta.iconOpen;
                    }
                }
            },
            setSelect: function (path) {
                for (let i in this.backColor) {
                    if (this.backColor[i].path == path && !this.backColor[i].hasChild) {
                        this.backColor[i].backClass = 'color-1188DD';
                        this.$set(this.backColor, i, this.backColor[i]);
                    } else {
                        this.backColor[i].backClass = this.backColor[i].beforeClass;
                        this.$set(this.backColor, i, this.backColor[i]);
                    }
                }
            }
        },
        created() {
            this.$emit('siderFold', '');
            this.routerInfo = this.$router.options.routes;
            this.setMenus(this.routerInfo);
            this.setSelect(this.$route.path);
        },
        mounted() {
        },
        watch: {
            // $route(to,from){
            //     console.log("to"+to.path);
            //     this.setSelect(to.path);
            // },
            // isClick: function (newVal, oldVal) {
            //     if (newVal) {
            //         console.log("this.$route.path"+this.$route.path)
            //         this.$nextTick(function () {
            //             this.setSelect(this.$route.path);
            //             this.isClick = false;
            //         })
            //
            //     }
            // }
        },
    }
</script>

<style scoped>
  .color-38455A {
    background-color: #38455A;
  }

  .color-2A374D {
    background-color: #2A374D;
  }

  .color-1188DD {
    background-color: #1188DD !important;
  }

  .menus-icon {
    font-size: 18px;
    color: #fff;
  }

  .loong-sider {
    height: 100%;
    background-color: #38455A;
    position: relative;
    left: 0px;
    z-index: 2;
    box-shadow: 5px 0px 5px 0px rgba(12, 54, 138, 0.19), 0px 0px 5px 0px rgba(18, 61, 148, 0.2);
  }

  .foldT {
    animation: myFold2 500ms linear;
  }

  .foldF {
    animation: myFold1 500ms linear;
  }

  @keyframes myFold1 {
    from {
      width: 58px;
    }
    to {
      width: 180px;
    }
  }

  @keyframes myFold2 {
    from {
      width: 180px;
    }
    to {
      width: 58px;
    }
  }

  .sider-logo {
    background-color: #2A374D;
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fold {
    background-color: #2A374D;
    width: 100%;
    height: 44px;
    position: absolute;
    bottom: 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fold-icon {
    color: #AEB9C2;
  }

  .loong-menus {
    width: 100%;
    height: calc(100% - 98px);
    background-color: #38455A;
    overflow: hidden;
  }

  .menuList {
    height: 100%;
    width: calc(100% + 17px);
    overflow-y: auto;
  }

  .menus-details {
    width: 100%;
    height: 44px;
    color: #ffffff;
    font-size: 13px;
    line-height: 44px;
    cursor: pointer;
  }

  .menus-details:hover {
    background-color: #475369;
  }

  .color-2A374D:hover {
    border-left: 2px solid #1188DD;
    width: calc(100% - 2px);
  }

  .color-2A374D:hover .menu-parcel {
    margin-left: 18px;
  }

  .menu-parcel {
    margin-left: 20px;
    overflow: hidden;
    white-space: nowrap;
  }

  .back-animation {
    animation: back1 400ms linear;
  }

  @keyframes back1 {
    from {
      width: 0px;
    }
    to {
      width: calc(100% + 17px);
    }
  }
</style>
