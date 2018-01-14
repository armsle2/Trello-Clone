module.exports = (sequelize, DataTypes)=>{
	let Task = sequelize.define('Task', {
		body: {
			type: DataTypes.TEXT,
			allowNull: false,
			len: [1]
		}
	});

	Task.associate = models=>{
		Task.belongsTo(models.List, {
			foreignKey: {
				allowNull: false
			}
		})
	}
	return Task;
}