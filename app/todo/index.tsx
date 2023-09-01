import { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { COLORS, FONT } from "../../constants/theme";
import axios from "axios";
import { type Todo } from "../../components/TodoItem";
import TodoItem from "../../components/TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
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

  const renderTodo = ({ item }: ListRenderItemInfo<Todo>) => (
    <Text>{item.id}</Text>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>New Todo</Text>
        <TextInput
          value={todo}
          onChangeText={(t) => setTodo(t)}
          placeholder={"Todo"}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>Add</Text>
        </TouchableOpacity>
        <Text style={{ color: "blue" }}>{todo}</Text>

        <FlatList
          data={todos}
          renderItem={renderTodo}
          keyExtractor={(todo: Todo) => todo.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "#ffffff",
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#e8e8e8",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  textBtn: {
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
  },
  textTitle: {
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
});
