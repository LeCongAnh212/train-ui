import type { Task } from "@/types/Todo";

export default {
  SET_TODOLIST(state: any, payload: Task[]) {
    state.todoList = payload;
  },
  SET_LISTSEARCH(state: any, payload: Task[]) {
    state.listSearch = payload;
  },
  RELOAD_LISTSEARCH(state: any, payload: Task[]) {
    state.listSearch = payload;
  },
  SET_AVATAR(state: any, payload: any) {
    state.avatar = payload;
  }
 
};
