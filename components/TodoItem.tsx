import { Text, View, StyleSheet } from "react-native";
import { FC } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FONT } from "../constants/theme";
import { type Todo } from "../utils/types";

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  if (!todo) return null;
  return (
    <View style={styles.container}>
      <Ionicons name="list" size={32} />
      <Text style={styles.text}>{todo.title!!}</Text>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  text: {
    fontFamily: FONT.regular,
  },
});
