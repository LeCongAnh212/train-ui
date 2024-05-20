import { createStore, Store } from "vuex";

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import type { State } from "@/types/State";
import testModule from "./test";

const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    test: testModule, // Đặt tên cho module là 'test'
  },
});

export default store as Store<State>;
