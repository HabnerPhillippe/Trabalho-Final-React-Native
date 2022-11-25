import {AntDesign} from "@expo/vector-icons";
import colors from "../../themes/colors";
import { TouchableOpacity } from "react-native";
import { ViewButton, TitleContainer, Title } from "../../components/PlusButton/styles.js";

export const PlusButton = ({onPress}) => {
    return(
        <ViewButton>
            <TitleContainer>
                <Title>Black Week! Aproveite!</Title>  
            </TitleContainer>
        </ViewButton>
    )
}