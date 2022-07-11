# Desafio Corelab-api-challenge

#### **Sobre o projeto**

---

* Utilização de padrão **MVC** e design pattern **DAO**
* Arquitetura **REST**
* Operações **CRUD**
* Feito em Node.js: **Express, Nodemon, SQLite**

#### **Instruções de instalação**


Para a instalação das **dependências** do projeto, execute o comando `npm install` em seu terminal, dentro da pasta onde os arquivos foram salvos. Ao executar este comando, será instalada toda a estrutura necessária e descrita no arquivo `package.json` para o pleno funcionamento do software.<br>

Para criar o banco de dados e preenchê-lo com dados predefinidos, execute em seu terminal o comando `node ./src/data/CreateDB.js`.<br>

Por fim, para executar o projeto, o comando `node server.js` deve ser inserido no terminal.<br>

#### **Rotas**
---

**As entidades disponíveis no banco de dados são: cliente, funcionário, fornecedor, hardware e software.**

- **GET**
    - **Consulte todas as instâncias da entidade**
        - `'/vehicles'`
    - **Consulte uma instância específica através de seu id**
        - `'/vehicle'` + /{insira aqui a id desejada}
- **POST**
    - **Insira uma instância na entidade**
        - `'/vehicle'`
- **PUT**
    - **Atualize uma instância já existente**
        - `'/vehicle'`
- **DELETE**
    - **Remova uma instância específica através de seu id**
        - `'/vehicle'` + /{insira aqui a id desejada}

*A operação GET pode ser acessada através de seu navegador de preferência, enquanto que para a utilização das demais é recomendado fazer as requisições por meio de API clients como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download).*

#### **Deploy**

---

Para interagir com a API sem a necessidade de instalação local, o endereço https://corelab-cars.herokuapp.com/ pode ser acessado, seguindo as mesmas instruções de rota sinalizadas acima.


