const vscode = require('vscode');
const testEnv = require('./env');


function activate(context) {
	context.subscriptions.push(vscode.commands.registerCommand('extension.bug', function () {
		try {
			const gen = testEnv.createGenerator();
			vscode.window.showInformationMessage(gen._globalConfig.name);
		} catch (error) {
			vscode.window.showErrorMessage(error.stack);
		}
	}));
}
exports.activate = activate;

function deactivate() {
}

exports.deactivate = deactivate;