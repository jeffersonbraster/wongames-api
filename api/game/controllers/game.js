'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: async (ctx) => {
    console.log("Começando a popular games")

    await strapi.services.game.populate()

    ctx.send("Finalizando o popular games")
  }
};
