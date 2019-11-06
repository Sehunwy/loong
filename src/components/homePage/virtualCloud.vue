<template>
  <div class="virtualCloud">
    <div class="sumBox">
      <div class="sum-item back-1188dd">
        <div class="data-icon">
          <img :src="getImgUrl('home-node.png')" alt="">
        </div>
        <div class="sumData">
          <p class="data-name mb15 fs12">物理节点</p>
          <p class="data-num ellip" title="">000000000000000000000000000000000000000000000000</p>
        </div>
      </div>
      <div class="sum-item back-28C4EF">
        <div class="data-icon">
          <img :src="getImgUrl('home-tenant.png')" alt="">
        </div>
        <div class="sumData">
          <p class="data-name mb15 fs12">云租户</p>
          <p class="data-num ellip" title="">0</p>
        </div>
      </div>
      <div class="sum-item back-4884FD">
        <div class="data-icon">
          <img :src="getImgUrl('home-user.png')" alt="">
        </div>
        <div class="sumData">
          <p class="data-name mb15 fs12">云账户</p>
          <p class="data-num">0</p>
        </div>
      </div>
      <div class="sum-item back-1188dd">
        <div class="data-icon">
          <img :src="getImgUrl('home-vm.png')" alt="">
        </div>
        <div class="sumData">
          <p class="data-name mb15 fs12">云主机</p>
          <p class="data-num">0</p>
        </div>
      </div>
      <div class="sum-item back-28C4EF">
        <div class="data-icon">
          <img :src="getImgUrl('home-runvm.png')" alt="">
        </div>
        <div class="sumData">
          <p class="data-name mb15 fs12">运行中的云主机</p>
          <p class="data-num">0</p>
        </div>
      </div>
      <div class="sum-item back-4884FD">
        <div class="data-icon">
          <img :src="getImgUrl('home-disk.png')" alt="">
        </div>
        <div class="sumData">
          <p class="data-name mb15 fs12">虚拟磁盘</p>
          <p class="data-num">0</p>
        </div>
      </div>
    </div>
    <div class="statusBox pt20">
      <div class="status-li">
        <div class="li-title pl20 c6 fs14">资源池</div>
        <div class="info-details border-bottom-E9ECEF">
          <div class="info-box">
            <div class="boxHead fs13 c6">
            <span>
              虚拟资源池
            </span>
              <span class="fr color-1188dd cursor-pointer fs16">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chakanxiangqing"></use>
            </svg>
          </span>
            </div>
          </div>
          <div class="info-chart text-cneter">11</div>
          <div class="info-data text-cneter">
            <p class="data-text fs12 c6">可用核数/虚拟总核数</p>
            <p class="data-number fs16 c3">0 / 0</p>
          </div>
        </div>
        <div class="info-details border-bottom-E9ECEF">
          <div class="info-box">
            <div class="boxHead fs13 c6">
            <span>
              虚拟内存池
            </span>
              <span class="fr color-1188dd cursor-pointer fs16">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chakanxiangqing"></use>
            </svg>
          </span>
            </div>
          </div>
          <div class="info-chart text-cneter">11</div>
          <div class="info-data text-cneter">
            <p class="data-text fs12 c6">可用内存/虚拟总内存</p>
            <p class="data-number fs16 c3">0B / 0B</p>
          </div>
        </div>
      </div>
      <div class="status-li">
        <div class="li-title pl20 c6 fs14">网络</div>
        <div class="info-details border-bottom-E9ECEF">
          <div class="info-box">
            <div class="boxHead fs13 c6">
            <span>
              物理网络宽带
            </span>
              <span class="fr color-1188dd cursor-pointer fs16">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chakanxiangqing"></use>
            </svg>
          </span>
            </div>
          </div>
          <div class="info-chart text-cneter">11</div>
          <div class="info-data text-cneter">
            <ul class="space-between">
              <li class="data-list-ul">
                <p class="data-text fs12 c6">总发送量</p>
                <p class="data-number fs16 c3">
                  <span class="fs16 color-28C4EF">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-zhuyeshangjiantou"></use>
                    </svg>
                  </span>
                  0B/s
                </p>
              </li>
              <li class="data-list-ul">
                <p class="data-text fs12 c6">总接收量</p>
                <p class="data-number fs16 c3">
                  <span class="fs16 color-4884FD">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-zhuyexiajiantou"></use>
                    </svg>
                  </span>
                  0B/s
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="info-details border-bottom-E9ECEF">
          <div class="info-box">
            <div class="boxHead fs13 c6">
            <span>
              IP地址
            </span>
              <span class="fr color-1188dd cursor-pointer fs16">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chakanxiangqing"></use>
            </svg>
          </span>
            </div>
          </div>
          <div class="info-chart text-cneter">11</div>
          <div class="info-data text-cneter">
            <p class="data-text fs12 c6">IP可用量/IP总量</p>
            <p class="data-number fs16 c3">0 / 0</p>
          </div>
        </div>
      </div>
      <div class="status-li">
        <div class="li-title pl20 c6 fs14">存储</div>
        <div class="info-details border-bottom-E9ECEF">
          <div class="info-box">
            <div class="boxHead fs13 c6">
            <span>
              性能监控
            </span>
            </div>
          </div>
          <div class="info-chart text-cneter">11</div>
          <div class="info-data text-cneter">
            <ul class="space-between">
              <li class="data-list-ul">
                <p class="data-text fs12 c6">读速率</p>
                <p class="data-number fs16 c3">
                  <span class="fs16 color-28C4EF">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-zhuyeshangjiantou"></use>
                    </svg>
                  </span>
                  0B/s
                </p>
              </li>
              <li class="data-list-ul">
                <p class="data-text fs12 c6">写速率</p>
                <p class="data-number fs16 c3">
                  <span class="fs16 color-4884FD">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-zhuyexiajiantou"></use>
                    </svg>
                  </span>
                  0B/s
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="info-details border-bottom-E9ECEF">
          <div class="info-box">
            <div class="boxHead fs13 c6">
            <span>
              存储
            </span>
            </div>
          </div>
          <div class="info-chart text-cneter">11</div>
          <div class="info-data text-cneter">
            <p class="data-text fs12 c6">可用容量/总容量</p>
            <p class="data-number fs16 c3">0GB / 0GB</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "virtualCloud",
        methods: {
            getImgUrl: function (url1) {
                return require("@/assets/img/cloudImg/"+url1);
            }
        }
    }
