import type { State } from "@/types/State";
import axios from "../../core/BaseRequest";
import type { Task } from "../../types/Todo";
type CommitFunction = (type: string, payload?: any) => void;

export default {
  namespaced: true,
  state: {
    todoList: [
      {
        id: 1235,
      },
    ],
    abc: 123,
  },
  getters: {
    getList(state: State) {
      return state.todoList;
    },
    abc: (state: any) => state.abc,
  },
  mutations: {
    SET_TODOLIST(state: State, payload: Task[]) {
      state.todoList = payload;
    },
  },
  actions: {
    async fetchTodoList({ commit }: { commit: CommitFunction }) {
      const response = await axios.get("tasks/data");
      commit("SET_TODOLIST", response.data.tasks);
    },
  },
};
