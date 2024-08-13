import styled from "styled-components";
import AppRoutes from "./routes";

const AppContainer = styled.div`
  // Estilos globais para o container principal, se necessário
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
};

export default App;
