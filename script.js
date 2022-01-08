

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
    




 