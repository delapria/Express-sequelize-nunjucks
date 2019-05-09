module.exports = {
  // dialect: 'postgres',
  // username: 'docker',
  // password: 'docker',
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  host: '127.0.0.1',
  database: 'gonodemodulo2',
  operatoraliases: false,
  define: {
    timestamps: true, // Adicionada data de modificaçao e data de inclusao
    underscored: true,
    underscoredAll: true
  }
}
