# Processo seletivo estágio App Masters

Processo de seleção para estágio JavaScript da [App Masters](https://appmasters.io)


## 2ª Etapa

### Backend

Não é preciso conectar ao banco de dados ainda, apenas lidar com o recebimento dos dados e retorno para o frontend, além de testes bem completos.

Recebimento dos dados
- Criar rota POST /donation que receberá os dados em um único post
- Se algum campo faltar retornar status 400 com {error: true, requiredFields: [$field1, $field2, ...], errorMessage: "Todos os campos obrigatórios devem ser informados"}
- Validar se o endereço de email é válido
- Se a quantidade de itens no array devices for diferente de deviceCount retornar status 400 com {error:true, errorMessage: "A quantidade de equipamentos ({$deviceCount}) não está de acordo com as informações de equipamentos enviados ({$sentDevices})"}
- Validar se os devices estão chegando com os types corretos
- Se todos os dados estiverem ok, consideraremos que houve sucesso e então retornaremos status 200 com json {success:true}

Testes
- Criar teste para enviar campos faltando, e deverá ter sucesso ao confirmar que a API irá recusar com status 400 e errorMessage
- Informar um email inválido, e confirmar que a API recusa com mensagem específica pra isso
- Criar teste para enviar dados pessoais completos, mas não enviar devices
- Criar teste que envie dados completos, e deviceCount for diferente da quantidade de itens enviados em devices, deverá retornar uma falha
- Criar teste que envie um type inválido
- Criar teste que envie dados e devices corretamente, que enfim retornará 200 e sucess
- Se houver alguma regra que depende de outro teste, ou algum teste que depende de uma regra inexistente, sinta-se a vontade para implementar.

Use o Postman, Insomnia ou outro software parecido para poder ir chamando sua API enquanto desenvolve, para te facilitar validar os retornos.

## Executando o projeto

Você precisa ter o [Node.js](https://nodejs.org) instalado em seu computador.
```bash
git clone https://github.com/DanielBorges91/backend_estagio_appmasters.git
cd backend_estagio_appmasters
yarn install
yarn dev
```

## Teste

```bash
yarn test
```
_______

Autor - [Daniel Borges](https://www.linkedin.com/in/daniel-borges-1531011a8/)