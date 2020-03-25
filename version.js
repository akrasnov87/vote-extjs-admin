/**
 * Код предназначен для указания версии сборки.
 * Данные изменяются в файле app.json
 * Пример вызова: node version 1.20.0
 */
var fs = require('fs');
var join = require('path').join;

var args = process.argv.slice(2);

var version = (args[0] || '0.0.0') + '.' + Math.floor(Math.abs(new Date().getTime() - new Date(2019, 4, 22, 0, 0, 0).getTime()) / (1000 * 3600));

var filePath = join(__dirname, 'app.json');

fs.writeFileSync(filePath, fs.readFileSync(filePath).toString().replace(/\"version\"\s*:\s*\"[\d\.]*\",/, '\"version\": "' + version + '",'));

console.log('Установлена версия: ' + version);