
const fetch = require("node-fetch");

const TrasnlateRequest = async (text,tt,to) => {
    const request = await fetch(`https://api.priv8area.com/translate/?text=${text}&tt=${tt}&to=${to}`);
    const response = await request.text();
    return response
}

export default TrasnlateRequest;