</script>

<style scoped>
  .virtualCloud {
    min-width: 970px;
  }

  .sumBox {
    display: flex;
    justify-content: space-between;
  }

  .sum-item {
    width: calc(16.6666% - 14px);
    height: 106px;
    box-shadow: 0px 10px 10px 0px rgba(12, 54, 138, 0.19), 0px 0px 10px 0px rgba(18, 61, 148, 0.2);
    border-radius: 4px;
    color: #fff;
  }

  .data-icon {
    margin: 0px;
    float: left;
    width: 80px;
    height: 106px;
  }

  .sumData {
    float: left;
    width: calc(100% - 80px);
    height: calc(100% - 15px);
    text-align: center;
    padding: 15px 0 0 0;
  }

  .data-name {
    font-family: MicrosoftYaHei;
  }

  .data-num {
    font-size: 32px;
    font-family: PingFangSC-Regular;
  }

  .statusBox {
    display: flex;
    justify-content: space-between;
  }

  .status-li {
    width: calc(33.3333% - 14px);
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(12, 54, 138, 0.08), 0px 0px 4px 0px rgba(18, 61, 148, 0.09);
    border-radius: 2px;
  }

  .li-title {
    height: 44px;
    line-height: 44px;
    background: #F8F9FA;
    text-align: left;
    font-family: PingFangSC-Regular;
  }

  .info-details {
    padding: 0 20px;
  }

  .boxHead {
    padding-top: 11px;
    margin-bottom: 15px;
    font-family: PingFangSC-Regular;
    height: 32px;
  }

  .info-chart {
    text-align: center;
    height: 140px;
    background-color: pink;
  }

  .info-data {
    padding: 12px 0 20px 0;
    height: 39px;
  }

  .data-text {
    font-family: PingFangSC-Regular;
    line-height: 17px;
    margin-bottom: 2px;
    font-weight: 400;
  }

  .data-number {
    font-family: PingFangSC-Regular;
    line-height: 22px;
  }

  .data-list-ul {
    width: 50%;
    text-align: center;
  }
</style>
