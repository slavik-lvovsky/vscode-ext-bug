const testEnv = require("./env");

try {
	const gen = testEnv.createGenerator();
	console.log(gen._globalConfig.name);
} catch (error) {
	console.error(error.stack);
}