<template>
  <div class="loong-nav">
    <span class="breadcrumb-container">{{breadcrumb}}</span>
    <ul class="topbar-nav-list">
      <li class="topbar-nav" title="任务管理">
        <div class="topbar-nav-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-renwuguanli"></use>
          </svg>
        </div>
      </li>
      <li class="topbar-nav">
        <div class="topbar-nav-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gaojing"></use>
          </svg>
        </div>
        <div class="hover-alarm">test告警</div>
      </li>
      <li class="topbar-nav" title="日志管理">
        <div class="topbar-nav-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rizhi"></use>
          </svg>
        </div>
      </li>
      <li class="topbar-nav" title="授权信息">
        <div class="topbar-nav-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouquanxinxi"></use>
          </svg>
        </div>
      </li>
      <li class="topbar-nav topbar-nav-last">
        <div class="topbar-nav-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-nv"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "navBar",
        data() {
            return {
                breadcrumb: ''
            }
        },
        methods: {
            setBreadcrumb: function (item) {
                this.breadcrumb = '';
                let slash = ' / ';
                for (let i = 0; i < (item.length - 1); i++) {
                    if (item[i].meta.title != undefined) {
                        if (item[i + 1].meta.title != undefined) {
                            slash = ' / ';
                        } else {
                            slash = '';
                        }
                        this.breadcrumb = this.breadcrumb + item[i].meta.title + slash;
                    }
                }
                if (item[item.length - 1].meta.title != undefined) {
                    this.breadcrumb = this.breadcrumb + item[item.length - 1].meta.title;
                }
            }
        },
        created() {
            this.setBreadcrumb(this.$route.matched);
        },
        watch: {
            $route(to, from) {
                this.setBreadcrumb(this.$route.matched);
            },
        }
    }
</script>

<style scoped>
  .loong-nav {
    width: 100%;
    height: 54px;
    background-color: #F8F9FA;
  }

  .breadcrumb-container {
    line-height: 54px;
    padding-left: 20px;
    font-size: 14px;
    color: #333;
  }

  .topbar-nav-list {
    float: right;
    margin: 0px;
  }

  .topbar-nav {
    position: relative;
    float: left;

    font-size: 24px;
    color: #999999;
    cursor: pointer;
  }

  .topbar-nav-icon {
    padding: 12px 15px;
  }

  .topbar-nav-last {
    border-left: 1px #eee solid;
  }

  .topbar-nav:hover {
    color: #1188dd;
  }

  .topbar-nav-last:hover {
    background-color: #F2F4F6;
  }

  .hover-alarm {
    position: absolute;
    font-size: 14px;
    color: #333333;
    right: 0;
    width: 260px;
    background-color: #fff;
    box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.19);
    /*display: none;*/
  }
</style>
