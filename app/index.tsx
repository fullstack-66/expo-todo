import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { COLORS } from "../constants/theme";
export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://picsum.photos/3000/2000" }}
        style={styles.image}
      >
        <Text style={{ ...styles.text, fontSize: 30, fontStyle: "italic" }}>
          My Awesome
        </Text>
        <Text style={{ ...styles.text, color: COLORS.secondary }}>TODO</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(34, 69, 179, 0.6)",
  },
});
