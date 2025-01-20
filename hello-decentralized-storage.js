const { ZgFile, Indexer } = require('@0glabs/0g-ts-sdk');
const { ethers } = require('ethers');
const dotenv = require('dotenv');

dotenv.config();

async function main() {
  const evmRpc = process.env.RPC_URL;
  const privateKey = process.env.PRIVATE_KEY;
  const indRpc = process.env.INDEXER_RPC_URL;
  const provider = new ethers.JsonRpcProvider(evmRpc);
  const signer = new ethers.Wallet(privateKey, provider);
  const indexer = new Indexer(indRpc.toString());

  try {
    // Step 1: Upload File
    console.log("Creating file object...");
    const file = await ZgFile.fromFilePath('sample.txt');
    const [tree, treeErr] = await file.merkleTree();
    if (treeErr) throw treeErr;

    console.log("File Root Hash:", tree.rootHash());

    console.log("Uploading file...");
    const [tx, uploadErr] = await indexer.upload(file, evmRpc, signer);
    if (uploadErr) throw uploadErr;

    console.log("File uploaded successfully, transaction hash:", tx);
    const rootHash = tree.rootHash();

    // Step 2: Download File
    console.log("Downloading file...");
    const downloadErr = await indexer.download(rootHash, 'downloaded-hello-world.txt', false);
    if (downloadErr) throw downloadErr;

    // Step 3: Clean up
    await file.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
