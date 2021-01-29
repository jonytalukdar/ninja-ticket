function handleProductChange(quality, increase) {
  const qualityInput = document.getElementById(quality + '-count');
  const qualityCount = getInput(quality);
  let qualityNewCount = 0;
  // condition for increase decrease
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

function calculalateTotal() {
  const firstClassCount = getInput('first-class');
  const economyCount = getInput('economy');

  //   const economyInput = document.getElementById('economy-count').value;
  //   const economyCount = parseInt(economyInput);

  const totalPrice = firstClassCount * 150 + economyCount * 100;
  document.getElementById('sub-total').innerText = totalPrice;
}

function getInput(quality) {
  const qualityInput = document.getElementById(quality + '-count').value;
  const qualityCount = parseInt(qualityInput);
  return qualityCount;
}
