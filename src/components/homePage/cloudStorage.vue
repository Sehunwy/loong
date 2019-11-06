<template>
  <div class="cloudStorage">
    <div class="dashboard-box-wrap">
      <div class="dashboard-box-section back-white">
        <div class="pl20 pt10 pr20">
          <span class="fs13 c6">系统容量</span>
          <span class="detail-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chakanxiangqing"></use>
            </svg>
          </span>
        </div>
        <div class="storage-progress-box"></div>
        <div class="storage-des">
          <p class="c9 fs12 store_storage c9">
            可用容量/总容量
          </p>
          <p class="c3 fs16 pt5">
            941.9GB/945GB
          </p>
        </div>
      </div>
      <div class="dashboard-box-section">
        <div class="card-box light-blue">
          <img :src="getImgUrl('warn.png')" alt="">
          <div class="card-num">
            <p class="card-num-title">异常告警</p>
            <p class="card-num-txt ellip" title="">2</p>
          </div>
          <div class="card-des back-white">
            <ul class="fs14 c3" style="width: 100%">
              <li class="des-item pl20">
                <div class="circle-mark fl back-red"></div>
                <div class="c9 fs12 pr5 fl">紧急</div>
                <div class="des-item-txt c6 fl ellip" title="">
                  111111111111111111111111111111111111111111111
                </div>
                <div class="des-item-divider"></div>
              </li>
              <li class="des-item pl20">
                <div class="circle-mark fl back-orange"></div>
                <div class="c9 fs12 pr5 fl">重要</div>
                <div class="des-item-txt c6 fl ellip" title="">
                  2
                </div>
                <div class="des-item-divider"></div>
              </li>
              <li class="des-item pl20">
                <div class="circle-mark fl back-yellow"></div>
                <div class="c9 fs12 pr5 fl">警告</div>
                <div class="des-item-txt c6 fl ellip" title="">
                  1
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-box mt15 normal-blue">
          <img :src="getImgUrl('app.png')" alt="">
          <div class="card-num">
            <p class="card-num-title">应用服务</p>
            <p class="card-num-txt ellip" title="">20</p>
          </div>
          <div class="card-des back-white">
            <ul class="fs14 c3" style="width: 100%">
              <li class="des-item pl20">
                <div class="c9 fs12 pr5 fl">运行中</div>
                <div class="des-item-txt c6 fl ellip" title="">
                  111111111111111111111111111111111111111111111
                </div>
                <div class="des-item-divider"></div>
              </li>
              <li class="des-item pl20">
                <div class="c9 fs12 pr5 fl">已停止</div>
                <div class="des-item-txt c6 fl ellip" title="">
                  2
                </div>
                <div class="des-item-divider"></div>
              </li>
              <li class="des-item pl20">
                <div class="c9 fs12 pr5 fl">未知</div>
                <div class="des-item-txt c6 fl ellip" title="">
                  1
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="dashboard-box-section">
        <div class="card-box dark-blue">
          <img :src="getImgUrl('node.png')" alt="">
          <div class="card-num">
            <p class="card-num-title">服务</p>
            <p class="card-num-txt ellip" title="">2</p>
          </div>
          <div class="card-des back-white">
            <ul class="fs14 c3" style="width: 100%">
              <li class="des-item pl20">
                <div class="c9 fs12 pr5 fl">运行中</div>
                <div class="des-item-txt c6 fl ellip">
                  111111111111111111111111111111111111111111111
                </div>
                <div class="des-item-divider"></div>
              </li>
              <li class="des-item pl20">
                <div class="c9 fs12 pr5 fl">异常</div>
                <div class="des-item-txt c6 fl ellip">
                  2
                </div>
                <div class="des-item-divider"></div>
              </li>
              <li class="des-item pl20">
                <div class="c9 fs12 pr5 fl">已停止</div>
                <div class="des-item-txt c6 fl ellip">
                  1
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-box mt15 purple-blue">
          <img :src="getImgUrl('disk.png')" alt="">
          <div class="card-num">
            <p class="card-num-title">异常磁盘数</p>
            <p class="card-num-txt ellip" title="">200000000000000000</p>
          </div>
          <div class="card-des back-white5"></div>
        </div>
      </div>
    </div>
    <div class="dashboard-chart-wrap">
      <div class="pt10 pl20 pr22">
        <span class="fs13 c3">存储服务器</span>
        <span class="detail-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chakanxiangqing"></use>
            </svg>
          </span>
      </div>
    </div>
    <div class="dashboard-chart-wrap">
      <div class="pt10 pl20 pr22">
        <span class="fs13 c3">应用服务器</span>
        <span class="detail-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chakanxiangqing"></use>
            </svg>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "cloudStorage",
        methods: {
            getImgUrl: function (url1) {
                return require("@/assets/img/storeImg/"+url1);
            }
        }
    }
</script>

<style scoped>
  .cloudStorage {
    min-width: 970px;
  }

  .dashboard-box-wrap {
    display: flex;
    justify-content: space-between;
  }

  .dashboard-box-section {
    height: 255px;
    width: calc(33.3333% - 9.3333px);
  }

  .card-box {
    position: relative;
    height: 120px;
    border-radius: 4px;
    box-shadow: 0px 10px 10px 0px rgba(12, 54, 138, 0.16);
    cursor: pointer;
  }

  .light-blue {
    background: #2ACEFB;
  }

  .normal-blue {
    background: #2BB2FF;
  }

  .dark-blue {
    background: #0C9AFF;
  }

  .purple-blue {
    background: #4884FD;
  }

  .detail-icon {
    float: right;
    color: #4A90E2;
    font-size: 16px;
    cursor: pointer;
  }

  .storage-progress-box {
    width: 160px;
    height: 150px;
    background: pink;
    position: relative;
    left: calc(50% - 80px);
    padding-top: 10px
  }

  .storage-des {
    font-family: "Arial";
    text-align: center;
    font-weight: 500;
    padding-top: 10px;
  }

  .card-des {
    position: absolute;
    width: 100%;
    height: 32px;
    border-radius: 4px;
    bottom: 0;
    left: 0;
  }

  .des-item {
    float: left;
    position: relative;
    top: 0px;
    left: 0px;
    width: calc(33.333% - 20px);
    line-height: 32px;
  }

  .circle-mark {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    float: left;
    margin: 12px 5px 12px 0
  }

  .des-item-txt {
    width: calc(100% - 51px)
  }

  .des-item-divider {
    position: absolute;
    right: 1px;
    top: 8px;
    width: 1px;
    height: 16px;
    background-color: #E9ECEF;
  }

  .back-white5 {
    background: rgba(255, 255, 255, 0.5)
  }

  .card-num {
    position: absolute;
    top: 0px;
    right: 0px;
    text-align: right;
    margin: 10px 40px 0 0;
    width: calc(100% - 130px);
  }

  .card-num-title {
    font-size: 13px;
    color: #fff;
    font-weight: 500;
    line-height: 18px;
  }

  .card-num-txt {
    font-size: 36px;
    font-weight: 600;
    color: #fff;
    line-height: 36px;
    margin-top: 8px;
  }

  .dashboard-chart-wrap {
    margin-top: 20px;
    background-color: #fff;
    width: 100%;
    height: 355px;
    box-shadow: 0px 10px 10px 0px rgba(12, 54, 138, 0.16);
  }
</style>
