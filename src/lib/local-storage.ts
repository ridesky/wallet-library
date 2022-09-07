/**
 * Extensions for LocalStorage
 */

import { IInitStorage } from "../types/common";

const isSupportedLocalStorage = typeof globalThis !== "undefined" && globalThis.localStorage ? true : false;

/** Root keyName of localStorage */
const STORAGE_KEY_NAME = "WalletLibrary";
const storage = localStorage.getItem(STORAGE_KEY_NAME) || "{}";

/***
 * The value of "STORAGE_KEY_NAME" in localStorage
 * Recommend to store this return value in state of "vuex/redux",
 * when the value changes, update the state of the vuex/redux in real time.
 * @author Tianqi Zou
 */
export function getStorage(): IInitStorage {
	return JSON.parse(storage);
}

function setStorage(storage: IInitStorage) {
	localStorage.setItem(STORAGE_KEY_NAME, JSON.stringify(storage));
}
