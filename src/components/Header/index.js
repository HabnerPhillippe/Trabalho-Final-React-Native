import { Container, TitleContainer, Title, Logo } from "./styles.js";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Gradient } from "../Gradient/index.js";

export const Header = ({ title, goBack, iconName }) => {
  return (
    <Container>
      <Gradient>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name={iconName} size={35} />
        </TouchableOpacity>
      </Gradient>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Logo source={require("../../../assets/mini.png")} />
    </Container>
  );
};
