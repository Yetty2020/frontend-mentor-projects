let rating = "0";
function add(rate) {
  remove(rate);
  document
    .querySelector(`#r${rate}`)
    .addEventListener("mousedown", function () {
      document.querySelector(`#r${rate}`).classList.add("active");
      rating = document.querySelector(`#r${rate}`).innerHTML;
      submit();
    });
}

function submit() {
  document.querySelector(".submit").addEventListener("click", function () {
    document.querySelector(".rating-box p span").innerHTML = rating;
    document.querySelector(".rate-form").classList.add("hide");
    document.querySelector(".thanks-box").classList.remove("hide");
  });
}
submit();

function remove(rate) {
  document
    .querySelector(`#r${rate}`)
    .addEventListener("mousedown", function () {
      let t = 1;
      while (t < 6) {
        document.querySelector(`#r${t}`).classList.remove("active");
        t += 1;
      }
    });
}
num = 6;
for (i = 1; i < num; i++) {
  document.querySelector(".options").innerHTML += `<li id="r${i}">${i}</li>`;
}

for (e = 1; e < 6; e++) {
  add(e);
}
