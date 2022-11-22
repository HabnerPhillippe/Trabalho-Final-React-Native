import { ContainerSplash, LogoSplash } from "./styles.js";
import { Gradient } from "../../components/Gradient/index.js";
import splash from "../../../assets/splash.png";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const Splash=()=> {
    
    const navigation = useNavigation();

  return (
    <ContainerSplash>
      <Gradient />
      <LogoSplash source={splash} />  
    </ContainerSplash>
    
  )
}