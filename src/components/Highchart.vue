<template>
  <div class="card">
    <div class="card-content">
      <div class="card-content-inner">
        <div class="chart" v-el:hc></div>
      </div>
    </div>
    <div class="card-footer">
      <a>总计：{{hcdata.total}}</a>
    </div>
  </div>
</template>

<script type="es6">
  import Highcharts from 'highcharts'

  export default {
    props: {
      hcdata: ''
    },
    watch: {
      hcdata (val) {
        $(this.$els.hc).highcharts({
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: val.title
          },
          series: [{
            name: '比例',
            colorByPoint: true,
            data: val.data
          }],
          credits: {
            enabled: false
          }
        });
      }
    },
    ready () {

    }
  }
</script>

<style>
  .chart {
    height: 200px;
  }
</style>
