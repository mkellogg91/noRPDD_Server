module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {

    // The logged in user
    const { user } = context.params;
    const { data } = context;
    const { heroName, availablePoints, vitality, critChance, critDamage, attack, defense, agility, intelligence, strength } = data;

    // Update the original data (so that people can't submit additional stuff)
    context.data = {
      heroName,
      availablePoints,
      vitality,
      critChance,
      critDamage,
      attack,
      defense,
      agility,
      intelligence,
      strength,
      userId: user._id,
      createdAt: new Date().getTime()

      // TODO: add all derived attributes here with their calculated values
    };

    return context;
  };
};