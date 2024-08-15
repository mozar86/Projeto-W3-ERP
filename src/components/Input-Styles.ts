import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

export const InputPasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #00a3ff;
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
  color: #999;

  &:hover {
    color: #333;
  }
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
