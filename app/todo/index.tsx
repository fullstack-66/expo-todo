import { useState } from "react";
import { Text, TextInput, View, SafeAreaView, StyleSheet } from "react-native";

export default function Todo() {
  const [todo, setTodo] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>New Todo</Text>
        <TextInput
          value={todo}
          onChangeText={(t) => setTodo(t)}
          placeholder={"Todo"}
          style={styles.input}
        />
        <Text style={{ color: "blue" }}>{todo}</Text>
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
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
  },
});
