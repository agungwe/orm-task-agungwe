const { Sequelize, DataTypes, Model } = require('sequelize');
//const {Sequelize} = require("sequelize")

const sequelize = new Sequelize('db-ut', 'wicak', 'wicak', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false //Buat tampilin Log atau gak?
});


class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

(async () => {
    try {
        // await sequelize.sync();
        //await sequelize.authenticate();
        //await sequelize.sync({ force: true });
        //const user = await User.create({firstName: "Deni", lastName: "Rudiana"})  //Untuk Insert Data ke Tabel (Build+Save)

        //const result = await user.save()
        console.log(user, "Here");
    } catch (error) {
        console.log("Connection Error", error);
    }
})();
