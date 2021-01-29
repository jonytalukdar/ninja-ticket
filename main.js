function handleProductChange(quality, increase) {
  const qualityInput = document.getElementById(quality + '-count');
  const qualityCount = parseInt(qualityInput.value);
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
}
