import Authenication from "../components/AuthComponent";

export default function Login({ navigation }) {
  return (
    <Authenication
      title="Hello, Welcome"
      enter="Login"
      optionTitle="New user, signup"
      signinOption={() => navigation.navigate("Signup")}
    />
  );
}
