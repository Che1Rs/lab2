import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("./assets/books.png")}
        resizeMode="contain"
        style={{
          width: 40,
          height: 40,
          marginBottom: 30,
        }}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Book Management
      </Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddBook");
        }}
        style={{
          backgroundColor: "green",
          paddingHorizontal: 30,
          paddingVertical: 8,
          marginTop: 50,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#FFF",
          }}
        >
          Add Book
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EditBook");
        }}
        style={{
          backgroundColor: "#4A54FF",
          paddingHorizontal: 30,
          paddingVertical: 8,
          marginTop: 20,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#FFF",
          }}
        >
          Edit Book
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
