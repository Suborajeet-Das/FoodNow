import { Text, View, Image, StyleSheet } from "react-native";
import OccupationDropdown from "@component/OccupationDropdown";
import css from "@component/css";
import React, { useState } from "react";
import PrimaryButton from '@component/PrimaryButton';
import {useNavigation} from '@react-navigation/native';


const YourRole = () => {
  const navigation = useNavigation();

  const [selectedCanteen, setSelectedCanteen] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <View style={css.YourRoleContainer}>
      <Image
        source={require("../assets/Icon.png")}
        style={css.SplashScreenLogo}
      />
      <Text style={{ marginTop: 25, fontSize: 34, fontWeight: "bold" }}>
        Welcome Foodies!
      </Text>
      <OccupationDropdown
        style={{ marginTop: 80 }}
        placeholder="Select your canteen"
        options={[
          { label: "A Block", value: "A Block" },
          { label: "B Block", value: "B Block" },
        ]}
        value={selectedCanteen}
        onValueChange={(val) => setSelectedCanteen(val)}
      />
      <OccupationDropdown
        style={{ marginBottom: 50 }}
        placeholder="I'm a _________"
        options={[
          { label: "Customer", value: "Customer" },
          { label: "Staff", value: "Staff" },
        ]}
        value={selectedRole}
        onValueChange={(val) => setSelectedRole(val)}
      />

      <View style={{
        position: "absolute",
        bottom: 10,
        width: "100%",
      }}> 
        <PrimaryButton
           label="Confirm"
           style={[css.PrimaryButton,{backgroundColor: "#102E50"}]}
           textStyle={[css.PrimaryButtonText,{ fontSize: 20, fontWeight: "bold" },]}
           onPress={()=> navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default YourRole;
