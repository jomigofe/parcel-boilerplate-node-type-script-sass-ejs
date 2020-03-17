const Bundler = require('parcel-bundler');
const Path = require('path');
const beeper = require('beeper');

// Single entrypoint file location:
const entryFiles = Path.join(__dirname, './src/public/js/**/*');
const entryFiles2 = Path.join(__dirname, './src/index.ts');
// OR: Multiple files with globbing (can also be .js)
// const entryFiles = './src/*.js';
// OR: Multiple files in an array
// const entryFiles = ['./src/index.html', './some/other/directory/scripts.js'];

// Bundler options
const options = {
	outDir: './dist/public/js', // The out directory to put the build files in, defaults to dist
	outFile: 'main.js', // The name of the outputFile
	//publicUrl: '/', // The url to serve on, defaults to '/'
	watch: false, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
	cache: false, // Enabled or disables caching, defaults to true
	cacheDir: '.cache', // The directory cache gets put in, defaults to .cache
	contentHash: false, // Disable content hash from being included on the filename
	global: 'moduleName', // Expose modules as UMD under this name, disabled by default
	minify: false, // Minify files, enabled if process.env.NODE_ENV === 'production'
	scopeHoist: false, // Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
	target: 'node', // Browser/node/electron, defaults to browser
	bundleNodeModules: true, // By default, package.json dependencies are not included when using 'node' or 'electron' with 'target' option above. Set to true to adds them to the bundle, false by default
	//https: { // Define a custom {key, cert} pair, use true to generate one or false to use http
	//	cert: './ssl/c.crt', // Path to custom certificate
	//	key: './ssl/k.key' // Path to custom key
	//},
	logLevel: 3, // 5 = save everything to a file, 4 = like 3, but with timestamps and additionally log http requests to dev server, 3 = log info, warnings & errors, 2 = log warnings & errors, 1 = log errors, 0 = log nothing
	hmr: true, // Enable or disable HMR while watching
	hmrPort: 0, // The port the HMR socket runs on, defaults to a random free port (0 in node.js resolves to a random free port)
	sourceMaps: false, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
	hmrHostname: '', // A hostname for hot module reload, default to ''
	detailedReport: false, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
	autoInstall: true, // Enable or disable auto install of missing dependencies found during bundling
};

// OR: Multiple files with globbing (can also be .js)
// const entryFiles2 = './src/*.js';
// OR: Multiple files in an array
// const entryFiles2 = ['./src/index.html', './some/other/directory/scripts.js'];

// Bundler options
const options2 = {
	outDir: './dist', // The out directory to put the build files in, defaults to dist
	outFile: 'index.js', // The name of the outputFile
	//publicUrl: '/', // The url to serve on, defaults to '/'
	watch: false, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
	cache: false, // Enabled or disables caching, defaults to true
	cacheDir: '.cache', // The directory cache gets put in, defaults to .cache
	contentHash: false, // Disable content hash from being included on the filename
	global: 'moduleName', // Expose modules as UMD under this name, disabled by default
	minify: false, // Minify files, enabled if process.env.NODE_ENV === 'production'
	scopeHoist: false, // Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
	target: 'node', // Browser/node/electron, defaults to browser
	bundleNodeModules: true, // By default, package.json dependencies are not included when using 'node' or 'electron' with 'target' option above. Set to true to adds them to the bundle, false by default
	//https: { // Define a custom {key, cert} pair, use true to generate one or false to use http
	//	cert: './ssl/c.crt', // Path to custom certificate
	//	key: './ssl/k.key' // Path to custom key
	//},
	logLevel: 3, // 5 = save everything to a file, 4 = like 3, but with timestamps and additionally log http requests to dev server, 3 = log info, warnings & errors, 2 = log warnings & errors, 1 = log errors, 0 = log nothing
	hmr: true, // Enable or disable HMR while watching
	hmrPort: 0, // The port the HMR socket runs on, defaults to a random free port (0 in node.js resolves to a random free port)
	sourceMaps: false, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
	hmrHostname: '', // A hostname for hot module reload, default to ''
	detailedReport: false, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
	autoInstall: true, // Enable or disable auto install of missing dependencies found during bundling
};

(async function() {
	// Initializes a bundler using the entrypoint location and options provided
	const bundler2 = new Bundler(entryFiles2, options2);

	bundler2.on('buildEnd', () => {
		beeper();
			// Initializes a bundler using the entrypoint location and options provided
			const bundler = new Bundler(entryFiles, options);

			bundler.on('buildEnd', () => {
				beeper();
				return process.exit();
			});
			// Run the bundler, this returns the main bundle
			// Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
			const bundle = bundler.bundle();
	});
	// Run the bundler, this returns the main bundle
	// Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
	const bundle2 = await bundler2.bundle();
})();