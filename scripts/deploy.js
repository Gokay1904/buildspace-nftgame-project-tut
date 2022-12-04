const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Gandalf", "Aragorn", "Gimli"],       // Names
        ["QmQCEpuqgx3tQY7MpnubdnU5vYCpwEZvwAwPU9KPr2apNP", // Images
            "QmNSF9aQ9roZqwC25QhoDeJwp4SrraKSMsbMpMyutqQKLt",
            "QmWYwuGwXdReKYWhN4P8PbHtkXXLrmUCPbZX1PZAPygw89"],
        [100, 200, 300],                    // HP values
        [100, 50, 25],                       // Attack damage values
        "Balrog",
        "QmT4Zia3mKnjpWv7Fm79b3WHgwicEddsyN2F62XSVusoTA",
        10000,
        50,
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("1# MINTED")

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("2# MINTED")

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("3# MINTED")

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    console.log("Done");

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