const express = require('express');
const router = express.Router();
const categories = require('../utils/renderCategories')
const months = require('../utils/renderMonths')
const insights = require('../utils/fetchInsights')


router.get('/categories', async (req, res, next) => {
  const response = await insights.fetchInsights()
  try {
    const categories = require('../utils/renderCategories')
    res.status(200).json(categories.renderCategories(response.data));
    res.status(501).json({ message: 'Not Implemented' });
  } catch (err) {
    return next(err);
  }
});

router.get('/cashflow', async (req, res, next) => {
  const response = await insights.fetchInsights()
  try {
    const months = require('../utils/renderMonths')
    res.status(200).json(months.renderMonths(response.data));
    res.status(501).json({ message: 'Not Implemented' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;