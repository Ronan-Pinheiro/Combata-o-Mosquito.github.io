// Função para verificar o tamanho da tela e ocultar o menu se necessário
function checkWindowSize() {
  const screenWidth = window.innerWidth;

  // Define a largura mínima em que o menu deve ser exibido
  const minWidthToShowMenu = 768; // por exemplo, 768 pixels

  // Seleciona o sidebar
  const sidebar = document.querySelector('#sidebar');

  // Verifica se a largura da tela é menor que a largura mínima
  if (screenWidth < minWidthToShowMenu) {
      // Oculta o sidebar se a tela for pequena
      sidebar.style.display = 'none';
  } else {
      // Mostra o sidebar se a tela for grande
      sidebar.style.display = 'block';
  }
}

// Executa a função ao carregar a página e quando a tela é redimensionada
window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);
