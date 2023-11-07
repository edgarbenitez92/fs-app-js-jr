export class Todo {
  id: number;
  description: string;
  done: boolean;
  targetDate: Date;
  user: string;

  constructor(todo?: Todo) {
    this.id = todo ? todo.id : 0;
    this.description = todo ? todo.description : null;
    this.done = todo ? todo.done : null;
    this.targetDate = todo ? todo.targetDate : null;
    this.user = todo ? todo.user : null;
  }
}
