<template>
  <div>
    <c-nav :items="navItems" :active-class="navActiveClass"></c-nav>
    <div class="content">
      <router-view transition="fade" transition-mode="out-in"></router-view>
    </div>
  </div>
</template>

<script type="es6">
  import cNav from '../components/Nav'

  export default {
    data () {
      return {
        navItems: [{
          linkName: 'borrowIndex',
          iconClass: 'icon-home',
          text: '平台'
        }, {
          linkName: 'userIndex',
          iconClass: 'icon-me',
          text: '用户'
        }, {
          linkName: 'eventIndex',
          iconClass: 'icon-star',
          text: '渠道'
        }],
        navActiveClass: 'active'
      }
    },
    components: {
      cNav
    },
    ready() {
      console.log('app ready');
    }
  }
</script>

<style>
  .fade-transition {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>