const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    var possuiErro = false
    if (!req.file) {
      req.flash('error', 'Avatar não informado')
      possuiErro = true
      return res.redirect('/signup')
    }

    const { filename: avatar } = req.file

    if (!req.body.name) {
      req.flash('error', 'Nome não informado')
      possuiErro = true
    }

    if (!req.body.email) {
      req.flash('error', 'Email não informado')
      possuiErro = true
    }

    if (!req.body.password) {
      req.flash('error', 'Senha não informada')
      possuiErro = true
    }
    if (possuiErro) {
      return res.redirect('/signup')
    }

    await User.create({ ...req.body, avatar })

    return res.redirect('/')
  }
}

module.exports = new UserController()
