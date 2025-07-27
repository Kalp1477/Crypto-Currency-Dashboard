let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");

const settings = {
    async: true,
    crossDomain: true,
    url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd',
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  };
  
  $.ajax(settings).done(res => {
    // console.log(res);
    btc.innerHTML = res.bitcoin.usd;
    eth.innerHTML = res.ethereum.usd;
    doge.innerHTML = res.dogecoin.usd;
  });



//   $.ajax({
//     url: 'https://pro-api.coingecko.com/api/v3/simple/price',
//     data: {
//       ids: 'bitcoin,ethereum,dogecoin',
//       vs_currencies: 'usd',
//       api_key: 'YOUR_API_KEY' // Replace 'YOUR_API_KEY' with your actual API key
//     },
//     success: function(response) {
//       console.log(response);
//     },
//     error: function(error) {
//       console.error('Error:', error);
//     }
//   });
  