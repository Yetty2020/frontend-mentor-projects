// function getQuote(url) {
//   return new Promise((resolve, reject) => {
//     if (!url) {
//       console.log("No url provided!");
//     }

//     const quote = new XMLHttpRequest();
//     quote.open("GET", url);
//     quote.send();
//     quote.onload = () => {
//       if (quote.status == 200) {
//         resolve(quote.responseText);
//       } else {
//         reject(quote.status);
//       }
//     };
//   });
// }

// function getQuote(url) {
//     return fetch(url).then((response) => {
//         return response.json();
//     }).then((quote) => {
//         console.log(quote);
//         return quote;
//     })
// }

async function getQuote(url) {
  const response = await fetch(url);
  return await response.json();
}

document.querySelector(".dice").addEventListener("click", () => {
  window.location.reload();
});

getQuote("https://api.adviceslip.com/advice")
  .then((result) => {
    document.querySelector("#advice-id").innerHTML += result.slip.id;
    document.querySelector(".quote p").innerHTML = `"${result.slip.advice}"`;
    // console.log(result.slip.id)
    // console.log(result.slip.advice);
  })
  .catch((result) => {
    console.log(`An error of ${result} occured!`);
  });
