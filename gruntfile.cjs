/**
 * @description: gruntfile for plum
 * @requires: grunt | grunt-contrib-sass | grunt-contrib-watch | grunt-contrib-compress | grunt-shell | load-grunt-tasks | sassdoc
 */
module.exports = (grunt) => {
	require("load-grunt-tasks")(grunt);

	// backups destination
	const backupsDestination = "./backups/";

	// node-glob syntax
	const includeAllFiles = ["**/*", ".*/**/*", "**/.*", "**/.*/**/*"];

	// all grunt plugins config
	grunt.initConfig({
		pkg: grunt.file.readJSON("./package.json"),

		// compile sass to css
		sass: {
			test: {
				options: {
					style: "expanded", // output style: compact, expanded, compressed
				},
				files: [
					// scss file list
					{
						src: ["./tests/plum/style.scss"],
						dest: "./tests/plum/style.css",
					},
				],
			},
		},

		// run shell commands
		shell: {
			documentation: {
				command: ["sassdoc .", "cd sassdoc", "xdg-open index.html"].join("&&"),
			},
		},

		// compress files and folders (incremental backup)
		compress: {
			main: {
				options: {
					archive: `${backupsDestination}main.tar.gz`,
				},
				files: [{ src: ["./*", "./.*"] }],
				filter: "isFile",
			},
			github: {
				options: {
					archive: `${backupsDestination}github.tar.gz`,
				},
				expand: true,
				cwd: "./.github/",
				src: includeAllFiles,
				dest: "github",
			},
			docs: {
				options: {
					archive: `${backupsDestination}docs.tar.gz`,
				},
				expand: true,
				cwd: "./docs/",
				src: includeAllFiles,
				dest: "docs",
			},
			modules: {
				options: {
					archive: `${backupsDestination}modules.tar.gz`,
				},
				expand: true,
				cwd: "./modules/",
				src: includeAllFiles,
				dest: "modules",
			},
			src: {
				options: {
					archive: `${backupsDestination}src.tar.gz`,
				},
				expand: true,
				cwd: "./src/",
				src: includeAllFiles,
				dest: "src",
			},
			tests: {
				options: {
					archive: `${backupsDestination}tests.tar.gz`,
				},
				expand: true,
				cwd: "./tests/",
				src: includeAllFiles,
				dest: "tests",
			},
			tmp: {
				options: {
					archive: `${backupsDestination}tmp.tar.gz`,
				},
				expand: true,
				cwd: "./tmp/",
				src: includeAllFiles,
				dest: "tmp",
			},
		},

		// run predefined tasks whenever watched file patterns are added, changed or deleted
		watch: {
			sass: {
				files: ["./test/*.scss"], // src listening
				tasks: ["sass-task"], // default task to execute
				options: { spawn: false }, // watch optimization
			},
		},
	});

	// all grunt register tasks
	grunt.registerTask("backup", [
		"compress:main",
		"compress:github",
		"compress:docs",
		"compress:modules",
		"compress:src",
		"compress:tests",
		"compress:tmp",
	]);
	grunt.registerTask("sass-task", ["sass:test"]);
	grunt.registerTask("test", ["watch:sass"]);
	grunt.registerTask("documentation", ["shell:documentation"]);

	// all tasks lists
	const plumTaskNames = ["backup", "test", "documentation"];
	const plumTaskStatus = [
		"compress: main | github | docs | modules | src | tests | tmp",
		"watching sass files changes in test folder",
		"generate & open plum documentation with sassdoc",
	];

	// default tasks
	grunt.registerTask("default", () => {
		console.log(
			"\nHere are the lists of plugins (tasks) you can run with grunt:".green,
		);

		/**
		 *
		 * @param {string} taskTitle - task title (Eg: basics tasks)
		 * @param {array} taskNames - task names (Eg: basicsTaskNames)
		 * @param {array} taskStatus - task status (Eg: basicsTaskStatus)
		 * @param {string} taskTheme - colors of theme (Eg: black ,red ,green ,yellow ,blue ,magenta ,cyan ,white ,gray ,grey)
		 */
		function getTaskResume(taskTitle, taskNames, taskStatus, taskTheme) {
			switch (taskTheme) {
				case "cyan":
					console.log(`\n${taskTitle}`.cyan.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.cyan} -> ${taskStatus[index]}`);
					});
					break;
				case "magenta":
					console.log(`\n${taskTitle}`.magenta.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.magenta} -> ${taskStatus[index]}`);
					});
					break;
				case "yellow":
					console.log(`\n${taskTitle}`.yellow.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.yellow} -> ${taskStatus[index]}`);
					});
					break;
				case "blue":
					console.log(`\n${taskTitle}`.blue.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.blue} -> ${taskStatus[index]}`);
					});
					break;

				default:
					null;
					break;
			}
		}

		// task resume
		getTaskResume("== PLUM TASKS ==", plumTaskNames, plumTaskStatus, "magenta");
	});
};
