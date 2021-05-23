module.exports = {
	apps: [
		{
			name: 'YelmApp',
			exec_mode: 'cluster',
			instances: 'max',
			script: './node_modules/nuxt/bin/nuxt.js',
			args: 'start'
		}
	]
}
