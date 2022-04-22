import {task} from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import {Contracts} from "../../app/config/contracts";

task("daoVerify", "daoVerify")
    .setAction(async (taskArgs, hre) => {
        let contracts = new Contracts(hre.hardhatArguments.network as string);
        const minQuorum = hre.ethers.utils.parseEther("10.0");
        const minPeriod = 3 * 24 * 60 * 60;

        await hre.run("verify:verify", {
            address: contracts.DAO,
            constructorArguments: [
                contracts.USER, contracts.ERC20, minQuorum, minPeriod
            ],
        });
    });

