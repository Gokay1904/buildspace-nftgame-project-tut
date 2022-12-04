const CONTRACT_ADDRESS = "0x4E08850F2cb437F230e541B9c1Bba8Bf6ee03CD4";

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),  
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };