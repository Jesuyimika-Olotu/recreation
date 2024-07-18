import * as React from "react";
import { PaperProvider } from "react-native-paper";
import MainNavigation from "./src/navigation";

export default function Main() {
  return (
    <PaperProvider>
      <MainNavigation />
    </PaperProvider>
  );
}
