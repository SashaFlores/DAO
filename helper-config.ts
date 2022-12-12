import { network } from "hardhat";

export const moveBlocks =async (block:number) => {
    for(let i = 0; i < block; i++) {
        await network.provider.request({
            method: "evm_mine",
            params: [],
        })
    }

    console.log("Moved forward ${block} blocks");
    
};

export const moveTime =async (seconds:number) => {
    await network.provider.send("evm_increaseTime", [seconds]);
    console.log("Moved forward ${seconds} seconds");
    
}
