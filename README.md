# social-media-campaign-roi-calculator

Calculate the return on investment (ROI) of social media campaigns based on key performance indicators (KPIs) and campaign costs.

## Installation

You can install the package via npm:

```
npm install social-media-campaign-roi-calculator
```

## Usage

```
const calculateROI = require('social-media-campaign-roi-calculator');

const kpis = {
  revenue: 5000,
  expenses: 3000,
};
const campaignCost = 2000;

const roi = calculateROI(kpis, campaignCost);
console.log('ROI:', roi);
```
