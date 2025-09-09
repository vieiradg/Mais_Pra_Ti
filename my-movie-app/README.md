# VieiraFilmes

Um aplicativo simples feito em React para pesquisar filmes, ver detalhes e salvar uma lista de favoritos, utilizando a API do The Movie Database (TMDB).

---

## Principais Funcionalidades

-   Busca de filmes por nome.
-   Visualização de detalhes (sinopse, elenco, avaliação).
-   Sistema para adicionar e remover filmes de uma lista de favoritos.
-   Paginação para navegar pelos resultados da busca.
-   Os favoritos ficam salvos no navegador (`localStorage`).

---

## Tecnologias

-   React
-   Vite
-   React Router DOM
-   Axios
-   CSS

---

## Como Executar o Projeto

1.  **Clone o repositório principal:**
    ```bash
    git clone [https://github.com/vieiradg/Mais_Pra_Ti.git](https://github.com/vieiradg/Mais_Pra_Ti.git)
    ```

2.  **Navegue até a pasta deste projeto específico:**
    ```bash
    cd Mais_Pra_Ti/my-movie-app
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Crie o arquivo de ambiente (`.env`):**
    -   Dentro da pasta `my-movie-app`, crie um arquivo chamado `.env`.
    -   Adicione sua chave da API do TMDB, assim:
        ```
        VITE_TMDB_API_KEY=SUA_CHAVE_AQUI
        ```

5.  **Rode o projeto:**
    ```bash
    npm run dev
    ```
    Acesse `http://localhost:5173` no seu navegador.

---

## Autor

Feito por **Diego Vieira**.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vieiradg)
