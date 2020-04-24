//webpack是node为基础的
const path = require("path")
const HtmlWepackPlugin = require('html-webpack-plugin')
module.exports = {
  devServer:{
    port:3000,
    progress:true,//进度条
    contentBase:"/dist",
    open:true,//自动打开浏览器
    compress:true//配置是否启用 gzip 压缩
  },//开发服务环境配置
  mode:'production',
  entry:"./src/index.js",
  output:{
    filename:"bundle.[hash:8].js",
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new HtmlWepackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      minify:{
        removeAttributeQuotes:true
      },//html压缩
      hash:true//hash挫
    })
  ]
}