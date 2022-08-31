import { Account, Wallet } from "themis-ts-sdk";
import { getStorage, setStorage } from "../lib/local-storage";

/**
 * Extensions for Wallet in themis-ts-sdk.
 * It is recommended to use getInstance() to manage only one instance.
 */
export default class WalletManager extends Wallet {
	static instance: WalletManager;
	static getInstance() {
		if (!this.instance) {
			this.instance = new WalletManager();
		}
		return this.instance;
	}

	storageName = "WalletStorage";

	constructor() {
		super();
	}

	get storage() {
		return getStorage(this.storageName) || "";
	}
	set storage(keyValue: string) {
		setStorage(this.storageName, keyValue);
	}

	static createAccount(password: string, label?: string): Account {
		return Account.newAccount(password, label);
	}
}
