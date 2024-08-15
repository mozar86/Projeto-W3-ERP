import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0 10%;
  background-color: #fff;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  max-width: 400px;
  padding: 2rem;
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
  width: 50%;
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
  width: 100%;
  padding: 1rem;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;
