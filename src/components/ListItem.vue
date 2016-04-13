<template>
  <li class="item-content item-link" v-link="{ name: data.linkName, query: data.query}">
    <div class="item-inner" >
      <div class="item-title">{{data.text}}</div>
      <div class="item-after">{{data.num}}</div>
    </div>
  </li>
</template>

<script type="es6">
  export default {
    props:{
      data: ''
    }
  }
</script>