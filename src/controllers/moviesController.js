const db = require('../database/models')

const controller = {
  //All movies
  list: (req, res) => {
    let allMovies = db.Movies.findAll()
    allMovies.then((result) => {
      console.log(result)
      res.render('moviesList', { movies: result })
    }).catch(err => {
      console.log(err)
    })
  },
  detail: (req, res) => {
    let { id } = req.params
    db.Movies.findOne({
      where: {
        id: id
      }
    }).then((result) => {
      console.log(result)
      res.render('moviesDetail', { movie: result })
    }).catch(err => {
      console.log(err)
    })
  },
  recomended: (req, res) => {

  },
  new: (req, res) => {
    
  }
}

module.exports = controller