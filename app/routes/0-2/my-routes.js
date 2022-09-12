module.exports = function (router) {

  var version = "0-2";

  router.get('/' + version + '/start', function (req, res) {
    res.render(version + '/start', {})
  })

  router.post('/' + version + '/start', function (req, res) {
  })

  router.get('/' + version + '/another-page', function (req, res) {
    res.render(version + '/another-page', {})
  })

  router.post('/' + version + '/another-page', function (req, res) {
  })

}
