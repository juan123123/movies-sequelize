const db = require('../database/models')

const ActorModel = {
  
  findAll: () => {
    db.Actors.findAll().then(result => {
      console.log(result)
    }).catch(err => console.log(err))
  },
  findById: () => {
    return {}
  }
}

module.exports = ActorModel;