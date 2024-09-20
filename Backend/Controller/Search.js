const { client } =  require("../elasticsearch");

async function searchByName(req, res) {
    const searchTerm = req.query.messname;
    const result = await client.search({
        index: "messes",
        body: {
            query: {
                match: {
                    name: searchTerm,
                },
            },
        },
    });
    res.json(result.hits.hits);
}

module.exports = { searchByName };
