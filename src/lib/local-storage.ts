/**
 * Extensions for LocalStorage
 */
type Consturctor = { new (...args: any[]): any };
const isSupported = typeof globalThis !== "undefined" && globalThis.localStorage ? true : false;

export function getStorage(keyName: string): string | null {
	if (!isSupported) {
		undefined;
	}
	return localStorage.getItem(keyName);
}

export function setStorage(keyName: string, keyValue: string) {
	if (!isSupported) {
		undefined;
	}
	localStorage.setItem(keyName, keyValue);
}

/**
 * decorator to be continued
 * @param keyName
 * @returns
 */
export function dStorage(keyName: string) {
	if (!isSupported) {
		undefined;
	}
	return function <T extends Consturctor>(constructor: T) {
		return class extends constructor {
			getStorage() {
				return localStorage.getItem(keyName);
			}
			setStorage(keyValue: string) {
				localStorage.setItem(keyName, keyValue);
			}
		};
	};
}
