let bitcoin = {};
let update = document.querySelector('.update-coin');
let homepage = document.querySelector('.homepage');
// bitcoin["name"] = "bitcoin";
// console.log(bitcoin["name"]);

window.onload = function() {

    // Get info right away
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
    .then(res => {
        return res.json();
    })
    .then(json => {
        console.log(json);
        bitcoin["name"] = json["name"];
        bitcoin["market_price"] = json["market_data"]["current_price"]["usd"];
        bitcoin["homepage"] = json["links"]["homepage"][0];
        console.log(bitcoin);
    });
}

update.addEventListener("click", function() {
    document.querySelector('.card-title').textContent = bitcoin["name"];
    document.querySelector('.card-text').textContent = `Market Price in USD: $${bitcoin["market_price"]}`;
    homepage.href = bitcoin["homepage"];
})