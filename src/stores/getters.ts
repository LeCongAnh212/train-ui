import type { State } from "@/types/State";

export default {
  getTodoList: (state: State) => state.todoList,
  getListVideo: (state: State) => state.listVideo,
  getListSearch: (state: State) => state.listSearch,
  getInstructors: (state: State) => state.instructors,
  getAvatar: (state: State) => state.avatar
};
