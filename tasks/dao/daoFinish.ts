import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {Contracts} from "../../app/config/contracts"

task("daoFinish", "daoFinish")
    .setAction(async (taskArgs, hre) => {
        const [signer] = await hre.ethers.getSigners();

        let contracts = new Contracts(hre.hardhatArguments.network as string);

        const ContractArtifactErc20 = require('../../artifacts/contracts/ERC20Token.sol/ERC20Token.json');
        let erc20 = new hre.ethers.Contract(contracts.ERC20, ContractArtifactErc20.abi, signer);
        let erc20Signer = erc20.connect(signer);

        const ContractArtifactDao = require('../../artifacts/contracts/Dao.sol/Dao.json');
        let dao = new hre.ethers.Contract(contracts.DAO, ContractArtifactDao.abi, signer);
        let daoSigner = dao.connect(signer);

        if (hre.hardhatArguments.network as string == "ganache") {
            const minPeriod = 3 * 24 * 60 * 60;
            await hre.ethers.provider.send("evm_increaseTime", [minPeriod]);
            await hre.ethers.provider.send("evm_mine", []);
        }

        let lastProposal = await daoSigner.lastProposal();
        let tx = await dao.finishProposal(lastProposal);
        await tx.wait();

        console.log("lastProposal: " + lastProposal);
        console.log("Done");
    });

