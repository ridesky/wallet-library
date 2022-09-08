import { Account, Wallet, Identity } from "themis-ts-sdk";
import { IInitStorage, SafeAny } from "../types/common";
import { getStorageByName } from "../lib/local-storage";
import { BaseManager } from "./BaseManager";

/**
 * Extensions for Wallet in themis-ts-sdk.
 * It is recommended to use getInstance() to manage only one instance.
 */

/** Reference from @typedef Wallet */
export interface IWalletStorage {
	name: string;
	defaultOntid?: string;
	defaultAccountAddress?: string;
	createTime: string;
	version: string;
	scrypt: {
		n: number;
		r: number;
		p: number;
		dkLen: number;
	};
	indentities: Identity[] | [];
	accounts: Account[] | [];
	extra: SafeAny;
	/** Extend fields for WalletFile */
	[key: string]: SafeAny | SafeAny[];
}

export class WalletManager extends BaseManager<IWalletStorage> {
	static instance: WalletManager;
	static getInstance(storage: IWalletStorage) {
		if (!this.instance) {
			this.instance = new WalletManager(storage);
		}
		return this.instance;
	}

	static storageName: keyof IInitStorage = "WalletStorage";
	public wallet?: Wallet;

	constructor(storage?: IWalletStorage) {
		super(storage);

		this.loadWallet();
	}

	get storage() {
		return getStorageByName(WalletManager.storageName) as IWalletStorage;
	}
	// set storage(keyValue: string) {
	// 	setStorage(this.storageName, keyValue);
	// }

	/** Loads wallet from storage on startup */
	loadWallet() {
		this._storage && (this.wallet = Wallet.fromWalletFile(this._storage));
	}

	initWallet(walletName: string) {
		this.wallet = Wallet.create(walletName);
	}

	static createAccount(password: string, label?: string): Account {
		return Account.newAccount(password, label);
	}
}
