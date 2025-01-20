# 0G Example Node.js Scripts

This project provides example scripts to interact with 0G (Zero Gravity) services using the TypeScript SDK. 0G is the first decentralized AI operating system, providing infrastructure to scale both Web3 and AI. 

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm or pnpm
- JavaScript/TypeScript working environment

### Installation

Follow these steps to set up the project:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/hummusonrails/0g-node-scripts.git
    cd 0g-node-scripts
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

    or (if you use pnpm):

    ```sh
    pnpm install
    ```

3. **Set up environment variables:**

    Copy the `.env.sample` file to `.env` and provide the necessary values:

    ```sh
    cp .env.sample .env
    ```

    You can find the RPC and Indexer URLs in the [0G Documentation](https://docs.0g.ai/run-a-node/testnet-information).

    Your private key is required to sign transactions for the services. You can find it in your wallet. Make sure to keep it secure and never share it with anyone.

### Example Scripts

#### Storage Service

This script shows how to begin interacting with the Storage Service. It demonstrates how to upload a file to the Storage Service and retrieve it using the file's root hash.

To run this file, make sure you have set your environment variables and that you have obtained testnet tokens from [the faucet](https://faucet.0g.ai/) first.

Then, you can run the script using the following command:

```sh
node hello-decentralized-storage.js
```

It will upload the `sample.txt` file to the Storage Service and retrieve it using the root hash. The downloaded file will be called `downloaded-hello-world.txt`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.