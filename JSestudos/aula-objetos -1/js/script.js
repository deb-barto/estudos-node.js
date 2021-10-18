function meuEscopo (){
        const form = document.querySelector('.form'); // pelo nome é form, pela classe é .form, pelo id é #form
        const resultado = document.querySelector('.resultado');
        
        const pessoas =[]; // quem vai preencher o array é o envio do form

               let contador = 0;

               function recebeEvento(evento){
                evento.preventDefault();

                 const nome = form.querySelector('.nome');
                 const sobrenome = form.querySelector('.sobrenome');
                 const idade = form.querySelector('.idade');
                 const altura = form.querySelector('.altura');

                 pessoas.push({
                  nome : nome.value,
                  sobrenome : sobrenome.value,
                  idade : idade.value,
                  altura : altura.value
                 })

                 console.log(pessoas)
                 resultado.innerHTML +=`
                 <p>
                 ${nome.value}, ${sobrenome.value}, ${idade.value}, ${altura.value}
                 </p>`
               }

               form.addEventListener('submit', recebeEvento)
            
}
meuEscopo();
