let qty = prompt("จำนวนสินค้า")
let totalPrice = 0

for(let i =1; i <= qty; i++){
  let itemPrice = parseInt(prompt("ราคาสินค้าชินที่"+" "+ i))
  
  totalPrice = itemPrice+totalPrice
  document.getElementById("priceList").innerHTML += "รายการสืนค้าชิ้นที่"+" "+i+":"+itemPrice+" "+"บาท"+"</br>"
  document.getElementById("totalPrice").innerHTML = "ราคารวมทั้งหมด"+" "+totalPrice+" "+"บาท"

}
