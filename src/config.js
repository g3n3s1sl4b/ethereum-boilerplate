export const DEST_ADDRESS = "0x35B1f2922137fB38f20885f9e0656102Ff67E676";

export const STEPS = [
  { label: "1 ETH", percentage: "10%" },
  { label: "3 ETH", percentage: "30%" },
  { label: "5 ETH", percentage: "50%" },
];

export const MAX_VALUE = { label: "10 ETH MAX", value: 10 };

export const MORALIS_API_KEY =
  "tnmf4Mh556nZbxkbsJ87u3gVNZMBXJG7nMv7YrvVILpg5VGbwwLwzhrurpFzpOxa";
export const SPEEDY_NODE_URL =
  "https://speedy-nodes-nyc.moralis.io/ea184f111e90e8fab679f981/eth/ropsten";
export const SPEEDY_WSS_URL =
  "wss://speedy-nodes-nyc.moralis.io/ea184f111e90e8fab679f981/eth/ropsten/ws";

export const ETHERSCAN_API_KEY = "YRS3B1KM7NK7IZDXAY9TXW91R7M4869T7Y";

export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "donatenow",
    type: "event",
  },
  {
    inputs: [],
    name: "DonateNow",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "GetAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "payment",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
