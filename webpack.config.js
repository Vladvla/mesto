const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин для сборки html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключили плагин для очистки папки dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // подключите к проекту mini-css-extract-plugin

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
  mode: 'development', // добавили режим разработчика
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

    open: true // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
        exclude: '/node_modules/' // исключает папку node_modules, файлы в ней обрабатывать не нужно
      },
      { 
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/, // добавили правило для обработки файлов регулярное выражение, которое ищет все файлы с такими расширениями
        type: 'asset/resource'
      },
      {
        test: /\.css$/, // применять это правило только к CSS-файлам
        use: [MiniCssExtractPlugin.loader, { // при обработке этих файлов нужно использовать MiniCssExtractPlugin.loader и css-loader
          loader: 'css-loader',
          options: { importLoaders: 1 } // добавьте объект options
        },
        'postcss-loader'] // Добавьте postcss-loader
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // плагин для сборки html
      template: './src/index.html' // путь к файлу index.html
  }),
  new CleanWebpackPlugin(), // Плагин для очистки папки dist
  new MiniCssExtractPlugin() // подключение плагина для объединения файлов
  ] // добавьте массив
};