module.exports = function (router) {

  var version = "0-1";

  router.get('/' + version + '/start', function (req, res) {
    res.render(version + '/start', {})
  })

  router.post('/' + version + '/start', function (req, res) {
  })

}
