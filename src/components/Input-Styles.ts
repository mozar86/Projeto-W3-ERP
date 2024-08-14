// Input-Styles.ts
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const InputPasswordContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
`;

export const StatusEyeIcon = styled.span`
  position: absolute;
  right: 85px;
  cursor: pointer;
  color: #999;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  input {
    margin-right: 0.5rem;
  }

  label {
    font-size: 0.875rem;
  }
`;
