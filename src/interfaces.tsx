interface ItemI {
    id: number;
    title: string;
    status: number;
  }
  
export interface TodoItemInterface {
    handleTodoRemove: (id: number) => void;
    todo: ItemI;
}