//has the job of bundling the files
const path = require('path');
module.exports = {    //exports object
    entry: './src/playground/redux101.js',  //when webpack wants to bundle it goes for this
    output: {
        path: path.join(__dirname, 'public'), //joining different paths
        filename: 'bundle.js'  //where the joined files go
    },//specifies the rules
    module: {
        rules: [{
            loader: 'babel-loader',//converts the code into what the broswer can understand
            test: /\.js$/,//rule that tells babel loader to convert only js files
            exclude: /node_modules///tells babel not to run node modules
        },{
            test: /\.s?css$/,//scss another framework
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // devtool: 'cheap-module-eval-source-map', //if there is an error, takes you to the original file
    // devServer: {//running server....create a server and then checks the contents of the path
    //     contentBase: path.join(__dirname, 'public')
    // }

devtool: 'cheap-module-eval-source-map',
devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
}
};
//. means start wit js module,,, $ means do not go past js module
//15..means you can either use file s or file css