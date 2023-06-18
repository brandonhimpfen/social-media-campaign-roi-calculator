const math = require('mathjs');

function calculateROI(kpis, campaignCost) {
  const revenue = kpis.revenue || 0;
  const expenses = kpis.expenses || 0;

  const roi = math.round((revenue - expenses) / campaignCost, 2);

  return roi;
}

module.exports = calculateROI;
