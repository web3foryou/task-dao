import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {Contracts} from "../../app/config/contracts"

task("daoDeposit", "daoDeposit")
    .setAction(async (taskArgs, hre) => {
        const [signer] = await hre.ethers.getSigners();

        let contracts = new Contracts(hre.hardhatArguments.network as string);

        const ContractArtifactErc20 = require('../../artifacts/contracts/ERC20Token.sol/ERC20Token.json');
        let erc20 = new hre.ethers.Contract(contracts.ERC20, ContractArtifactErc20.abi, signer);
        let erc20Signer = erc20.connect(signer);

        const ContractArtifactDao = require('../../artifacts/contracts/Dao.sol/Dao.json');
        let dao = new hre.ethers.Contract(contracts.DAO, ContractArtifactDao.abi, signer);
        let daoSigner = dao.connect(signer);

        const deposit = hre.ethers.utils.parseEther("11.0");
        let tx = await erc20Signer.approve(dao.address, deposit);
        await tx.wait();
        let tx2 = await daoSigner.deposit(deposit);
        await tx2.wait();

        console.log("Done");
    });

