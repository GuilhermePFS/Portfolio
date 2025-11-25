const path = require('path');

module.exports = {
  entry: './src/index.js', // Arquivo inicial
  output: {
    filename: 'bundle.js', // Nome do arquivo gerado
    path: path.resolve(__dirname, 'dist'), // Pasta de saída
  },
  watch: true, //habilita o modo watch
  mode: 'development', // ou 'production'
};
