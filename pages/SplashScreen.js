import { Text, View, Image, StyleSheet } from "react-native";
import css from "@components/css";
import PrimaryButton from "@components/PrimaryButton";
import {useNavigation} from '@react-navigation/native';



const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={css.SplashScreenContainer}>
      <Image
        source={require("../assets/Icon.png")}
        style={css.SplashScreenLogo}
        />
        <Text style={{color: "white", fontSize: 32, fontWeight: "bold"}}>FoodNow</Text>
      <View style={css.PrimaryButtonContainer}>
        <PrimaryButton
          label="Continue   ->"
          style={css.PrimaryButton}
          textStyle={[
            css.PrimaryButtonText,
            { fontSize: 20, fontWeight: "bold" },
          ]}
          onPress={() => navigation.navigate('YourRole')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
