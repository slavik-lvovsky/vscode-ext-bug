const Environment = require('yeoman-environment');

function createGenerator() {
	const keys = Object.keys(require.cache);
	keys.forEach(key => {
		if (key.includes("generator-code")) {
			delete require.cache[key];
		}
	});

	const env = Environment.createEnv();
	env.lookup();
	return env.create("code:app");
}

module.exports = {
	createGenerator
}