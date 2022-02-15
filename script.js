// Buyer Details
document
  .getElementById("detail-submit-btn")
  .addEventListener("click", function () {
    const buyerDetails = document.getElementById("buyer-details-input").value;
    const invoiceTo = document.getElementById("buyer-info");
    if (buyerDetails == "") {
      alert(`please provide the shipping address`);
    } else {
      invoiceTo.innerText = buyerDetails;
      document.getElementById("buyer-details-input").value = "";
    }
  });

// Product details
let itemCount = 0;
document
  .getElementById("add-details-btn")
  .addEventListener("click", function () {
    const productName = document.getElementById("item-name-input").value;
    const productPrice = document.getElementById("item-price-input").value;
    const productQuantity = document.getElementById(
      "item-quantity-input"
    ).value;

    if (productName == "" || productPrice == "" || productQuantity == "") {
      return `All the fields are mendatory`;
    }
    const productContainer = document.getElementById("info-table");
    const itemPrice = parseInt(productQuantity) * parseInt(productPrice);

    itemCount += 1;
    const newProduct = document.createElement("tr");
    newProduct.innerHTML = `<th >${itemCount}</th>
    <td>${productName}</td>
    <td><span id='product-quantity'>${productQuantity} </span>KG</td>
    <td>&dollar;<span id='product-price' class="price-test">${itemPrice}</span></td>`;
    productContainer.appendChild(newProduct);
    document.getElementById("item-name-input").value = "";
    document.getElementById("item-quantity-input").value = "";
    document.getElementById("item-price-input").value = "";

    // subTotal Calculation
    const subTotalFiled = document.getElementById("sub-total");
    let subTotal = 0;
    let pricetest = document.getElementsByClassName("price-test");
    for (const price of pricetest) {
      subTotal = subTotal + parseInt(price.innerText);
    }
    subTotalFiled.innerText = subTotal;

    // tax calculation
    let tax = subTotal / 20;
    document.getElementById("tax").innerText = tax.toFixed(1);

    // Grand Total
    document.getElementById("grand-total").innerText = subTotal + tax;
    document.getElementById("grand-total-2").innerText = subTotal + tax;
  });
