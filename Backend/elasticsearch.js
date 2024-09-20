const { Client } = require("@elastic/elasticsearch");

const client = new Client({
    node: process.env.ELASTIC_URI,
    auth: {
        username: "elastic",
        password: process.env.ELASTIC_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
});



module.exports = {
    client
};
