<template>
  <div class="buttons-tab">
    <a class="tab-link button" v-for="item in items" v-bind:class="[selectedIndex == $index ? activeClass : '']" v-on:click="select($index)">{{item.text}}</a>
  </div>
</template>

<script type="es6">
    export default {
      props: {
        activeClass: '',
        items: [],
        eSelect: ''
      },
      data () {
        return{
          selectedIndex: 0
        }
      },
      methods: {
        select (idx) {
          this.selectedIndex = idx;
          this.eSelect(idx);
          PS.public('tabSelect', idx);
        }
      }
    }
</script>