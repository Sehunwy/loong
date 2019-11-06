<template>
  <div class="cloudDisk">
    <div class="dashboard-box-wrap">
      <div class="dashboard-box-section back-white">
        <div class="pl20 pt10 pr20">
          <span class="fs13 c6">系统容量</span>
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
      <div class="dashboard-box-section back-white">
        <div class="pl20 pt10 pr20">
          <span class="fs13 c6">成员数量</span>
        </div>
        <div class="storage-progress-box"></div>
        <div class="storage-des">
          <p class="c9 fs12 store_storage c9">
            可创建人数/总人数
          </p>
          <p class="c3 fs16 pt5">
            996/1000
          </p>
        </div>
      </div>
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
    </div>
    <div class="dashboard-chart-wrap">
      <div class="pt10 pl20 pr22">
        <span class="fs13 c3">系统IO统计</span>
      </div>
    </div>
    <div class="dashboard-chart-wrap">
      <div class="pt10 pl20 pr22">
        <span class="fs13 c3">成员IO统计</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "cloudDisk"
    }
</script>

<style scoped>
  .cloudDisk {
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
