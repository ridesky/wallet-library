import { SafeAny } from "../types/common";
export interface BaseStorage {
	[key: string]: SafeAny;
}

export class BaseManager<S extends BaseStorage> {
	protected _storage: S;
	defaultStorage: S = {} as S;

	constructor(storage?: S) {
		this._storage = storage as S;
	}
}
