import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {Contracts} from "../../app/config/contracts"

task("erc20GetFee", "erc20GetFee")
    .setAction(async (taskArgs, hre) => {
        const [signer] = await hre.ethers.getSigners();

        let contracts = new Contracts(hre.hardhatArguments.network as string);

        const ContractArtifactErc20 = require('../../artifacts/contracts/ERC20Token.sol/ERC20Token.json');
        let erc20 = new hre.ethers.Contract(contracts.ERC20, ContractArtifactErc20.abi, signer);
        let erc20Signer = erc20.connect(signer);

        let fee = await erc20Signer.fee();

        console.log("fee: " + fee);
        console.log("Done");
    });

