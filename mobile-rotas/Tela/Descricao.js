import { Button, Text, View } from "react-native";

export default function Descricao() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
        <Text>Valor R$200</Text>
      </View>
    </View>
  );
}
