import { Text } from "react-native";
import { FC } from "react";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  return <Text>{todo.title}</Text>;
};

export default TodoItem;
