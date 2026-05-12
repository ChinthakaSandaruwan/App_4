import { GlobalStyle } from "@/global-style";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView style={GlobalStyle.container}>
      <View style={styles.view1}></View>
        <View style={styles.view2}></View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: "rgb(63, 63, 63)",

  },

  view2:{
    flex: 3,
     backgroundColor: "rgb(52, 59, 128)",

  },
});
