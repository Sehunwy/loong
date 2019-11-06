<template>
  <div style="overflow-x: hidden;min-width: 600px">
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
          <div @mouseenter="enter('alarm')" @mouseleave="leave('alarm')">
            <div class="topbar-nav-icon">
              <div class="warn-total">2</div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gaojing"></use>
              </svg>
            </div>
            <div class="hover-alarm hover-common" ref="alarm">
              <div class="warn-list">
                <div class="warn-list-item">
                  <div class="ellip warn-text">
                    ip为13.10.47.3的服务器有磁盘损坏，请及时处理
                  </div>
                  <div class="warn-time">
                    2019-11-01 16:09:49
                  </div>
                </div>
                <div class="warn-list-item">
                  <div class="ellip warn-text">
                    ip为13.10.47.3的服务器有磁盘损坏，请及时处理
                  </div>
                  <div class="warn-time">
                    2019-11-01 16:09:49
                  </div>
                </div>
              </div>
              <div class="more-warn-btn" @click="goPath('alarm1',{query:'query'})">查看更多</div>
            </div>
          </div>
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
          <div @mouseenter="enter('person')" @mouseleave="leave('person')">
            <div class="topbar-nav-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-nv"></use>
              </svg>
            </div>
            <div style="height: 1000px">
            </div>
            <div class="person-info hover-common" ref="person">
              <div class="login-type">
                admin
              </div>
              <div class="account-operation">
                账号设置
              </div>
              <div class="account-operation log-out">
                注销登录
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
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
            },
            enter: function (even) {
                this.$refs[`${even}`].style.display = 'block';
            },
            leave: function (even) {
                this.$refs[`${even}`].style.display = 'none';
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

  .hover-common {
    position: absolute;
    /*position: relative;*/
    z-index: 1;
    font-size: 14px;
    color: #333333;
    right: 0px;
    top: 53px;
    /*top: -1px;*/
    background-color: #fff;
    box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.19);
    display: none;
  }

  .hover-alarm {
    width: 260px;
  }

  .warn-total {
    position: absolute;
    left: 29px;
    top: 14px;
    padding: 0 4px;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    background-color: #FF2222;
    color: #fff;
    border-radius: 4px;
  }

  .warn-list {
    border-bottom: 1px solid #E9ECEF;
  }

  .warn-list-item {
    padding: 10px 20px;
  }

  .warn-text {
    font-size: 12px;
    color: #333333;
  }

  .warn-time {
    font-size: 12px;
    color: #999999
  }

  .more-warn-btn {
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 12px;
    color: #1188DD;
  }

  .person-info {
    width: 120px;
  }

  .login-type {
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #E9ECEF;
    font-size: 13px
  }

  .account-operation {
    height: 36px;
    line-height: 36px;
    padding-left: 20px;
    overflow: hidden;
    font-size: 12px
  }

  .log-out {
    color: #ff2222;
  }
</style>
