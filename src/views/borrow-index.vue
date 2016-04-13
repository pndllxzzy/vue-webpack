<template>
  <div>
    <c-tab :items="tabItems" :active-class="tabActivedClass" :e-select="selectTab"></c-tab>
    <div class="content-block-title">投资统计</div>
    <div class="list-block">
      <c-list :items="listItemsT"></c-list>
    </div>
    <div class="content-block-title">获客能力</div>
    <div class="list-block">
      <c-list :items="listItemsB"></c-list>
    </div>
  </div>
</template>

<script type="es6">
  import cList from '../components/List'
  import cTab from '../components/Tab'

  export default {
    data () {
      return {
        listItemsT: [{
          text: '投资',
          num: 0,
          linkName: '',
          query: {}
        },{
          text: '充值',
          num: 0,
          linkName: 'borrowList',
          query: {p: 'topup'}
        },{
          text: '提现',
          num: 0,
          linkName: 'borrowList',
          query: {p: 'cash'}
        },{
          text: '应还本息',
          num: 0,
          linkName: '',
          query: {}
        }],
        listItemsB: [{
          text: '注册',
          num: 0,
          linkName: 'borrowList',
          query: {p: 'reg'}
        },{
          text: '认证',
          num: 0,
          linkName: 'borrowList',
          query: {p: 'real'}
        },{
          text: '登陆',
          num: 0,
          linkName: 'borrowList',
          query: {p: 'login'}
        },{
          text: '绑卡',
          num: 0,
          linkName: 'borrowList',
          query: {p: 'card'}
        },{
          text: '投资',
          num: 0,
          linkName: 'borrowList',
          query: {p: 'borrow'}
        },{
            text: '转换率',
            num: '0%',
            linkName: '',
            query: {}
        }],
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
    methods: {
      selectTab (idx) {
        let base = 5;
        this.listItemsT.forEach(function(o){
          o.num = base * idx;
        })
      }
    },
    components: {
      cList,
      cTab
    }
  }
</script>

<style>
  .as{margin:0;}
</style>
