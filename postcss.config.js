module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-cssnext'),
    require('postcss-simple-vars')({
      silent: true
    })
  ]
}