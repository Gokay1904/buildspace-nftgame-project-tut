const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Gandalf", "Aragorn", "Gimli"],       // Names
        ["https://i.imgur.com/7qjvKyi_d.webp?maxwidth=760&fidelity=grand", // Images
            "https://i.imgur.com/M3UPy7n_d.webp?maxwidth=760&fidelity=grand",
            "https://i.imgur.com/J1bTyTD_d.webp?maxwidth=760&fidelity=grand"],
        [100, 200, 300],                    // HP values
        [100, 50, 25],                       // Attack damage values
        "Balrog",
        "https://i.imgur.com/Cr8ZUKe_d.webp?maxwidth=760&fidelity=grand",
        10000,
        50,
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

};


runMain();