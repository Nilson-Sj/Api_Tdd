/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable indent */
module.exports = (app) => {
  const findAll = () => {
    return app.db('users').select();
  };

  const save = (user) => {
    if (!user.name) return { error: 'Nome é um atributo obrigatório' };
    if (!user.mail) return { error: 'Email é um atributo obrigatório' };
    if (!user.passwd) return { error: 'Senha é um atributo obrigatório' };
    
    return app.db('users').insert(user, '*');
  };

  return { findAll, save };
};


