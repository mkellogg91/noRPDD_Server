module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {

    // The logged in user
    const { user } = context.params;
    const { data } = context;
    const { vitality, intelligence, agility, strength, critChance, critDamage } = context.data;
    // copy all the data passed in so we can merge it with some new properties
    const passedData = { ...context.data };
    let xp = 1;
    let level = 1;
    let baseHealth = level * 5;
    let vitalityHealth = vitality * 2;
    let totalHealth = baseHealth + vitalityHealth;
    let baseDamage = level * 5;
    let intDamage = intelligence * 2;
    let totalIntDamage = baseDamage + intDamage;
    let agilityDamage = agility * 2;
    let totalAgileDamage = baseDamage + agilityDamage;
    let strengthDamage = strength * 2;
    let totalStrengthDamage = baseDamage + strengthDamage;
    let critChancePercent = critChance * 2
    // if we are rolling a 100 sided die, represents the number we have to beat in order to get a critical hit
    let critNumberToBeat = 100 - critChancePercent;
    // multiply damage between 5 and (10 in this case) times, this number represents the top of the multiplyer window
    let critDamageMultiplier = critDamage * 2

    // add calculated attributes to an object so we can merge them with the others
    const calculatedStats = {
      xp,
      level,
      baseHealth,
      vitalityHealth,
      totalHealth,
      baseDamage,
      intDamage,
      totalIntDamage,
      agilityDamage,
      totalAgileDamage,
      strengthDamage,
      totalStrengthDamage,
      critChancePercent,
      critNumberToBeat,
      critDamageMultiplier
    }

    // merge previous context data with new props
    context.data = {
      ...passedData,
      ...calculatedStats,
      userId: user._id,
      createdAt: new Date().getTime()

      // TODO: add all derived attributes here with their calculated values
    };

    return context;
  };
};