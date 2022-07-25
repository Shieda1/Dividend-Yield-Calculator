// https://calculator.swiftutors.com/dividend-yield-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const dividendYieldRadio = document.getElementById('dividendYieldRadio');
const annualDividendperShareRadio = document.getElementById('annualDividendperShareRadio');
const marketPriceoftheStockRadio = document.getElementById('marketPriceoftheStockRadio');

let dividendYield;
let annualDividendperShare = v1;
let marketPriceoftheStock = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

dividendYieldRadio.addEventListener('click', function() {
  variable1.textContent = 'Annual Dividend per Share ($)';
  variable2.textContent = 'Market Price of the Stock ($)';
  annualDividendperShare = v1;
  marketPriceoftheStock = v2;
});

annualDividendperShareRadio.addEventListener('click', function() {
  variable1.textContent = 'Dividend Yield';
  variable2.textContent = 'Market Price of the Stock ($)';
  dividendYield = v1;
  marketPriceoftheStock = v2;
});

marketPriceoftheStockRadio.addEventListener('click', function() {
  variable1.textContent = 'Dividend Yield';
  variable2.textContent = 'Annual Dividend per Share ($)';
  dividendYield = v1;
  annualDividendperShare = v2;
});

btn.addEventListener('click', function() {
  
  if(dividendYieldRadio.checked)
    result.textContent = `Dividend Yield = ${computeDividendYield().toFixed(2)}%`;

  else if(annualDividendperShareRadio.checked)
    result.textContent = `Annual Dividend per Share = ${computeAnnualDividendperShare().toFixed(2)} $`;

  else if(marketPriceoftheStockRadio.checked)
    result.textContent = `Market Price of the Stock = ${computeMarketPriceoftheStock().toFixed(2)} $`;
})

// calculation

function computeDividendYield() {
  return (Number(annualDividendperShare.value) / Number(marketPriceoftheStock.value)) * 100;
}

function computeAnnualDividendperShare() {
  return (Number(dividendYield.value) / 100) * Number(marketPriceoftheStock.value);
}

function computeMarketPriceoftheStock() {
  return Number(annualDividendperShare.value) / (Number(dividendYield.value) / 100);
}