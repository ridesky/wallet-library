import { IWalletStorage } from "../managers/WalletManager";

export type SafeAny<T = object> =
	| {
			[k in keyof T]?: SafeAny<T[k]>;
	  }
	| boolean
	| number
	| string
	| symbol
	| null
	| undefined;

/** Initialize the wallet Build the data format for each instance storage */
// TODO Handling the case when the parameter is empty
export interface IInitStorage {
	WalletStorage: IWalletStorage;
	NetworkStorage: string;
}
