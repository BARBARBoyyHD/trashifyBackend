const NewsAPI = require("newsapi");
const api = new NewsAPI("4d0a245d29a64e82934f94413047ae36");

exports.getWaste = (req, res) => {
  api.v2
    .everything({
      q: "Sampah", 
      language: "id", 
      sortBy: "relevancy", 
    })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
