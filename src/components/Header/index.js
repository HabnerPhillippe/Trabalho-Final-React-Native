import colors from "../../themes/colors.js";
import { Container, TitleContainer, Title, Logo } from "./styles.js";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const Header = ({ title, goBack, iconName }) => {
  return (
    <Container>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name={iconName} size={25} color={colors.primary} />
      </TouchableOpacity>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Logo source={require("../../../assets/logo.png")} />
    </Container>
  );
};
