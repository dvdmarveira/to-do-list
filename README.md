# TodoList 

Este é o backend de um projeto TodoList, desenvolvido em **Node.js** com **Express**, que implementa um CRUD para tecnologias e tasks relacionadas a cada tecnologia cadastrada.

## Tecnologias Utilizadas
- Node.js
- Express
- MongoDB 
- Mongoose 
- Dotenv
- Cors
- Morgan

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/dvdmarveira/to-do-list.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd to-do-list
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Configuração
Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias, como a conexão com o banco de dados.

Exemplo:
```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/todolist-database
```

## Executando o Servidor
Para rodar o servidor em modo de desenvolvimento:
```sh
npm run dev
```
Ou em produção:
```sh
npm start
```
O backend rodará em `http://localhost:3001` (ou na porta definida no `.env`).

## Endpoints da API

### Tecnologias
- `GET /technologies` - Lista todas as tecnologias
- `POST /technologies` - Cria uma nova tecnologia
- `GET /technologies/:id` - Busca uma tecnologia pelo ID
- `PUT /technologies/:id` - Atualiza uma tecnologia
- `DELETE /technologies/:id` - Remove uma tecnologia

### Tasks
- `GET /tasks` - Lista todas as tasks
- `POST /tasks` - Cria uma nova task vinculada a uma tecnologia
- `GET /tasks/:id` - Busca uma task pelo ID
- `PUT /tasks/:id` - Atualiza uma task
- `DELETE /tasks/:id` - Remove uma task

## Testando a API
Para testar os endpoints da API, você pode utilizar ferramentas como **Postman** ou **Insomnia**:

1. **Postman**:
   - Importe a coleção de rotas da API ou crie as requisições manualmente.
   - Configure a URL base (`http://localhost:3001` ou a porta definida no `.env`).
   - Envie requisições GET, POST, PUT e DELETE para testar as funcionalidades.

2. **Insomnia**:
   - Similar ao Postman, crie requisições HTTP e teste os endpoints da API.
   - Configure o cabeçalho `Content-Type: application/json` quando necessário.

3. **Terminal (cURL, PowerShell ou HTTPie)**:
   - Para testar via cURL:
     ```sh
     curl -X GET http://localhost:3001/api/technologies
     ```
   - Para enviar uma requisição POST:
     ```sh
     curl -X POST http://localhost:3001/api/technologies 
     ```
   - Para testar no **PowerShell**:
     ```powershell
     Invoke-WebRequest -Uri "http://localhost:3001/api/technologies" -Method Get
     ```
     ```powershell
     Invoke-RestMethod -Uri "http://localhost:3001/api/technologies" -Method Post 
     ```
   - Para testar via HTTPie (se instalado):
     ```sh
     http GET http://localhost:3001/api/technologies
     ```

Essas ferramentas permitem visualizar as respostas do servidor, testar diferentes cenários e garantir que o backend esteja funcionando corretamente.



