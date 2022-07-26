const filmePrincipal = document.getElementById("filme-principal");
const tituloElemento = document.getElementById("titulo");
const descricaoElemento = document.getElementById("descricao");

const filmes = [
    new Filme("../img/capa-house-cards.jpg", "HOUSE OF CARDS", "Nada pode impedir o político sem escrúpulos Frank Underwood de conquistar Washington. Assista agora a nova temporada de House of Cards que está imperdível."),
    new Filme("../img/capa-umbrella.jpg", "THE UMBRELLA ACADEMY", "Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família."),
    new Filme("../img/capa-stars.jpg", "STAR WARS", "Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia.."),
    new Filme("../img/capa-pokemon.jpg", "POKEMON", "Todo ano, os cidadãos da cidade de Fura celebram um Festival do Vento, homenageando o Pokemon lendário Lugia, que protegeu a cidade da destruição anos atrás."),
    new Filme("../img/capa-house-cards.jpg", "GUERRA CIVIL", "Nada pode impedir o político sem escrúpulos Frank Underwood de conquistar Washington. Assista agora a nova temporada de House of Cards que está imperdível."),
    new Filme("../img/capa-hobbit.jpg", "O HOBBIT", "O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor."),
    new Filme("../img/capa-breaking.jpg", "BREAKING BAD", "Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos."),
    new Filme("../img/capa-house.jpg", "HOUSE", "Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho, usando a sua equipe de médicos e sua inteligência."),
    new Filme("../img/capa-sobrenatural.jpg", "SOBRENATURAL", "Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho."),
    new Filme("../img/capa-smallville.jpg", "SMALLVILLE", "Antes da vida como Super-Homem, o jovem Clark Kent encara os problemas da adolescência enquanto aprende a controlar seus poderes e usá-los para proteger a cidade de Smallville."),
    new Filme("../img/capa-vingadores.jpg", "VINGADORES", "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade."),
];

function movie(filmeNumero) {
    filmePrincipal.style.setProperty("--backgroud-url", "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),  url('" + filmes[filmeNumero].imagem + "')");
    tituloElemento.innerHTML = filmes[filmeNumero].titulo;
    descricaoElemento.innerHTML = filmes[filmeNumero].descricao;
}