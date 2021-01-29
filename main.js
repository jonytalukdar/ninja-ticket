document
  .getElementById('economy-increase')
  .addEventListener('click', function () {
    const economyInput = document.getElementById('economy-count');
    const economyCount = parseInt(economyInput.value);
    const economyNewCount = economyCount + 1;
    economyInput.value = economyNewCount;

    const economyTotalPrice = economyNewCount * 100;

    document.getElementById('economy-total').innerText = economyTotalPrice;
  });

document
  .getElementById('economy-decrease')
  .addEventListener('click', function () {
    const economyInput = document.getElementById('economy-count');
    const economyCount = parseInt(economyInput.value);
    const economyNewCount = economyCount - 1;
    economyInput.value = economyNewCount;

    const economyTotalPrice = economyNewCount * 100;

    document.getElementById('economy-total').innerText = economyTotalPrice;
  });
