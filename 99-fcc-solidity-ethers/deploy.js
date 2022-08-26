const ethers = require("ethers");
const fs = require("fs-extra");

const main = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "a52c6c71524e5109e180dbb4fe0a067b9cdae4fbca100b43a5a2fe7e7f59d78a",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying...");
  const contract = await contractFactory.deploy();
  console.log(contract);
};

main()
  .then(() => process.exit(0))
  .catch(() => {
    console.log(error);
    process.exit(1);
  });
