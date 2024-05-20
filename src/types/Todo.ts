export interface Subtask {
  id: number;
  title: string;
  task_id: number;
  created_at: string;
  updated_at: string;
  is_delete: number;
}

export interface TaskType {
  id: number;
  name: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface Task {
  id: number;
  title: string;
  description: string | null;
  status: number;
  deadline: string | null;
  created_at: string;
  updated_at: string;
  type_id: number;
  user_id: number;
  is_delete: number;
  subtasks: Subtask[];
  type_tasks: TaskType;
}
