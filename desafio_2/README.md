# Desafio de JavaScript Avançado

## Descrição

Este desafio contém um conjunto de exercícios em JavaScript que abordam conceitos importantes, como:

- Estruturas de controle avançadas
- Funções recursivas e técnicas funcionais (debounce, memoization)
- Manipulação e transformação de arrays e objetos complexos
- Validação de dados e interatividade via terminal usando Node.js e `prompt-sync`

---

## Funcionalidades Implementadas

### Seção 1: Estruturas de Controle Avançadas

1. **Validação de Datas**  
   Função `ehDataValida(dia, mes, ano)` que verifica se a data fornecida é válida, considerando meses com número variável de dias e anos bissextos.

2. **Jogo de Adivinhação**  
   Jogo interativo que gera um número aleatório de 1 a 100 e permite ao usuário tentar adivinhar, dando dicas se o palpite deve ser maior ou menor.

3. **Palavras Únicas**  
   Função que recebe uma string e retorna um array contendo as palavras que aparecem apenas uma vez.

---

### Seção 2: Funções e Recursão

4. **Fatorial Recursivo**  
   Cálculo do fatorial de um número usando recursão, com tratamento de números negativos.

5. **Debounce**  
   Função que limita a frequência de execução de outra função, útil para otimizar eventos que disparam várias vezes.

6. **Memoization**  
   Técnica para armazenar resultados de chamadas de função para evitar recomputações caras.

---

### Seção 3: Arrays e Objetos Complexos

7. **Mapeamento e Ordenação**  
   Função que recebe um array de objetos produto e retorna os nomes ordenados pelo preço crescente.

8. **Agrupamento por Propriedade**  
   Função que soma os valores totais de vendas agrupados por cliente.

9. **Conversão Entre Formatos**  
   Funções que convertem arrays de pares `[chave, valor]` para objetos e vice-versa.

---

## Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- `prompt-sync` para entrada no terminal

### Instalação do `prompt-sync`

No terminal, execute:

```
npm install prompt-sync
```