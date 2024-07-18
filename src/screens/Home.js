import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Home({ navigation }) {
  const placeImage = require("../../assets/images/about.png");
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={placeImage} />
      <View>
        <Text
          style={[styles.centerText, styles.firstText]}
          variant="titleLarge"
        >
          Welcome to Recreation
        </Text>
        <Text style={styles.centerText} variant="labelLarge">
          Recreation is the surest place you can experience comfortable housing
          solutions.
        </Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          style={{
            borderRadius: 10,
            paddingVertical: 6,
            marginVertical: "0.5rem",
          }}
          buttonColor="#0e0e5c"
          mode="contained"
          onPress={() => navigation.navigate("Signup")}
        >
          Signup
        </Button>
        <Button
          style={{ marginVertical: "0.5rem" }}
          textColor="#0e0e5c"
          mode="text"
          onPress={() => navigation.navigate("Login")}
        >
          Signin
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "10%",
    justifyContent: "center",
    backgroundColor: "white",
  },

  firstText: {
    paddingTop: "2rem",
    paddingBottom: "1rem",
  },

  centerText: {
    textAlign: "center",
  },

  buttonColour: {
    color: "green",
  },

  buttonView: {
    paddingTop: "4rem",
  },
  imageStyle: {
    width: "20rem",
    height: "15rem",
    alignSelf: "center",
  },
});
