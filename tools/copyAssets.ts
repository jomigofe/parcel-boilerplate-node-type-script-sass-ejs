import * as shell from "shelljs";

if(process.argv[2] == '--watch') {
	// copy all the view templates
	shell.cp( "-R", "src/views", "dist/" );
} else {
	shell.mkdir("-p","dist/public/modelos3d");
	shell.mkdir("-p","dist/public/css/fonts");
	shell.mkdir("-p","dist/public/js/vendors");
	shell.mkdir("-p","dist/public/webservices");
	// copy all the view templates
	shell.cp( "-R", "src/views", "dist/" );
	// copy all fonts
	shell.cp( "-R", "src/public/scss/fonts", "dist/public/css/" );
	// copy all js vendors
	shell.cp( "-R", "src/public/js/vendors", "dist/public/js/" );
	// copy webservices
	shell.cp( "-R", "src/public/webservices", "dist/public/" );
}