import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: -0,7rem;
  left: 1rem;
  background-color: white;
  padding: 0 0.5rem;
  font-size: 0.85rem;
  color: #757575;
  margin-bottom: 0.5rem;
  margin-top: -8px;
  pointer-events: none;

  &:focus {
    border-color: #00C247;
    outline: none;
    color: #00C247;
  }
`;

export const InputPasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 50vh;
  height: 37%;
  padding: 1rem;
  border: 2px solid white;
  border-radius: 16px;
  font-size: 1rem;
  color: #212121;
  transition: border-color 0.3s;

  &:focus {
    border-color: #00C247;
    outline: none;
  }
`;

export const StatusEyeIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1rem;
  color: #ccc;
  opacity: 0.5;

  &:hover {
    color: #ccc;
    opacity: 0.7;
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 20px;
  height: 20px;
  background: url('src/assets/remix-icons/fill/system/checkbox-fill.svg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-right: 0.5rem;

  &:checked {
    background: url('src/assets/remix-icons/fill/system/checkbox-fill.svg');
  }
`;

export const ForgotPasswordLink = styled.a`
  margin-left: 65px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: #616161;
  text-decoration: none;

  &:hover {
    color: #616161;
    text-decoration: none;
  }
`;