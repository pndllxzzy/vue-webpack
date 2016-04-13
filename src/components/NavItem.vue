<template>
  <a class="tab-item" v-link="{name: data.linkName, activeClass: activeClass}">
    <span class="icon {{data.iconClass}}"></span>
    <span class="tab-label">{{data.text}}</span>
  </a>
</template>

<script type="es6">
  export default {
    props: {
      data: '',
      activeClass: ''
    }
  }
</script>
