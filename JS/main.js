
var instance = new vidbg('.video', {
    mp4:    'video/world.mp4', // URL-адрес или относительный путь к 
    webm:   'video/world.webm',          // URL или относительный путь к WebM видео 
    poster: 'video/poster.jpg',      // URL или относительный путь к замещающее изображение 
    overlay: false,         // Логическое для отображения наложения или не 
    // overlayColor: '#000',   // Цвет наложения в виде HEX 
    // overlayAlpha: 0.3       // Альфа наложения. Считайте это последним целым числом в RGBA ()
  }, {
    // Атрибуты 
  })

  var rellax = new Rellax('.rocket');