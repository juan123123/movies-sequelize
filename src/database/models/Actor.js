
module.exports = (sequelize, dataTypes) => {

  const modelName = 'Actors'

  const column = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: dataTypes.DOUBLE,
      allowNull: false
    }

  }

  const options = {
    tableName: 'actors',
    timestamps : false
  }

  const Actor = sequelize.define(modelName, column, options)
  return Actor;
}