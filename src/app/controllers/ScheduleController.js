const moment = require('moment')
const { User, Appointment } = require('../models')
const { Op } = require('sequelize')

class ProviderSheduleController {
  async index (req, res) {
    const appointments = await Appointment.findAll({
      include: [{ model: User, as: 'user' }],
      where: {
        [Op.or]: [
          { provider_id: req.session.user.id },
          { user_id: req.session.user.id }
        ],
        date: {
          [Op.between]: [
            moment()
              .startOf('day')
              .format(),
            moment()
              .endOf('day')
              .format()
          ]
        }
      }
    })

    return res.render('schedule/index', { appointments })
  }
}

module.exports = new ProviderSheduleController()
