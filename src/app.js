import Vue from 'vue'
import {router} from './router'
import PubSub from './tools/PubSub'
import $ from 'jquery'
import Highcharts from 'highcharts'

require('smCSS');

let app = Vue.extend({});
window.PS = new PubSub();

router.start(app, '#app');
