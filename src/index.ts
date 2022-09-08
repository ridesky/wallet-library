import { WalletManager, IWalletStorage } from "./managers/WalletManager";
import { getStorageByName } from "./lib/local-storage";
import { IInitStorage } from "./types/common";
/**
 *
 */
export class SeekWalletLibrary {
	static instance: SeekWalletLibrary;
	static getInstance() {
		if (!this.instance) {
			this.instance = new SeekWalletLibrary();
		}
		return this.instance;
	}

	static walletManager: WalletManager;
}

function setupManager(initStorage: IInitStorage) {
	const walletStorage = getStorageByName(WalletManager.storageName) as IWalletStorage;
	SeekWalletLibrary.walletManager = WalletManager.getInstance(walletStorage);
}
