/**
 * Entrada.js
 *
 * Modelo de las publicaciones, post o entradas.
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    titulo: {
      type: 'string',
      required: true
    },
    cuerpo: {
      type: 'text',
      required: true
    },
    categoria_entrada_ref: {
      model: 'CategoriaEntrada',
      via: 'entrada_ref'
    },
    usuario_publicador: { //Usado para establecer la relacion con Usuario. Un usuario tiene muchas Publicaciones o entradas.
      model: 'Usuario'
    }
  }
};
