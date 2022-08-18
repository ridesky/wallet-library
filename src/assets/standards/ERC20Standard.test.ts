import Web3 from "web3";
import { ERC20Standard } from "./ERC20Standard";

// const ROPSTEN_RPC = "https://ropsten.infura.io/v3/dfc4652fd9004f6a97560d905b3962fd";
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

describe("ERC20Standard", () => {
	let erc20Standard: ERC20Standard;
	let web3: Web3;
	const NET_SELECT = "GOERLI";
	beforeAll(() => {
		const web3Provider = new Web3.providers.HttpProvider(NETWORK_RPC[NET_SELECT]);
		web3 = new Web3(web3Provider);
		erc20Standard = new ERC20Standard(web3);
	});

	test("Eth balance", async () => {
		const result = await erc20Standard.web3.eth.getBalance(TEST_PUBLIC_ADDR);
		console.log("Eth value");
		console.log(result);
	});

	test("Eth balance by contract", async () => {
		const result = await erc20Standard.getBalanceOf(TEST_PUBLIC_ADDR, ERC20_TOKEN_ADDRESS[NET_SELECT].MATIC);
		console.log("Matic value");
		console.log(result);
	});

	test("Get symbol by contract", async () => {
		const result = await erc20Standard.getTokenSymbol(ERC20_TOKEN_ADDRESS[NET_SELECT].MATIC);
		console.log("Symbol is");
		console.log(result);
	});
});
