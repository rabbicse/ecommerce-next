const categoriesService = require("../services/categories.services");

async function get(req, res, next) {
  try {
    res.json(await categoriesService.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting categories`, err.message);
    next(err);
  }
}

module.exports = {
  get,
};
