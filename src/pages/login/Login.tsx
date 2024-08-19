import { useState } from "react";
import Input from "../../components/Input";
import { LoginContainer, LoginForm, LoginBanner, LoginButton, CheckboxForgotPasswordContainer, CheckboxContainer } from "./Login-Styles";
import { ForgotPasswordLink, StyledCheckbox } from "../../components/Input-Styles";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LoginContainer>
            <LoginForm>
                <p>Seja bem-vindo!</p>
                <h1>Realize seu Login</h1>
                <Input 
                    label={"E-mail"} 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    label={"Senha"} 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isPassword
                />
                <CheckboxForgotPasswordContainer>
                    <CheckboxContainer>
                        <StyledCheckbox id="rememberMe" />
                        <label htmlFor="rememberMe">Lembrar-me</label>
                    </CheckboxContainer>
                    <ForgotPasswordLink href="#">Esqueci minha senha</ForgotPasswordLink>
                </CheckboxForgotPasswordContainer>
                <LoginButton>Entrar</LoginButton>
            </LoginForm>
            <LoginBanner />
        </LoginContainer>
    );
};

export default Login;
