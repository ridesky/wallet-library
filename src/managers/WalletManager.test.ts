import WalletManager from "./WalletManager";

test("test WalletManager", async () => {
	const walletManager = WalletManager.getInstance();
	walletManager.storage = "testStorage";
	console.log(walletManager.storage);
});
