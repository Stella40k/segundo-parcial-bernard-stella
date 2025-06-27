import { Sequelize } from "sequelize";
const sequelize = new Sequelize()

const Movie = sequelize.define("movie", {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
     title:{
        DataTypes.STRING(35)

     },
     director:{
        DataTypes.TEXT
     },
     duration:{
         DataTypes.TEXT
     },
     genre:{
        DataTypes.TEXT
     },
     description: {

     }
})

export default Character;