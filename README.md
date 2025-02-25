# **Projeto ERP**  

Este é um projeto de **dashboard interativo** desenvolvido com **React**, que permite a visualização e gerenciamento de produtos e clientes. Ele conta com **componentes reutilizáveis**, integração com uma API para exibição de dados e um layout responsivo.

---

## **📌 Funcionalidades**  

- **📊 Dashboard Interativo** – Exibe listas de produtos e clientes.  
- **🔍 Pesquisa e Filtros** – Permite buscar produtos por nome.  
- **📦 Listagem de Produtos** – Exibe os produtos com **status de mercado** (em alta/em baixa).  
- **📜 Histórico de Predições** – Mostra previsões de produtos esgotando.  
- **🛠 Sidebar Dinâmica** – Pode ser expandida ou recolhida.  
- **🖼 Background Customizado** – Tela de previsões com imagem de fundo.  

---

## **🚀 Tecnologias Utilizadas**  

- **React.js** – Biblioteca principal para a interface.  
- **TypeScript** – Para tipagem segura do código.  
- **Styled Components** – Para estilização dos componentes.  
- **Axios** – Para requisições HTTP à API.  
- **React Router** – Para navegação entre as páginas.  

---

## **📂 Estrutura do Projeto**  

```plaintext
📦 src
 ┣ 📂 assets        # Ícones e imagens
 ┣ 📂 components    # Componentes reutilizáveis
 ┃ ┣ 📂 dashboard  
 ┃ ┃ ┣ 📜 DashboardBar.tsx
 ┃ ┃ ┣ 📜 Header.tsx
 ┃ ┃ ┣ 📜 Sidebar.tsx
 ┃ ┃ ┣ 📜 ProductList.tsx
 ┃ ┃ ┗ 📜 ClientList.tsx
 ┃ ┣ 📂 produtos  
 ┃ ┃ ┗ 📜 ProductsList.tsx
 ┣ 📂 pages        # Páginas principais
 ┃ ┣ 📜 Dashboard.tsx
 ┃ ┣ 📜 Produtos.tsx
 ┃ ┣ 📜 Predicoes.tsx
 ┃ ┗ 📜 Detalhamento.tsx
 ┣ 📂 styles       # Estilos globais e por página
 ┣ 📜 App.tsx      # Componente principal
 ┣ 📜 main.tsx     # Ponto de entrada da aplicação
 ┗ 📜 README.md    # Documentação do projeto
```

---

## **🛠 Instalação e Execução**  

### **1️⃣ Pré-requisitos:**  
- Node.js instalado (versão 16+ recomendada).  
- Gerenciador de pacotes **npm** ou **yarn**.  

### **2️⃣ Clonar o repositório:**  
```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto
```

### **3️⃣ Instalar dependências:**  
```bash
npm install
# ou
yarn install
```

### **4️⃣ Executar a aplicação:**  
```bash
npm run dev
# ou
yarn dev
```
A aplicação será iniciada no endereço: **http://localhost:5173/**  

---

## **🔀 Rotas da Aplicação**  

| Rota            | Descrição |
|----------------|------------|
| `/`            | Página principal do **Dashboard** |
| `/produtos`    | Listagem de produtos com pesquisa e status de mercado |
| `/predicoes`   | Histórico de predições e produtos esgotando |
| `/detalhamento` | Página de detalhes de um produto (navegação simples) |

---

## **📜 Explicação da Lógica do Projeto**  

1. **Dashboard**: Página inicial que exibe as listas de produtos e clientes.  
2. **Sidebar Dinâmica**: Usa `useState` para controlar se está aberta ou fechada.  
3. **Listagem de Produtos**:  
   - Busca produtos via `axios` da API.  
   - Filtra produtos conforme **percentual** (exibindo somente os que possuem dados válidos).  
   - Aplica cores no status (**verde = em alta**, **vermelho = em baixa**).  
4. **Pesquisa**: Atualiza a exibição de produtos em tempo real conforme o usuário digita.  
5. **Redirecionamento**: Ao clicar em um produto, o usuário é levado à página de detalhamento.  

---

## **📌 Possíveis Melhorias Futuras**  

✅ Implementação de **paginação** na listagem de produtos.  
✅ Uso de um **contexto global (React Context API ou Redux)** para melhor gerenciamento de estado.  
✅ Melhor tratamento de erros nas requisições.  

---

## **🤝 Contribuição**  

Sinta-se à vontade para sugerir melhorias ou reportar bugs abrindo **issues** ou enviando **pull requests**.  

---

## **👤 Autor**  

**Mozar Lima**  
📧 Email: mozarfrancisco@gmail.com
🔗 GitHub: https://github.com/mozar86
