<template>
  <div>
    <c-tab :items="tabItems" :active-class="tabActivedClass" :e-select="selectTab"></c-tab>
    <highchart :hcdata="browserData"></highchart>
  </div>
</template>

<script type="es6">
  import cTab from '../components/Tab'
  import highchart from '../components/Highchart'

  export default {
    data () {
      return {
        browserData: {
          data: '',
          total: 0
        },
        tabItems: [{
          text: '本日'
        },{
          text: '本周'
        },{
          text: '本月'
        },{
          text: '本季度'
        },{
          text: '本年'
        },{
          text: '全部'
        }],
        tabActivedClass: 'active'
      }
    },
    ready () {
      let _this = this;

      $.get('/data/user.json').then((result) => {
        if(result.code == 200){
            _this.browserData = result.data;
        }
      });
    },
    methods: {
      selectTab (idx) {
        let base = 5;

      }
    },
    components: {
      cTab,
      highchart
    }
  }
</script>
