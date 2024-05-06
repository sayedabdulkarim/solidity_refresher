const path = require("path");
const fs = require("fs-extra");
const solc = require("solc");

// Define the path to the Solidity contract
const inboxPath = path.resolve(__dirname, "contracts", "inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

// Compile the contract
try {
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  console.log(output);
} catch (error) {
  console.error(error);
}

// // Import necessary Node.js modules
// const path = require("path");
// const fs = require("fs-extra");
// const solc = require("solc");

// // Define the path to the Solidity contract
// const inboxPath = path.resolve(__dirname, "contracts", "inbox.sol");

// // Read the source code from the contract file
// const source = fs.readFileSync(inboxPath, "utf8");

// console.log(solc.compile(source, 1), " cccccccccccccc");
