// function for handle quality change
function handleQualityChange(quality, increase) {
  const qualityInput = document.getElementById(quality + '-count');
  const qualityCount = getInput(quality);

  let qualityNewCount = 0;
  if (increase == true) {
    qualityNewCount = qualityCount + 1;
  }
  if (increase == false && qualityCount > 0) {
    qualityNewCount = qualityCount - 1;
  }
  qualityInput.value = qualityNewCount;

  let qualityTotal = 0;
  if (quality == 'first-class') {
    qualityTotal = qualityNewCount * 150;
  }
  if (quality == 'economy') {
    qualityTotal = qualityNewCount * 100;
  }

  document.getElementById(quality + '-total').innerText = qualityTotal;
  // call calculate function
  calculateTotal('sub-total', 'tax-amount', 'grand-total');
}

// function for confirmation message
function confirmMessage() {
  const firstClassCount = document.getElementById('first-class-count');
  const firstClassNewCount = parseInt(firstClassCount.value);
  document.getElementById('first-class-ticket').innerText = firstClassNewCount;

  const totalFirstPrice = firstClassNewCount * 150;
  document.getElementById('first-class-price').innerText = totalFirstPrice;

  const economyCount = document.getElementById('economy-count');
  const economyNewCount = parseInt(economyCount.value);
  document.getElementById('economy-ticket').innerText = economyNewCount;

  const totalEconomyPrice = economyNewCount * 100;
  document.getElementById('economy-price').innerText = totalEconomyPrice;

  // call calculate function
  calculateTotal('sub-total-price', 'tax-price', 'grand-total-price');
}

// function for calculate price
function calculateTotal(subTotal, taxTotal, grandTotal) {
  const firstClassCount = getInput('first-class');
  const economyCount = getInput('economy');

  const totalPrice = firstClassCount * 150 + economyCount * 100;
  document.getElementById(subTotal).innerText = totalPrice;

  const tax = totalPrice * 0.1;
  document.getElementById(taxTotal).innerText = tax;

  const grandTotalPrice = totalPrice + tax;
  document.getElementById(grandTotal).innerText = grandTotalPrice;
}

// function for getInput value
function getInput(quality) {
  const qualityInput = document.getElementById(quality + '-count').value;
  const qualityCount = parseInt(qualityInput);
  return qualityCount;
}
