import React from "react";
import '../estilo/estilo.css'

function corpo() {
    return (

        <div className="Pesquisa">  
              <input type="text" className="procurando-vagas" placeholder="Pesquisar Vagas..." />
              <input type="text" className="localizaçao" placeholder="Cidades ou proximidades..." />
        </div>
    )
}
export default corpo;

/* Aqui foi feito a primeira tela Home que ficará as barras de pesquisa e de cidade*/ 