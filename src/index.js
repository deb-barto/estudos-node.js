const express = require('express');

const app = express();
// request é oque estamos recebendo da requisição e response é tudo que retorna da requisição

/* Get = Buscar uma informaçao dentro do servidor
** POST - inserir uma info no servidor
** PUT - Alterar uma info no servidor
** PATCH - Alterar uma info especifica
** DELETE - deletar uma info no servidor
*/

    app.get("/courses",(request, response)=>{
    return response.json(["curso 1", "curso 2", "curso 3"
    ]);
});
    // usando metodo post

    app.post("/courses",(request, response)=>{
        return response.json(["curso 1", "curso 2", "curso 3", "curso 4"]);
    //return response.send("hello word!") 
})

    app.put("/courses/:id",(request, response)=>{
        return response.json(["curso 1.1", "curso 2", "curso 3", "curso 4"
        ]);
});
    // usando metodo put


    app.patch("/courses/:id",(request, response)=>{
        return response.json(["curso 1.0", "curso 2", "curso 3", "curso 4"
        ]);
    });
        // usando metodo patch
    
    app.delete("/courses/:id",(request, response)=>{
            return response.json(["curso 1.0", "curso 2", "curso 3"]);
    });
            // usando metodo delete
        
        




    // usamos normalmente a função de json
   // permite mandar mensagem pra quem solicita a rota

// localhost:3333
app.listen(3333);

// vamos aprender como fazer o reload sem precisar derrubar o server com yarn add nodemon -D

