const db = require('../database/models')


const controller = {
  list: (req, res) => {
    let allGenres = db.Genres.findAll()
    allGenres.then((result) => {
      console.log(result)
      res.render('genresList', { genres: result })
    }).catch(err => {
      console.log(err)
    })
  },
  detail: (req, res) => {
    let { id } = req.params
    db.Genres.findOne({
      where: {
        id: id
      }
    }).then((result) => {
      console.log(result)
      res.render('genresDetail', { genre: result })
    }).catch(err => {
      console.log(err)
    })
  }
}

module.exports = controller