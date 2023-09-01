import {
  Text,
  View,
  StyleSheet,
  ListRenderItemInfo,
  FlatList,
} from "react-native";
import { FC } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FONT } from "../constants/theme";
import { type Todo } from "../utils/types";
import TodoItem from "./TodoItem";
interface Props {
  todos: Todo[];
}

const TodoList: FC<Props> = ({ todos }) => {
  const renderTodo = ({ item }: ListRenderItemInfo<Todo>) => (
    <TodoItem todo={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(todo: Todo) => todo.id.toString()}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
