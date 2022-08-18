import Web3 from "web3";
import { BN } from "ethereumjs-util";
import { abiERC20 } from "../../abis/abiERC20";

export class ERC20Standard {
	public web3: Web3;

	constructor(web3: Web3) {
		this.web3 = web3;
	}

	/***
	 *  Get current account balance or count for a specific asset contract
	 *
	 *  @param selectedAddress: Current account public address
	 *  @param contractAddress: ERC20 contract address
	 */
	async getBalanceOf(selectedAddress: string, contractAddress: string): Promise<BN> {
		const contract = new this.web3.eth.Contract(abiERC20, contractAddress);
		return new Promise<BN>((resolve, reject) => {
			try {
				contract.methods
					.balanceOf(selectedAddress)
					.call()
					.then((result: BN) => {
						resolve(result);
					});
			} catch (error) {
				reject(error);
				return;
			}
		});
	}

	/**
	 * Get symbol by given ERC20 asset.
	 *
	 * @param address - ERC20 asset contract address.
	 * @returns Promise resolving to the 'symbol'.
	 */
	async getTokenSymbol(address: string): Promise<string> {
		const contract = new this.web3.eth.Contract(abiERC20, address);
		return new Promise<string>((resolve, reject) => {
			try {
				contract.methods
					.symbol()
					.call()
					.then((result: string) => {
						resolve(result);
					});
			} catch (error) {
				reject(error);
				return;
			}
		});
	}
}
