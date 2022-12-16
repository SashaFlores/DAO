# On-Chain DAO Governance

### Tools

1. [Node.js](https://nodejs.org/en/) : v16.18.0
2. [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
3. [Hardhat](https://hardhat.org/)
4. [Open Zeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts)
5. [Slither](https://github.com/crytic/slither) : requires Python > 3.8 & Microsoft Visual C++ > 14.0

### Contracts:

1. `GovernanceToken` : is an ERC20 token that gives you the power to votes on new proposals.

2. `TimeLock`: gives us the time concepts explained below to execute proposals and to handle ownerships.

3. `GovernanceContract` : is the contract in charge of proposals while Time Lock executes the proposal if approved.

4. `Box` : owned by Time Lock contract, where the new proposal will be introduced to the Box contract, voting process will take place, we will queue the proposal to be executed if approved, then finally it will be executed.

### Time Concepts:

1. `votingDelay` : Time interval between submitting a proposal and when voting power is fixed. This can be used to enforce a delay after a proposal is published for users to unstake tokens, or delegate their votes

2. `votingPeriod` : starts after voting delay and when voting is open.

3. `minDelay` : delay period before a passed proposal is executed. When the proposal is queued to give users the opportunity to exit DAO if they disagree.


- Install Repo:

        git clone git@github.com:SashaFlores/DAO.git && cd

- Install dependencies:

        yarn

- Compile Contracts:

        yarn hardhat compile

- Deploy Contracts:

        yarn hardhat deploy

- To propose, queue, and execute a proposal you will run a local node, as testing & running scripts will require us to run the blockchain by one block to get to the time to vote which should be done in local blockchain not testing or main chains: 

        yarn hardhat node

- In another terminal you will run the propose script:

        yarn hardhat run scripts/propose.ts --network localhost

- Vote on proposal:

        yarn hardhat run scripts/vote.ts --network localhost

- Queue & Execute:

       yarn hardhat run scripts/queue-and-execute.ts --network localhost 

- To run the test:

        yarn hardhat test

### Note: 

- all slither reports for security audit is included in slither directory, for graph files you will need to install `xdot` that requires Linux. [To install linux](https://learn.microsoft.com/en-us/windows/wsl/install).


In powerShell with admin mode, run:

    wsl --install

You will need to install Linux distribution [Ubuntu](https://ubuntu.com/tutorials/install-ubuntu-desktop#5-installation-setup) or download from Microsoft Store.

Install `xdot` using Ubuntu:

    sudo apt install xdot

- Worth noting that in gas report, when changing one state variable in `GovernanceToken` contract from uint256 max_supply => uint256 constant max_supply, we saved 41% of gas cost.

### References:

1. Manage Gas and EVM Slots : [EVM: From solidity to byte code](https://www.youtube.com/watch?v=RxL_1AfV7N4&t=3774s)

2. Opcodes and gas consumption : [EVM Opcodes](https://www.evm.codes/?fork=merge)

3. Dynamic Gas Costs : [Wolflo - GitHub](https://github.com/wolflo/evm-opcodes/blob/main/gas.md)


### Special appreciation to [Patrick Collins](https://www.linkedin.com/in/patrickalphac/)


