import SplashScreen from "@pages/SplashScreen";
import { StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

const css = StyleSheet.create({
  SplashScreenContainer: {
    backgroundColor: '#102E50',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  SplashScreenLogo: {
    width: 130,
    height: 130,
  },
  PrimaryButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: "55%"
  },
  PrimaryButton: {
    backgroundColor: "rgba(4, 28, 77, 0.3)",
    borderColor: "#041C4D",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,              
  },
  PrimaryButtonText: {
    color: "white",
    fontWeight: 600,
    fontSize: 16,
  },
});

export default css;