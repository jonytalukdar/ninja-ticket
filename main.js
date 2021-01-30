function handleQualityChange(quality, increase) {
  const qualityInput = document.getElementById(quality + '-count');
  const qualityCount = getInput(quality);
  let qualityNewCount = 0;
  // condition for increase and  decrease
  if (increase == true) {
    qualityNewCount = qualityCount + 1;
  }
  if (increase == false && qualityCount > 0) {
    qualityNewCount = qualityCount - 1;
  }
  qualityInput.value = qualityNewCount;

  // condition for price
  let qualityTotal = 0;
  if (quality == 'first-class') {
    qualityTotal = qualityNewCount * 150;
  }
  if (quality == 'economy') {
    qualityTotal = qualityNewCount * 100;
  }
  document.getElementById(quality + '-total').innerText = qualityTotal;

  calculalateTotal();
}

// function for calculate
function calculalateTotal() {
  const firstClassCount = getInput('first-class');
  const economyCount = getInput('economy');

  const totalPrice = firstClassCount * 150 + economyCount * 100;
  document.getElementById('sub-total').innerText = totalPrice;

  const tax = totalPrice * 0.1;
  document.getElementById('tax-amount').innerText = tax;

  const grandTotal = totalPrice + tax;
  document.getElementById('grand-total').innerText = grandTotal;
}

// function for getInput
function getInput(quality) {
  const qualityInput = document.getElementById(quality + '-count').value;
  const qualityCount = parseInt(qualityInput);
  return qualityCount;
}

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

  const subTotalPrice = firstClassNewCount * 150 + economyNewCount * 100;
  document.getElementById('sub-total-price').innerText = subTotalPrice;

  const tax = subTotalPrice * 0.1;
  document.getElementById('tax-price').innerText = tax;

  const grandTotalPrice = subTotalPrice + tax;
  document.getElementById('grand-total-price').innerText = grandTotalPrice;
}
