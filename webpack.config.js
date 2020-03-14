const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), //arquivo de entrada
  output: {
    path: path.resolve(__dirname, "public"), //arquivo de saída
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/, //expressão regular para arquivos terminados com .js
        exclude: /node_modules/, //expressão regular para node_modules folder
        use: {
          // aqui dentro vai os loaders (javascript, css, img)
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i, //ou gif, ou png, ou jpg com case (i)sensitive
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
