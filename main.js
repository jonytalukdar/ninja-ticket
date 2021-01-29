function handleProductChange(isIncrease) {
  const economyInput = document.getElementById('economy-count');
  const economyCount = parseInt(economyInput.value);
  //   const economyNewCount = economyCount - 1;
  let economyNewCount = 0;
  if (isIncrease == true) {
    economyNewCount = economyCount + 1;
  }
  if (isIncrease == false && economyCount > 0) {
    economyNewCount = economyCount - 1;
  }
  economyInput.value = economyNewCount;

  const economyTotalPrice = economyNewCount * 100;
  document.getElementById('economy-total').innerText = economyTotalPrice;
}
