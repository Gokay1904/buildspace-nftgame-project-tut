import React, { useEffect, useState } from 'react';
import './SelectCharacter.css';
import LoadingIndicator from "../../Components/LoadingIndicator";

const SelectCharacter = ({ setCharacterNFT }) => {
  console.log({setCharacterNFT})
  const [characters, setCharacters] = useState([]);
  const [gameContract, setGameContract] = useState(null);

  const [mintingCharacter, setMintingCharacter] = useState(false);


  const mintCharacterNFTAction = (characterId) => async () => {
  try {
    if (gameContract) {
      /*
       * Show our loading indicator
       */
      setMintingCharacter(true);
      console.log('Minting character in progress...');
      const mintTxn = await gameContract.mintCharacterNFT(characterId);
      await mintTxn.wait();
      console.log(mintTxn);
      /*
       * Hide our loading indicator when minting is finished
       */
      setMintingCharacter(false);
    }
  } catch (error) {
    console.warn('MintCharacterAction Error:', error);
    /*
     * If there is a problem, hide the loading indicator as well
     */
    setMintingCharacter(false);
  }
};

  // Render Methods
const renderCharacters = () =>
  characters.map((character, index) => (
    <div className="character-item" key={character.name}>
      <div className="name-container">
        <p>{character.name}</p>
      </div>
      <img src={character.imageURI} alt={character.name} />
      <button
        type="button"
        className="character-mint-button"
        onClick={()=> mintCharacterNFTAction(index)}
      >{`Mint ${character.name}`}</button>
    </div>
  ));

 return (
  <div className="select-character-container">
    <h2>Mint Your Hero. Choose wisely.</h2>
    {characters.length > 0 && (
      <div className="character-grid">{renderCharacters()}</div>
    )}
    {/* Only show our loading state if mintingCharacter is true */}
    {mintingCharacter && (
      <div className="loading">
        <div className="indicator">
          <LoadingIndicator />
          <p>Minting In Progress...</p>
        </div>
        <img
          src="https://media2.giphy.com/media/61tYloUgq1eOk/giphy.gif?cid=ecf05e47dg95zbpabxhmhaksvoy8h526f96k4em0ndvx078s&rid=giphy.gif&ct=g"
          alt="Minting loading indicator"
        />
      </div>
    )}
  </div>
);
};

export default SelectCharacter;
