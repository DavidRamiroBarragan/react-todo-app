export type Todo = {
  title: string;
  description: string;
  done: boolean;
  done_at: Date;
  create_at: Date;
};

export interface TodoState {
  todos: Todo[];
  progress: boolean;
  error: Error | null;
}
