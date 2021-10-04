const { response, request } = require("express");

const express = require("express");

const { v4 : uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];
/* 
* cpf - string 
* name - string
* id - uuid  > universal uniquie identifier. gera um numero, para usar se instala uma biblioteca (yarn add uuid)
* statement - []
*/



// middleware
function verifyIfExistsAccountCPF(request, response, next){
    
    const {cpf} = request.headers;

    const customer = customers.find(customer => customer.cpf === cpf);

    if(!customer){
        return response.status(400).json({error:"Customer not found!"})
    }
    request.customer = customer;
    return next();
}

// fazendo o requidito de cadastro de conta 
app.post("/account", (request, response)=>{
  const {cpf, name} = request.body;
  
  const customerAlreadyExists = customers.some(
      (customer) => customer.cpf === cpf
    );

    if (customerAlreadyExists){
        return response.status(400).json({error:"Customer already exists!"});
    }
  customers.push({
      cpf,
      name,
      id:uuidv4(),
      statement:[]
  });
  return response.status(201).send();
});

// app.use(verifyIfExistsAccountCPF)

// fazendo o requisito de puxar extrato do cliente (acrescentando o midleware)

app.get("/statement", verifyIfExistsAccountCPF, (request, response)=>{
    const {customer} = request;
    return response.json(customer.statement)
})
 
// criando o recurso para poder fazer um deposito



app.post("/deposit", verifyIfExistsAccountCPF ,(request, response)=>{
    const{customer} = request;
    const { description, amount} = request.body;
    
    const statementOperation ={
        description,
        amount,
        created_at: new Date(),
        type:"credit"
    };
  customer.statement.push(statementOperation)

  return response.status(201).send();
})

// requisições para poder fazer um saque

app.post("/withdraw", verifyIfExistsAccountCPF, (request, response)=>{ 
    const {amount} = request.body;
    
    const {customer} = request;

    const balance = getBalance(customer.statement)
    
    if (balance < amount){
          return response.status(400).json({error:"Insufficiente Funds!"});
      }
   const statamentOperation = {
        amount,
        created_at: new Date(),
        type: "debit"
   };
    custumer.statament.push(statementOparation);

    return response.status(201).send();
  });
  

// requisições para buscar hora 

app.get("/statement/date", verifyIfExistsAccountCPF, (request, response)=>{
    const { customer }  = request;
    const { date } = request.query;
    
    // conseguir fazer busca da transações de um dia independente da hora desse dia 

    const dateFormat = new Date (date + " 00:00");

    const statement = customer.statament.filter(
    (statement)=>
    statement.created_at.toDateString() === 
    new Date (dateFormat).toDateString()
    );
    return response.json(statement)
});
 
app.listen(3333);