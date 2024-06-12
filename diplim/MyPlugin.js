document.addEventListener('DOMContentLoaded', function() {
  function calculateTotal() {
    const quantities = document.querySelectorAll('.quantity');
    const prices = document.querySelectorAll('.price');
    let total = 0;
    for (let i = 0; i < quantities.length; i++) {
      const quantity = parseInt(quantities[i].value) || 0;
      const price = parseInt(prices[i].textContent) || 0;
      total += quantity * price;
    }
    document.getElementById('total').innerText = `Общая стоимость: ${total} руб.`;
  }

  const quantities = document.querySelectorAll('.quantity');
  for (let i = 0; i < quantities.length; i++) {
    quantities[i].addEventListener('input', calculateTotal);
  }

  document.getElementById('orderButton').addEventListener('click', function() {
    sendOrder();
  });

  function sendOrder() {
    const orderData = [];
    const rows = document.querySelectorAll("table tbody tr");
    for (let i = 0; i < rows.length; i++) {
      const productName = rows[i].cells[0].innerText;
      const productPrice = rows[i].cells[1].innerText;
      const quantityInput = rows[i].querySelector(".quantity");
      const quantity = quantityInput ? quantityInput.value : 0; // Проверяем, существует ли элемент .quantity перед попыткой получить его значение
      if (quantity > 0) {
        orderData.push({ productName: productName, productPrice: productPrice, quantity: quantity });
      }
    }
    localStorage.setItem('order', JSON.stringify(orderData));
    window.location.href = 'obribitca.html';
  }
  });

  
