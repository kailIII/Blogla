/**
* Blog.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true,
      unique: true
    },
    descripcion: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email'
    },
    telefono: {
      type: 'string'
    }
  }
};
