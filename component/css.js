import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  SplashScreenContainer: {
    backgroundColor: "#102E50",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  SplashScreenLogo: {
    width: 130,
    height: 130,
  },
  PrimaryButtonContainer: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: "55%",
  },
  PrimaryButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 0,
  },
  PrimaryButtonText: {
    color: "white",
    fontWeight: 600,
    fontSize: 16,
  },
  YourRoleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  dropDownContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  
  PickerWrapper: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#041C4D",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginBottom: 30,
  },
  
  dropDownIcon: {
    marginRight: 10,
  },
});

export default css;
