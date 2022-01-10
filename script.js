 var header = document.querySelector('header');
 var listaCadastro = document.querySelector('.lista-cadastro');
 var listaCadastroInput = document.querySelector('.lista-cadastro input[type=text]');
 var listaCadastroInputNumber = document.querySelector('.lista-cadastro input[type=number]');
 var listaCadastroInputSubmit = document.querySelector('.lista-cadastro input[type=submit]');





 header.style.backgroundColor="#5a71bb";
 header.style.textAlign="center";
 header.style.color="white";
 header.style.padding="20px 0";

 /* */

listaCadastro.style.display="flex";
listaCadastro.style.margin="20px 0";
listaCadastro.style.padding="0 20px";

/* */

listaCadastroInput.style.borderRadius="20px";
listaCadastroInput.style.border="1px";
listaCadastroInput.style.borderStyle="solid";
listaCadastroInput.style.borderColor="#5a71bb";
listaCadastroInput.style.flex="1";
listaCadastroInput.style.height="40px";
listaCadastroInput.style.paddingLeft="20px";

/* */

listaCadastroInputNumber.style.borderRadius="20px";
listaCadastroInputNumber.style.border="1px";
listaCadastroInputNumber.style.borderStyle="solid";
listaCadastroInputNumber.style.borderColor="#5a71bb";
listaCadastroInputNumber.style.height="40px";
listaCadastroInputNumber.style.paddingLeft="20px";

/* */


listaCadastroInputSubmit.style.borderRadius="20px";
listaCadastroInputSubmit.style.cursor="pointer";
listaCadastroInputSubmit.style.backgroundColor="#5a71bb";
listaCadastroInputSubmit.style.padding="10px";
listaCadastroInputSubmit.style.color="white";
listaCadastroInputSubmit.style.border="0";





var items =[];

    document.querySelector('input[type=submit]').addEventListener('click', ()=>{
        var nomeProduto = document.querySelector('input[name=nome_produto]');

        var precoProduto = document.querySelector('input[name=price]');

        items.push({
            nome: nomeProduto.value,
            valor: precoProduto.value
        })

        let listaMercado = document.querySelector('.lista-produto');
        let soma = 0;
        listaMercado.innerHTML="";
        items.map((val)=>{
            soma+=parseFloat(val.valor);

            listaMercado.innerHTML+=
            `
            <div class="lista-produto-single">
                <h3>`+val.nome+`</h3>
                <h3 class="price-produto"><span>$`+val.valor+`</span></h3>
            </div>
            
            `;


        })

        soma = soma.toFixed(2);
        nomeProduto.value ="";
        precoProduto.value="";

        let somaprodutos = document.querySelector('.soma-produto h1');

        somaprodutos.innerHTML =`Total: R$`+soma;
    })


    document.querySelector('button[name=limpar]').addEventListener('click',()=>{
        items =[];
        let listaMercado = document.querySelector('.lista-produto');
        listaMercado.innerHTML="";
        let soma = 0;

        let somaprodutos = document.querySelector('.soma-produto h1');

        somaprodutos.innerHTML =`Total: R$`+soma;

    
    })
    




 