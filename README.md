# social-media-campaign-roi-calculator

[![Support Open Work](https://img.shields.io/badge/Support-Open%20Work-0A0A0A?style=flat&logo=github)](https://github.com/brandonhimpfen/support) 
[![GitHub Sponsor](https://srv-cdn.himpfen.io/badges/github/github-flat.svg)](https://github.com/sponsors/brandonhimpfen) 
[![Buy Me a Coffee](https://srv-cdn.himpfen.io/badges/buymeacoffee/buymeacoffee-flat.svg)](https://buymeacoffee.com/brandonhimpfen) 
[![Ko-Fi](https://srv-cdn.himpfen.io/badges/kofi/kofi-flat.svg)](https://ko-fi.com/brandonhimpfen) 
[![PayPal](https://srv-cdn.himpfen.io/badges/paypal/paypal-flat.svg)](https://paypal.me/brandonhimpfen)

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
