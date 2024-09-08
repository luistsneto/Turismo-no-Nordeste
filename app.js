function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma capital do Nordeste.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

     // Inicializa uma string vazia para armazenar os resultados
     let resultados = "";
     let titulo = ""; 
     let descricao = "";
     let quandoIr = "";
     let oQueFazer = "";
     let melhoresPraias = "";
     let ondeFicar = "";
     let link = "";
 
     // Itera sobre cada dado da lista de dados
     for (let dado of dados) {
         titulo = dado.titulo.toLowerCase()
         descricao = dado.descricao.toLowerCase()
         quandoIr = dado.quandoIr.toLowerCase()
         oQueFazer = dado.oQueFazer.toLowerCase()
         melhoresPraias = dado.melhoresPraias.toLowerCase()
         ondeFicar = dado.ondeFicar.toLowerCase()
         link = dado.link.toLowerCase()
         // se titulo includes campoPesquisa
         if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || quandoIr.includes(campoPesquisa) || oQueFazer.includes(campoPesquisa) || melhoresPraias.includes(campoPesquisa) || ondeFicar.includes(campoPesquisa) || link.includes(campoPesquisa)) {
             // cria um novo elemento
             resultados += `
             <div class="item-resultado">
                 <h2>
                     <a href="#" target="_blank">${dado.titulo}</a>
                 </h2>
                 <p class="descricao-meta">${dado.descricao}</p>
                 <p class="descricao-meta">${dado.quandoIr}</p>
                 <p class="descricao-meta">${dado.oQueFazer}</p>
                 <p class="descricao-meta">${dado.melhoresPraias}</p>
                 <a href=${dado.ondeFicar} target="_blank">Veja onde se hospedar</a>
                 <a href=${dado.link} target="_blank">Mais informações</a>
             </div>
         `;
         }
     }
 
     if (!resultados) {
         resultados = "<p>Nada foi encontrado</p>"
     }
 
     // Atribui os resultados gerados à seção HTML
     section.innerHTML = resultados;
 }