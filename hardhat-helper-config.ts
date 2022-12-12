// Governor Controller
export const VOTING_DELAY = 1; //1 BLOCK
export const VOTING_PERIOD = 5; // BLOCKS
export const QUORUM_PERCENTAGE = 4 // 4 %

// TimeLock
export const MIN_DELAY = 3600; // timeLock in s
export const EXECUTORS: string[]= [];
export const PROPOSERS: string[] = [];

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

// Propose Script + Queue and Execute Script
export const FUNC = "store";
export const FUNC_ARGS = 100; // New value voted into Target contract.
export const DESCRIPTION = "Proposal #1 - update  value of Target to 100";
export const PROPOSAL_FILE = "proposals.json";

// Voting Script
export const VOTE_REASON = "Cause DAO's score 100 for coolness";

// TimeTravel
export const developmentChains = ["hardhat", "localhost"];