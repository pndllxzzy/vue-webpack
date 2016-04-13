import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let router = new Router({
	hashbang: true,
	history: true,
	saveScrollPosition: true,
	suppressTransitionError: true
});
let routerConfig = {};

router.map({
	'/': {
		component (resolve){
			require(['./views/index'], resolve);
		},
		subRoutes: {
			'/borrow': {
				name: 'borrowIndex',
				component (resolve) {
					require(['./views/borrow-index'], resolve);
				}
			},
			'/user': {
				name: 'userIndex',
				component (resolve) {
					require(['./views/user-index'], resolve);
				}
			},
			'/event': {
				name: 'eventIndex',
				component(resolve){
					require(['./views/event-index'], resolve);
				}
			}
		}
	},
	'/borrow/list': {
		name: 'borrowList',
		component (resolve){
			require(['./views/borrow-list'], resolve);
		}
	}

});

router.map(routerConfig);

router.redirect({
	'/': '/borrow'
});

export {router}
