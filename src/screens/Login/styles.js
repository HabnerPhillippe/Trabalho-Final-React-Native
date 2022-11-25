import styled from "styled-components/native";
import colors from "../../themes/colors";

export const ContainerLogin = styled.View`
  height: 100%;
  width: 100%;
`;

export const EmailInput = styled.TextInput`
  align-self: center;
  bottom: 16rem;
  height: 3rem;
  opacity: 0.9;
  position: absolute;
  top: 55%;
  width: 85%;
  `;

export const ForgotPass = styled.Text`
  bottom: 10rem;
  color: #FFECEC;
  font-family: sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 300px;
  left: 15px;
  letter-spacing: 0.05px;
  line-height: 16px;
  position: absolute;
  top: 68%;
`;

export const LoginButton = styled.TouchableOpacity`
  align-self: center;
  background: #2f1313;
  border: 1px solid #ff0000;
  bottom: 5rem;
  box-sizing: border-box;
  border-radius: 5px;
  height: 3rem;
  opacity: 0.5;
  position: absolute;
  width: 12rem;
  top: 83%;
`;

export const LoginText = styled.Text`
  align-self: center;
  color: #ffff;
  font-family: Sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 24px;
  position: absolute;
  top:10px;
  
`;

export const Logo = styled.Image`
  align-self: center;
  bottom: 20rem;
  height: 100%;
  position: absolute;
  top: 0%;
  width: 100%;
`;

export const NewUser = styled.Text`
  bottom: 10rem;
  color: #FFECEC;
  font-family: sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 300px;
  left: 15px;
  letter-spacing: 0.05px;
  line-height: 16px;
  position: absolute;
  top: 71%;
`;

export const PassInput = styled.TextInput`
  align-self: center;
  bottom: 12rem;
  height: 3rem;
  opacity: 1.9;
  position: absolute;
  top: 61%;
  width: 85%;
  `;


export const TextButton = styled.Text`
  align-self: center;
  color: #ffff;
  font-family: sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 600px;
  height: 19px;
  left: 50px;
  letter-spacing: 0.05em;
  line-height: 24px;
  position: absolute;
  top: 10px;
  width: 92px;
`;

export const TouchablePass = styled.TouchableOpacity`
  color: ${colors.secondary};
  height: 100%;
  left: 60%;
  position: absolute;
  width: 40%;
`;