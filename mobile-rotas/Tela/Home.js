import { View, Text, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  function onpre() {
    navigation.navigate("Descricao");
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginBottom: 20, fontSize: 35 }}>Loja de compra</Text>

      <View
        style={{
          flexDirection: "row",
          width: 350,
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 5,
          justifyContent: "space-between",
          padding: 10,
          alignItems: "center",
        }}
      >
        <Text>Comprar pão</Text>
        <TouchableOpacity
          onPress={onpre}
          style={{ backgroundColor: "black", padding: 5, borderRadius: 2 }}
        >
          <Text style={{ color: "white" }}>detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
