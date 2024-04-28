class AppState {
	private _profile: string | null = null;
	private _observer: (x: any) => void;
	private _paused = false;
	private _disabled = false;

	get profile(): string | null {
		return this._profile;
	}

	set profile(newProfile: string | null) {
		if (this._profile === newProfile) {
			return;
		}

		this._profile = newProfile;
		this._observer(this.getStateSnapshot());
	}

	isPaused(): boolean {
		return this._paused;
	}

	setPaused(paused: boolean) {
		this._paused = paused;
	}

	isDisabled() {
		return this._disabled;
	}

	setDisabled(disabled: boolean) {
		this._disabled = disabled;
	}

	getStateSnapshot() {
		return {
			profile: this._profile,
		};
	}

	subscribe(observer) {
		this._observer = observer;
	}
}

export default AppState;
