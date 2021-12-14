module.exports = (sequelize, dataTypes) => {
  const modelName = "Movies";

  const column = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    awards: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: dataTypes.DOUBLE,
      allowNull: false,
    },
  };

  const options = {
    tableName: "movies",
    timestamps: false,
  };

  const Movie = sequelize.define(modelName, column, options);
  return Movie;
};
