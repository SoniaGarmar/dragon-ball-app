export const parseKiValue = (kiString) => {
  if (typeof kiString !== 'string' || !kiString.trim()) return null;

  const cleanedInput = kiString.toLowerCase().trim();

  if (cleanedInput === 'unknown') {
    return null;
  }

  const suffixMap = [
    { suffix: 'septillion', value: 1e24 },
    { suffix: 'sextillion', value: 1e21 },
    { suffix: 'quintillion', value: 1e18 },
    { suffix: 'quadrillion', value: 1e15 },
    { suffix: 'trillion', value: 1e12 },
    { suffix: 'billion', value: 1e9 },
    { suffix: 'million', value: 1e6 },
    { suffix: 'thousand', value: 1e3 }
  ];

  for (const item of suffixMap) {
    if (cleanedInput.endsWith(item.suffix)) {
      const numberPartStr = cleanedInput.substring(0, cleanedInput.length - item.suffix.length).trim();
      if (!numberPartStr) return null; 
      const num = parseFloat(numberPartStr);
      if (isNaN(num)) {
        return null;
      }
      return num * item.value;
    }
  }

  const stringWithoutDots = cleanedInput.replace(/\./g, '');
  const number = parseInt(stringWithoutDots, 10);
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
