module.exports = (sequelize, dataTypes) => {
  const modelName = "Genres";

  const column = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    ranking: {
      type: dataTypes.INTEGER,
      allowNull: false,
    }
  };

  const options = {
    tableName: "genres",
    timestamps: false,
  };

  const Genre = sequelize.define(modelName, column, options);
  return Genre;
};
