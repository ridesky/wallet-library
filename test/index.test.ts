import Web3 from "web3";

enum NETWORK_RPC {
	ETH_MAIN = "https://mainnet.infura.io/v3/dfc4652fd9004f6a97560d905b3962fd",
	ROPSTEN = "https://ropsten.infura.io/v3/dfc4652fd9004f6a97560d905b3962fd",
	GOERLI = "https://goerli.infura.io/v3/dfc4652fd9004f6a97560d905b3962fd"
}
const ERC20_TOKEN_ADDRESS = {
	ETH_MAIN: {
		MATIC: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
	},
	GOERLI: {
		MATIC: "0x499d11E0b6eAC7c0593d8Fb292DCBbF815Fb29Ae"
	}
};

const TEST_PUBLIC_ADDR = "0x70ED542AF934eB6af705E77F3f4019d54AF351BE";

describe("test web3", () => {
	let web3: Web3;
	const NET_SELECT = "GOERLI";
	beforeAll(() => {
		const web3Provider = new Web3.providers.HttpProvider(NETWORK_RPC[NET_SELECT]);
		web3 = new Web3(web3Provider);
	});

	test("test sign", async () => {
		try {
			const signTx = await web3.eth.sign("Hello world", "0x70ED542AF934eB6af705E77F3f4019d54AF351BE");
			console.log("signTx is");
			console.log(signTx);
		} catch (error) {
			console.error("fail");
			console.error(error);
		}
	});
});
