import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/main/main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'layout',
      meta: {title: '主页', iconClose: 'icon-zhuye1', iconOpen: 'icon-zhuye1'},
      component: layout,
      children: [
        {
          path: '/',
          name: 'homePage',
          component: () => import('@/views/homePage'),
        }
      ]
    },
    {
      path: '/cloudStorage',
      name: 'cloudStorage',
      meta: {title: '云存储', iconClose: 'icon-cunchufuwushouqi', iconOpen: 'icon-cunchufuwuzhankai'},
      redirect: '/cloudStorage/service',
      component: layout,
      children: [
        {
          path: '/cloudStorage/service',
          name: 'service',
          meta: {title: '服务管理', iconClose: 'icon-fuwuqijiqun', iconOpen: 'icon-fuwuqijiqun'},
          component: () => import('@/views/storeUI/service/service'),
        },
        {
          path: '/cloudStorage/application',
          name: 'application',
          meta: {title: '应用管理', iconClose: 'icon-yingyongfuwuqi', iconOpen: 'icon-yingyongfuwuqi'},
          component: () => import('@/views/storeUI/application/application'),
        },
        {
          path: '/cloudStorage/group',
          name: 'group',
          meta: {title: '设备分组管理', iconClose: 'icon-shebeifenzu', iconOpen: 'icon-shebeifenzu'},
          component: () => import('@/views/storeUI/group/group'),
        },
        {
          path: '/cloudStorage/block-device',
          name: 'block-device',
          meta: {title: '块设备管理', iconClose: 'icon-kuaishebeiguanli', iconOpen: 'icon-kuaishebeiguanli'},
          component: () => import('@/views/storeUI/block-device/block-device'),
        },
        {
          path: '/cloudStorage/file',
          name: 'file',
          meta: {title: '文件管理', iconClose: 'icon-wenjianmulu', iconOpen: 'icon-wenjianmulu'},
          component: () => import('@/views/storeUI/file/file'),
        },
        {
          path: '/cloudStorage/access',
          name: 'access',
          meta: {title: '权限管理', iconClose: 'icon-quanxianshezhi', iconOpen: 'icon-quanxianshezhi'},
          component: () => import('@/views/storeUI/access/access'),
        },
        {
          path: '/cloudStorage/quota',
          name: 'quota',
          meta: {title: '配额管理', iconClose: 'icon-peie', iconOpen: 'icon-peie'},
          component: () => import('@/views/storeUI/quota/quota'),
        },
        {
          path: '/cloudStorage/nas',
          name: 'NAS',
          meta: {title: 'NAS管理', iconClose: 'icon-nasguanli', iconOpen: 'icon-nasguanli'},
          component: () => import('@/views/storeUI/nas/nas'),
        },
        {
          path: '/cloudStorage/senior',
          name: 'senior',
          meta: {title: '高级管理', iconClose: 'icon-gaojishezhi', iconOpen: 'icon-gaojishezhi'},
          component: () => import('@/views/storeUI/senior/senior'),
        }
        // {
        //   path: '/basic',
        //   name: 'basic',
        //   meta: {title: '应用管理1-1',iconClose:'icon-yunguanlishouqi',iconOpen:'icon-yunguanlizhankai'},
        //   redirect: '/test1-1/basic/test1',
        //   // component: layout,
        //   component: () => import('@/views/storeUI/service/index'),
        //   children: [
        //     {
        //       path: '/test1-1/basic/test1',
        //       name: 'test1',
        //       meta: {title: '设备管理1-1-1',iconClose:'icon-yunguanlishouqi',iconOpen:'icon-yunguanlizhankai'},
        //       component: test
        //     },
        //     {
        //       path: '/test1-1/basic/test2',
        //       name: 'test2',
        //       meta: {title: '文件管理1-1-2',iconClose:'icon-yunguanlishouqi',iconOpen:'icon-yunguanlizhankai'},
        //       component: test1
        //     }
        //   ]
        // },
      ]
    },
    {
      path: '/virtualCloud',
      name: 'virtualCloud',
      meta: {title: '虚拟云', iconClose: 'icon-yunguanlishouqi', iconOpen: 'icon-yunguanlizhankai'},
      component: layout,
      redirect: '/virtualCloud/node',
      children: [        //子路由,嵌套路由
        {
          path: '/virtualCloud/node',
          name: 'node',
          meta: {title: '节点管理', iconClose: 'icon-jiedianguanli', iconOpen: 'icon-jiedianguanli'},
          component: () => import('@/views/cloudUI/node/node'),
        },
        {
          path: '/virtualCloud/network',
          name: 'network',
          meta: {title: '网络管理', iconClose: 'icon-wangluoguanli1', iconOpen: 'icon-wangluoguanli1'},
          component: () => import('@/views/cloudUI/network/network'),
        },
        {
          path: '/virtualCloud/imageLibraries',
          name: 'imageLibraries',
          meta: {title: '镜像库', iconClose: 'icon-jingxiangku', iconOpen: 'icon-jingxiangku'},
          component: () => import('@/views/cloudUI/imageLibraries/imageLibraries'),
        },
        {
          path: '/virtualCloud/file',
          name: 'file-library',
          meta: {title: '文件库', iconClose: 'icon-wenjianguanli', iconOpen: 'icon-wenjianguanli'},
          component: () => import('@/views/cloudUI/file/file'),
        },
        {
          path: '/virtualCloud/tenant',
          name: 'tenant',
          meta: {title: '租户管理', iconClose: 'icon-zuhuguanli', iconOpen: 'icon-zuhuguanli'},
          component: () => import('@/views/cloudUI/tenant/tenant'),
        }
      ]
    },
    {
      path: '/cloudDisk',
      name: 'cloudDisk',
      meta: {title: '云盘', iconClose: 'icon-yunguanlishouqi', iconOpen: 'icon-yunguanlizhankai'},
      component: layout,
      redirect: '/cloudDisk/service',
      children: [        //子路由,嵌套路由
        {
          path: '/cloudDisk/service',
          name: 'serviceManagement',
          meta: {title: '服务管理', iconClose: 'icon-fuwuguanli', iconOpen: 'icon-fuwuguanli'},
          component: () => import('@/views/diskUI/service/service'),
        },
        {
          path: '/cloudDisk/department',
          name: 'department',
          meta: {title: '部门管理', iconClose: 'icon-bumenguanli', iconOpen: 'icon-bumenguanli'},
          component: () => import('@/views/diskUI/department/department'),
        },
        {
          path: '/cloudDisk/member',
          name: 'member',
          meta: {title: '成员管理', iconClose: 'icon-chengyuanguanli', iconOpen: 'icon-chengyuanguanli'},
          component: () => import('@/views/diskUI/member/member'),
        },
        {
          path: '/cloudDisk/group',
          name: 'group-management',
          meta: {title: '群组管理', iconClose: 'icon-qunzuguanli', iconOpen: 'icon-qunzuguanli'},
          component: () => import('@/views/diskUI/group/group'),
        },
        {
          path: '/cloudDisk/domainControl',
          name: 'domainControl',
          meta: {title: '域控管理', iconClose: 'icon-yukongguanli', iconOpen: 'icon-yukongguanli'},
          component: () => import('@/views/diskUI/domainControl/domainControl'),
        },
        {
          path: '/cloudDisk/senior',
          name: 'senior-management',
          meta: {title: '高级管理', iconClose: 'icon-gaojishezhi', iconOpen: 'icon-gaojishezhi'},
          component: () => import('@/views/diskUI/senior/senior'),
        }
      ]
    },
    {
      path: '/user',
      name: 'user-layout',
      meta: {title: '用户管理', iconClose: 'icon-yonghuguanli', iconOpen: 'icon-yonghuguanli'},
      component: layout,
      children: [
        {
          path: '/user1',
          name: 'user',
          component: () => import('@/views/user'),
        }
      ]
    },
    {
      path: '/set',
      name: 'layout',
      meta: {title: '设置', iconClose: 'icon-shezhi', iconOpen: 'icon-shezhi'},
      component: layout,
      children: [
        {
          path: '/set1',
          name: 'set',
          component: () => import('@/views/set'),
        }
      ]
    },
    {
      // 会匹配所有路径  捕获所有路由或 404 Not found 路由
      path: '*',
      redirect: '/'
    }
  ]
})
