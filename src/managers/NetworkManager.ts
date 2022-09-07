import { getStorage, setStorage } from "../lib/local-storage";

/**
 * It is recommended to use getInstance() to manage only one instance.
 */
class NetWorkManager {
	static instance: NetWorkManager;
	static getInstance() {
		if (!this.instance) {
			this.instance = new NetWorkManager();
		}
		return this.instance;
	}
}