import type { Task } from "@/types/Todo";
import axios from "../core/BaseRequest"; // lys do kh phai la ts t cop :)), sua lai ts

type CommitFunction = (type: string, payload?: any) => void;

export default {
  fetchTodoList({ commit }: { commit: CommitFunction }) {
    axios
      .get("tasks/data")
      .then((res: any) => {
        commit("SET_TODOLIST", res.data.data);
      })
      .catch((error: any) => {
        console.log("error: ", error);
      });
  },
};
