<template>
  <ul>
    <c-list-item v-for="item in items" :data="item"></c-list-item>
  </ul>
</template>

<script type="es6">
  import cListItem from './ListItem'

  export default {
    props: {
      items: []
    },
    components: {
      cListItem
    }
  }
</script>