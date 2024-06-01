const { getNamedAccounts, ethers } = require("hardhat")

async function getWeth() {
    const { deployer } = await getNamedAccounts()
    const iWeth = await ethers.getContractAt(
        "IWeth",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        deployer,
    )
    const tx = await iWeth.deposit({ value: ethers.utils.parseEther("0.1") })
    await tx.wait()
    const wethBalance = await iWeth.balanceOf(deployer)
    console.log(`WETH balance: ${wethBalance.toString()}`)
}

module.exports = { getWeth }
