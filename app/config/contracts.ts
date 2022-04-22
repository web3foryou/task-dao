export class Contracts {
    DAO: string;
    ERC20: string;

    constructor(network: string) {
        this.DAO = process.env.CONTRACT_DAO as string;
        this.ERC20 = process.env.CONTRACT_ERC20 as string;

        if (network == "rinkeby") {
            this.DAO = process.env.CONTRACT_DAO_RINKEBY as string;
            this.ERC20 = process.env.CONTRACT_ERC20_RINKEBY as string;
        }
    }
}