import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function Authenication(props) {
  const signupImage = require("../../../assets/images/contact.png");
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.firstSection}>
        <Text variant="headlineMedium" style={styles.firstText}>
          {props.title}
        </Text>
        <Image source={signupImage} style={styles.signupPic} />
      </View>
      <View style={styles.secondSection}>
        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
          mode="outlined"
          outlineColor="#0e0e5c"
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          style={styles.textInput}
          outlineColor="#0e0e5c"
        />

        <Button
          style={{
            borderRadius: 10,
            paddingVertical: 6,
            marginVertical: "0.5rem",
            width: "50%",
          }}
          buttonColor="#0e0e5c"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          {props.enter}
        </Button>

        <Button
          style={{ paddingTop: 10 }}
          mode="text"
          onPress={props.signinOption}
        >
          {props.optionTitle}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    flex: 1,
  },

  signupPic: {
    width: "100%",
    height: "10rem",
    flex: 1,
  },

  firstSection: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  container: {
    paddingHorizontal: "10%",
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  secondSection: {
    paddingTop: "3rem",
  },
  textInput: {
    marginVertical: "1rem",
    width: "100%",
  },
  firstText: {
    color: "#0e0e5c",
  },
  otherSignin: {
    flexDirection: "row",
    paddingHorizontal: "2rem",
  },
});
