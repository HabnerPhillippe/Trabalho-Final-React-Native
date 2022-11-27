import colors from "../../themes/colors.js";
import { Container, TitleContainer, Title, Logo } from "./styles.js";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Gradient } from "../../components/Gradient";
import cube from "../../../assets/cube.PNG";
export const Header = ({ title, goBack, iconName }) => {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name={iconName} size={25} color={colors.primary} />
      </TouchableOpacity>
      <Gradient></Gradient>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Logo source={require("../../../assets/logo.png")} />
    </Container>
  );
};
