/**
 * @file 页面html配置
 * @author:leinov
 * @date: 2018-10-09
 * @update: 2018-11-05
 * @use: 动态配置html页面，获取src下每个文件下的pageinfo.json内容,解析到HtmlWebpackPlugin中
 */

const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
const getPath = require("./get-path");
const templateDir = './src/templates';
let htmlArr = [];
function createHtml(page_path){
	getPath(page_path).map((item)=>{
		let infoJson ={},infoData={};
		const fileNameWithoutExtension = item.file.replace(/\.[^/.]+$/, "");
		try{
			// 读取pageinfo.json文件内容，如果在页面目录下没有找到pageinfo.json 捕获异常
			infoJson = fs.readFileSync(`${page_path}/${item.dir}/pageinfo.json`,"utf-8");//
			infoData = JSON.parse(infoJson);
		}catch(err){
			infoData = {};
		}
		
		let filename = infoData.filename ? `${item.dir}/${fileNameWithoutExtension}.html` : `${item.dir}/index.html`;
		let template = infoData.template ? `./src/pages/${item.dir}/${fileNameWithoutExtension}.html` : `${templateDir}/template.html`;
		
		htmlArr.push(new HtmlWebpackPlugin({
			title:infoData.title ? infoData.title : "webpack,react多页面架构",
			meta:{
				keywords: infoData.keywords ? infoData.keywords : "webpack，react，github",
				description:infoData.description ? infoData.description : "这是一个webpack，react多页面架构"
			},
			chunks:[`${item.dir}/${fileNameWithoutExtension}`], //引入的js
			template: template,
			filename : item.dir == "index" ? "index.html" : filename,
			minify:{//压缩html
				collapseWhitespace: true,
				preserveLineBreaks: true
			},
		}));
	});
	return htmlArr;
}


module.exports = createHtml;
