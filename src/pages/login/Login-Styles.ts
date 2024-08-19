import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  
  background-color: #fff;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 20%;
  margin-left: 17%;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
    color: #555;
  }
`;

export const LoginBanner = styled.div`
  background: url('src/assets/banner-login.png') no-repeat center/cover;
  width: 38%;
  height: 100%;
  background-color: #0033A0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const LoginButton = styled.button`
  width: 54.5vh;
  height: 50px;
  background-color: #001C98;
  margin-left: 4px;
  border: none;
  border-radius: 14px;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const CheckboxForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  input {
    margin-right: 0.5rem;
  }
  label {
    font-size: 0.9rem;
    color: #333;
  }
`;