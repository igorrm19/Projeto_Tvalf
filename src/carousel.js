
       const id = document.getElementById('textoSlide')
       var nome = prompt("Qual o seu nome?")


       id.innerHTML = `<p>Bem vindo ${nome}</p`

        // Array com os htmls que serão exibidos
        var textos = [
        `<h1>Nosso negócio é sobre </h1>`
        +`<h1>a tecnologia, sim.</h1>`
        +`<h3>Mas é também sobre as operações e relacionamento com os clientes..</h3>`
        +`<h3>- Michael Dell</h3>`,
        
        `<h1>Nossa visão</h1>`
        +`<h3>Utilizar a engenharia e a tecnologia para aprimorar as funções de cada empresa, melhorando os índices e reduzindo os prejuízos </h3>`,
        
        
        `<h1>Nossos valores</h1>`
        +`<h3>Tecnologia.</h3>`
        +`<h3>Empreendedorismo. Viabilidade. Altruísmo. Liderança. Facilidade</h3>`,
        
        `<h1>Nossa missão </h1>`
        +`<h3>Utilizar a engenharia e a tecnologia para aprimorar as funções de cada empresa,</h3>`
        +`<h3> melhorando os índices e reduzindo os prejuízos</h3>`
      ];
        var indiceAtual = 0;
        


        // Função para mudar o texto ao clicar no botão próximo
        document.querySelector('.carousel-control-next').addEventListener('click', function() {
          indiceAtual++;

          if (indiceAtual >= textos.length) {
             indiceAtual = 0; 
            }

          document.getElementById("textoSlide").innerHTML = textos[indiceAtual];
        });
        
        


        
        // Função para voltar ao texto anterior ao clicar no botão anterior
        document.querySelector('.carousel-control-prev').addEventListener('click', function() {
          indiceAtual--;

          if (indiceAtual < 0) { 
            indiceAtual = textos.length - 1; 
          }

          document.getElementById("textoSlide").innerHTML = textos[indiceAtual];
        });
        

        
        console.log(indiceAtual)
        console.log(1)
        