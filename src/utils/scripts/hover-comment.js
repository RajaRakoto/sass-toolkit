/**
 * This script is used to remove the first line of a SCSS file if it starts with a comment.
 */

const fs = require("node:fs");
const path = require("node:path");

// source directory
const directoryPath = "../../../modules/hover2/effects";

function removeFirstLine(filePath) {
	const data = fs.readFileSync(filePath, "utf8");
	const lines = data.split(/\r?\n/);

	// verify if the first line starts with /*
	if (lines[0].trim().startsWith("/*")) {
		lines.shift();
		fs.writeFileSync(filePath, lines.join("\n"));
		console.log(`${filePath} comment cleared ... [done]`);
	} else {
		console.log(`${filePath} skipping ...`);
	}
}

function processSCSSFiles(directory) {
	const entries = fs.readdirSync(directory);
	for (const file of entries) {
		const filePath = path.join(directory, file);
		const fileStat = fs.statSync(filePath);

		// recursively process subdirectories
		if (fileStat.isDirectory()) {
			processSCSSFiles(filePath);
		} else if (file.endsWith(".scss")) {
			removeFirstLine(filePath);
		}
	}
}

processSCSSFiles(directoryPath);
