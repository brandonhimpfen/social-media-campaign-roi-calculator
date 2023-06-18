const calculateROI = require('./index');

// Test case 1
const kpis1 = {
  revenue: 5000,
  expenses: 3000,
};
const campaignCost1 = 2000;
const roi1 = calculateROI(kpis1, campaignCost1);
console.log('ROI for test case 1:', roi1); // Expected output: 1

// Test case 2
const kpis2 = {
  revenue: 10000,
  expenses: 5000,
};
const campaignCost2 = 3000;
const roi2 = calculateROI(kpis2, campaignCost2);
console.log('ROI for test case 2:', roi2); // Expected output: 1.67
