import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function AddBook() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#fff' }}>
      <Text
        style={{
          fontSize: 25
        }}
      >
        AddBook
      </Text>
    </View>
  );
}

export default AddBook;
