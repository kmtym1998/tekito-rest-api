var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Graphqlレスポンスっぽいの
router.post('/graphql', (req, res) => {
  if (!req.body.text)
    return res.status(400).json({
      msg: 'request bodyにtextを含めてください',
    });
  return res.json({
    data: {
      me: {
        store: {
          tenant: {
            id: 'user-id',
            text: req.body.text,
            privileged: true,
          },
        },
      },
    },
  });
});

module.exports = router;
