import styled from "styled-components/native";

export const ContainerLogin = styled.View`
  height: 100%;
  width: 100%;
`;

export const TouchablePass = styled.TouchableOpacity`
  position: absolute;
    width: 40%;
  height: 100%;
  left: 60%;
`;

export const Logo = styled.Image`
  height: 45%;
  position: absolute;
  bottom: 20rem;
  width: 45%;
  align-self: center;
`;

export const EmailInput = styled.TextInput`
  height: 3rem;
  opacity: 0.9;
  position: absolute;
  bottom: 16rem;
  width: 85%;
  align-self: center;
`;

export const PassInput = styled.TextInput`
  
  height: 3rem;
  opacity: 1.9;
  position: absolute;
  bottom: 12rem;
  width: 85%;
  align-self: center;
`;

export const ForgotPass = styled.Text`
  color: #ffffff;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 300px;
  letter-spacing: 0.05px;
  line-height: 16px;
  position: absolute;
  bottom: 10rem;
  
  right: 40px;
`;

export const LoginButton = styled.TouchableOpacity`
  background: #2f1313;
  border: 1px solid #ff0000;
  box-sizing: border-box;
  border-radius: 3px;
  height: 3rem;
  opacity: 0.5;
  position: absolute;
  bottom: 5rem;
  width: 12rem;
  align-self: center;
`;

export const TextButton = styled.Text`
  color: #ffff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  height: 19px;
  left: 50px;
  letter-spacing: 0.05em;
  line-height: 24px;
  position: absolute;
  top: 10px;
  width: 92px;
  align-self: center;
`;
export const LoginText = styled.Text`
  color: #ffff;
  font-family: Sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  align-self: center;
  top:10px;
  letter-spacing: 0.05em;
  line-height: 24px;
  position: absolute;
  
`;
