const { getWeth } = require("../scripts/getWeth")
const { getNamedAccounts } = require("hardhat")
async function main() {
    await getWeth()
    const { deployer } = await getNamedAccounts()
    async function getLendingPool(account) {
        const lendingPoolAddressProvider = await ethers.getContractAt(
            "ILendingPool",
            "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
            account,
        )
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
