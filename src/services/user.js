/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable indent */
module.exports = (app) => {
  const findAll = (filter = {}) => {
    return app.db('users').where(filter).select();
  };

  const save = async (user) => {
    if (!user.name) return { error: 'Nome é um atributo obrigatório' };
    if (!user.mail) return { error: 'Email é um atributo obrigatório' };
    if (!user.passwd) return { error: 'Senha é um atributo obrigatório' };

    const userDb = await findAll({ mail: user.mail });
    if (userDb && userDb.length > 0) return { error: 'Já existe um usuário com esse email' };

    return app.db('users').insert(user, '*');
  };

  return { findAll, save };
};



