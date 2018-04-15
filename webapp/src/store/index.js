import * as actions from './actions';
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
	user: null,
};

const store = {
	state,
	actions,
	mutations,
};

export default new Vuex.Store({
	...store,
	strict: debug,
});
