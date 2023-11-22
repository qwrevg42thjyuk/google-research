function performGoogleSearch() {
    const searchQuery = document.getElementById('search-input').value;
    // Ваш код для выполнения поиска Google, например, перенаправление на страницу результатов:
    window.location.href = https://www.google.com/search?q=${encodeURIComponent(searchQuery)};
  }
  
  function performImageSearch() {
    const searchQuery = document.getElementById('search-input').value;
    // Ваш код для выполнения поиска изображений Google, например, перенаправление на страницу результатов:
    window.location.href = https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery)};
  }
  function performLuckySearch() {
    // Ваш код для "Мені пощастить", например, перенаправление на первый результат поиска:
    window.location.href = 'https://www.google.com/search?q=lucky+search&btnI';
  }