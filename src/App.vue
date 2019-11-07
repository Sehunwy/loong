<template>
  <div id="app" ref="app">
    <router-view/>
  </div>
</template>

<script>
    import iconfont from '@/assets/js/iconfont.js'
    import '@/assets/css/common.css';

    export default {
        name: 'App',

    }
</script>

<style>
  body, html {
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    color: #333333;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  #app {
    width: 100%;
    height: 100%;
    background-color: #E9ECEF;
  }

  ul,li,ol {
    list-style: none;
  }

  p,ul,li,ol {
    margin: 0px;
    padding: 0px;
  }

  router-link {
    text-decoration: none;
  }
</style>
