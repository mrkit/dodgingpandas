const router = require('express').Router(),
      jwt = require('jsonwebtoken'),
      User = require('../db').models.User;

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  
  User.findOne({ where: { username }})
  .then(user => jwt.sign({id: user.id, username: user.username}, 'secret', {expiresIn: '1hr'}))
  .then(token => res.send(token))
  .catch(next);
})

module.exports = router;