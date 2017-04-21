let fs = require('fs'),
    PDFParser = require("pdf2json");
// 只转换pdf文件中的文字内容
let pdfParser = new PDFParser(this,1);
// 转换失败打印错误信息
pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
//转换成功直接将转换成功的文档写入文档，具体类型，请参考官网
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./info.txt", pdfParser.getRawTextContent());
});
// 输入的文件名称和地址，请使用上下文环境
pdfParser.loadPDF("./info.pdf");