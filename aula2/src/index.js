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


app.listen(3333);