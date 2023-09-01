import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";
import { type Todo } from "../../utils/types";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
export default function Todo() {
  const [txt, setTxt] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <TodoForm txt={txt} setTxt={setTxt} />
      <TodoList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#ffffff",
    gap: 20,
  },
});
