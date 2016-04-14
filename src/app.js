import Vue from 'vue'
import {router} from './router'
import PubSub from './tools/PubSub'
import $ from 'jquery'

require('smCSS');
window.jQuery = window.$ = $;
let app = Vue.extend({});
window.PS = new PubSub();

router.start(app, '#app');
