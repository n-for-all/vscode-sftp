import { COMMAND_PAUSE } from "../constants";
import app from "../app";
import { checkCommand } from "./abstract/createCommand";

export default checkCommand({
	id: COMMAND_PAUSE,

	async handleCommand() {
		app.state.setPaused(!app.state.isPaused());
	},
});
