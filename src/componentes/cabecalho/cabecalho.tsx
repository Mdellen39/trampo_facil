import React from "react";
import '../estilo/estilo.css'


function Cabecalho() {
    return (
        <div>
            <nav>
                <ul>
                    <li className="imagemLogo">
                        <img src={`${process.env.PUBLIC_URL}/Logo-Vetor-01.png`} alt="Logo" className="logo" />
                    </li>
                </ul>
                <ul className="barra">
                    <li><a href="#">Vagas</a></li>
                    <li>< a href="#">Carreiras</a></li>
                    <li><a href="#">Quem Somos?</a></li>
                    <li><a href="#">Suporte</a></li>
                    <li>
                        <a href="" rel="noopener noreferrer" className="button-link">Cadastro Empresas</a>
                    </li>
                    <li>
                        <a href="/Login"  rel="noopener noreferrer" className="button-link">Cadastro Funcionario</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Cabecalho;
