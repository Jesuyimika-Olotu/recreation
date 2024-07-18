import Authenication from "../components/AuthComponent";

export default function Signup({ navigation }) {
  return (
    <Authenication
      title="Signup as a New User"
      enter="Sign up"
      optionTitle="Already have an account? Login"
      signinOption={() => navigation.navigate("Login")}
    />
  );
}
