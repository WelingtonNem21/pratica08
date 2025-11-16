// In App.js in a new project
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./Tela/routes";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
