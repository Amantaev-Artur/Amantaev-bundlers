const path = require("path");
   
module.exports = {
    mode: "development",
    entry: "./src/app.jsx",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "./dist")
    },
    devServer: {
     historyApiFallback: true,
     static: {
      directory: path.join(__dirname, "/"),
    },
     port: 8081,
     open: true
   },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:[ "@babel/preset-react"]
                }
            }
        ]
    }
}
