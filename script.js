// Função para ajustar a opacidade e escala com base na posição da barra de rolagem
function adjustOpacityAndScaleOnScroll() {
    var conteudos = document.querySelectorAll('.conteudo');
  
    // Obtém a posição vertical da barra de rolagem
    var scrollY = window.scrollY || window.pageYOffset;
  
    conteudos.forEach(function (conteudo, index) {
      var conteudoTop = conteudo.getBoundingClientRect().top;
      var conteudoHeight = conteudo.offsetHeight;
  
      // Calcule a opacidade com base na posição do elemento na tela
      var opacity = 1 - (conteudoTop - 300 - scrollY) / conteudoHeight;
  
      // Garanta que a opacidade esteja no intervalo de 0 a 1
      opacity = Math.min(1, Math.max(0, opacity));
  
      // Calcule o atraso com base no índice (aumente o atraso com base no índice)
      var delay = 400 * index; // Atraso de 200ms multiplicado pelo índice
  
      // Aplique a opacidade aos elementos com atraso
      setTimeout(function () {
        conteudo.style.opacity = opacity;
      }, delay);
  
      // Aplique a escala com atraso correspondente
      setTimeout(function () {
        conteudo.style.transform = 'scale(' + opacity + ')';
      }, delay);
    });
  }
  
  // Adiciona um ouvinte de evento de rolagem para chamar a função de ajuste de opacidade e escala
  window.addEventListener('scroll', adjustOpacityAndScaleOnScroll);
  
  // Chama a função de ajuste de opacidade e escala inicialmente ao carregar a página
  adjustOpacityAndScaleOnScroll();
  
  function calcularSangue() {
    // Obtenha os valores de peso e hematocrito a partir dos campos de entrada
    var peso = parseFloat(document.getElementById("peso").value);
    var ht = parseFloat(document.getElementById("hematocrito").value);
    var escolha = document.getElementById("escolha").value; // Obtenha a escolha

    // Faça o cálculo com base na escolha
    var resultado;
    if (escolha === "cao") {
        resultado = (((25 - ht) * 2.2) * peso);
    } else if (escolha === "gato") {
        resultado = (((25 - ht) * 0.9) * peso);
    }

    // Exiba o resultado na div de resultado
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "Sangue Total: " + resultado.toFixed(0);

    // Divida o resultado por 2 e exiba na div "emacias"
    var emaciasDiv = document.getElementById("emacias");
    var emacias = resultado / 2;
    emaciasDiv.textContent = "Concentrado de Hemácias: " + emacias.toFixed(0);
}
