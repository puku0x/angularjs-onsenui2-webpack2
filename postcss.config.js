module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-cssnext'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('postcss-simple-vars')({
      silent: true
    })
  ]
}