import { useState } from "react";
import Input from "../../components/login/Input";
import { StyledCheckbox, ForgotPasswordLink } from "../../components/login/Input-Styles";
import { LoginContainer, LoginForm, CheckboxForgotPasswordContainer, CheckboxContainer, LoginButton, LoginBanner, ErrorMessage } from "./Login-Styles";
import { useNavigate } from "react-router-dom"; // Para redirecionar após o login

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Estado para armazenar a mensagem de erro
    const navigate = useNavigate(); // Hook para redirecionar

    const handleLogin = () => {
        // Credenciais fixas para validação
        const validEmail = "teste@teste.com";
        const validPassword = "12345678";

        // Validação do login
        if (email === validEmail && password === validPassword) {
            // Limpa a mensagem de erro, caso exista
            setError("");
            // Redireciona para a Dashboard
            navigate("/dashboard");
        } else {
            // Define a mensagem de erro
            setError("Dados de login/senha incorretos");
        }
    };

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
                        <label htmlFor="rememberMe"><strong>Lembrar-me</strong></label>
                    </CheckboxContainer>
                    <ForgotPasswordLink href="#">Esqueci minha senha</ForgotPasswordLink>
                </CheckboxForgotPasswordContainer>
                <LoginButton onClick={handleLogin}>Entrar</LoginButton>
                {error && <ErrorMessage>{error}</ErrorMessage>} {/* Exibe a mensagem de erro se houver */}
            </LoginForm>
            <LoginBanner />
        </LoginContainer>
    );
};

export default Login;
