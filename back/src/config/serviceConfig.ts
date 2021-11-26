
const fs = require('fs');

let rawdata = fs.readFileSync('./services.json');
let services = JSON.parse(rawdata);

export default () => ({
	services: services,
})