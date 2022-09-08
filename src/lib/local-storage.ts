/**
 * Extensions for LocalStorage
 */

import { IInitStorage } from "../types/common";

const isSupportedLocalStorage = typeof globalThis !== "undefined" && globalThis.localStorage ? true : false;

/** The root keyName of localStorage */
const ROOT_KEYNAME_OF_STORAGE = "WalletLibrary";

/***
 * The value of "ROOT_KEYNAME_OF_STORAGE" in localStorage
 * It is recommended to put the return value in state of vuex/redux and get it at any time for better performance.
 * And when the value(in localStorage) changes, update the state of the vuex/redux in real time.
 * @author Tianqi Zou
 */
export function getRootStorage(): IInitStorage {
	const storageString: string = localStorage.getItem(ROOT_KEYNAME_OF_STORAGE) || "{}";
	const storage: IInitStorage = JSON.parse(storageString) as IInitStorage;
	return storage;
}

export function getStorageByName(storageName: keyof IInitStorage): IInitStorage[keyof IInitStorage] {
	const storage = getRootStorage();
	return storage[storageName];
}

function setStorage(storage: IInitStorage) {
	localStorage.setItem(ROOT_KEYNAME_OF_STORAGE, JSON.stringify(storage));
}
