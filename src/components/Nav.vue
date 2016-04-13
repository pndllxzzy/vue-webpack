<template>
  <nav class="bar bar-tab">
    <c-nav-item v-for="item in items" :data="item" :active-class="activeClass">
    </c-nav-item>
  </nav>
</template>

<script type="es6">
  import cNavItem from './NavItem'

  export default {
    props: {
      items: [],
      activeClass: ''
    },
    components: {
      cNavItem
    }
  }
</script>