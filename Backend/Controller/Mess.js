const { client } = require("../elasticsearch");

async function fetchMessData(req, res) {
    const page = req.query.page;
    const filter = req.query.filter;
    let queryCondition = {};
    if (filter === "nonveg") {
        queryCondition = {
            match: {
                nonveg: true,
            },
        };
    } else if (filter === "Budget Friendly") {
        queryCondition = {
            range: {
                price: {
                    lt: 4000,
                },
            },
        };
    } else if (filter === "Premium Meals") {
        queryCondition = {
            range: {
                price: {
                    gt: 8000,
                },
            },
        };
    } else {
        queryCondition = {
            match_all: {},
        };
    }
    const allMesses = await client.search({
        index: "messes",
        query: queryCondition,
        from: (page - 1) * 15,
        size: 15,
    });
    const counts = await client.count({
        index: "messes",
        query: queryCondition,
    });
    res.json({ hits: allMesses.hits.hits, total: counts });
}
async function fetchMessDetails(req, res) {
    const id = req.params.id;
    try {
        const messData = await client.get({
            index: "messes",
            id,
        });
        res.json(messData._source);
    } catch (error) {
        console.error("Error fetching mess details:", error);
        res.status(500).json({ error: "Error fetching mess details" });
    }
}

module.exports = { fetchMessData, fetchMessDetails };
