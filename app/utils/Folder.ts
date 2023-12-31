import fs from "fs";
import path from "path";

export function dirCR(folderPath: string) {
	fs.mkdirSync(folderPath, { recursive: true });
}

export function dirEX(folderPath: string) {
	if (fs.existsSync(folderPath)) {
		return true;
	} else {
		return false;
	}
}

export function dirSC(folderPath: string) {
	const scannedFiles: Array<any> = [];

	function scanDir(directory: string) {
		const files = fs.readdirSync(directory);

		files.forEach((file) => {
			const filePath = path.join(directory, file);
			const stat = fs.statSync(filePath);

			const fileInfo: object = {
				name: file,
				path: filePath,
				isDirectory: stat.isDirectory(),
				size: stat.size,
				createdAt: stat.birthtime,
				modifiedAt: stat.mtime,
				accessedAt: stat.atime,
				//   permissions: {
				// 	owner: {
				// 	  read: !!(stat.mode & 0o400),
				// 	  write: !!(stat.mode & 0o200),
				// 	  execute: !!(stat.mode & 0o100),
				// 	},
				// 	group: {
				// 	  read: !!(stat.mode & 0o40),
				// 	  write: !!(stat.mode & 0o20),
				// 	  execute: !!(stat.mode & 0o10),
				// 	},
				// 	others: {
				// 	  read: !!(stat.mode & 0o4),
				// 	  write: !!(stat.mode & 0o2),
				// 	  execute: !!(stat.mode & 0o1),
				// 	},
				//   },
			};

			scannedFiles.push(fileInfo);

			if (stat.isDirectory()) {
				scanDir(filePath);
			}
		});
	}

	scanDir(folderPath);
	return scannedFiles;
}
