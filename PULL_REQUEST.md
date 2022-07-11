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


# Considerações sobre este desafio: 

Infelizmente, não era o que eu queria a princípio. Como poderão observar pelos commits, a ideia inicial era construir uma API com AdonisTS. Tive muitos problemas durante esta semana, que incluíram manutenção da rede de internet, falta de energia durante alguns dias seguidos e problemas pessoais, o que como podem imaginar, me fizeram perder muito tempo e não pude me dedicar para resolver alguns problemas que surgiram na API com Adonis.

Então, devido ao tempo estar se esgotando, optei pela construção da mesma com NodeJS e Express por estar bem mais familiarizado com estas stacks, e desta forma entregar o desafio pronto, ao invés de algo incompleto ou até mesmo desistir. 

Desde já desejo agradeço pela oportunidade que me concederam. Espero se for possível e conveniente, participar de mais desafios como este no futuro! 😄🤘👍


