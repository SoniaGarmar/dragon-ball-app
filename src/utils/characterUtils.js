export const parseKiValue = (kiString) => {
  if (typeof kiString !== 'string') return null;

  const cleanedString = kiString.replace(/\./g, '');
  const number = parseInt(cleanedString, 10);
  return isNaN(number) ? null : number;
};

export const filterCharactersByKiRange = (characters, kiMinNumerical, kiMaxNumerical) => {
  if (kiMinNumerical === null && kiMaxNumerical === null) {
    return characters; 
  }

  return characters.filter(character => {
    const charKi = parseKiValue(character.ki);
    if (charKi === null) return false;

    if (kiMinNumerical !== null && charKi < kiMinNumerical) {
      return false;
    }
    if (kiMaxNumerical !== null && charKi > kiMaxNumerical) {
      return false;
    }
    return true;
  });
};
