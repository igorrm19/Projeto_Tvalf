    let cor = "yellow"
    let contador = 0


    function alterarCor(Luz){
        contador++

        if (contador % 2 === 0) {

            Luz.style.color = "black"

        } else {
            Luz.style.color = cor
        }


    }

    const Luz = document.getElementById('luz').onclick = function (){
        alterarCor(this)
    };


   
    console.log(Luz);
