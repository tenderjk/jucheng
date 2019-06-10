module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      'api': {
        target: 'https://m.juooo.com', // 要跨域的域名
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          '^/api': '/' // 在请求的时候 凡是/api开头的地址都可以跨域
        }
      }
    }
  }
}
