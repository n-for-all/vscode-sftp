import { COMMAND_DISABLE } from "../constants";
import app from "../app";
import { checkCommand } from "./abstract/createCommand";

export default checkCommand({
	id: COMMAND_DISABLE,

	async handleCommand() {
		app.state.setDisabled(!app.state.isDisabled());
	},
});
