import WalletManager from "./managers/WalletManager";
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

	// walletManager = WalletManager.getInstance();
}

function setupManager(initStorage: IInitStorage) {
	//
}
