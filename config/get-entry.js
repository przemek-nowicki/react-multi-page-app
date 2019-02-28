/* eslint-env node */
/**
 * @project: 获取entry文件入口
 * @author: leinov
 * @date: 2018-10-11
 * @update: 2018-11-04 优化入口方法 调用getPath
 */
const getPath = require("./get-path");
/**
 * 【获取entry文件入口】
 *
 * @param {String} path 引入根路径
 * @returns {Object} 返回的entry { "about/aoubt":"./src/about/about.js",...}
 */
module.exports = function getEnty(path){
	let entry = {};
	getPath(path).map((item)=>{
		const fileNameWithoutExtension = item.file.replace(/\.[^/.]+$/, "");
		entry[`${item.dir}/${fileNameWithoutExtension}`] = `${path}/${item.dir}/${item.file}`;
	});
	return entry;
};
