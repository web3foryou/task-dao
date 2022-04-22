import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {Contracts} from "../../app/config/contracts"

task("addMember", "addMember")
    .setAction(async (taskArgs, hre) => {
       let contracts = new Contracts(hre.hardhatArguments.network as string);

        const ContractArtifact = require('../../artifacts/contracts/ERC20Token.sol/ERC20Token.json');
        const [signer] = await hre.ethers.getSigners();
        let erc20 = new hre.ethers.Contract(contracts.ERC20, ContractArtifact.abi, signer);
        let erc20Signer = erc20.connect(signer);
        let tx = await erc20Signer.addMember(contracts.DAO);
        await tx.wait();

        console.log("DONE")
    });

