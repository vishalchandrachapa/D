document.getElementById("recommendationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newRec = document.getElementById("newRecommendation").value;
  const recList = document.getElementById("recommendationList");
  const newP = document.createElement("p");
  newP.textContent = newRec;
  recList.appendChild(newP);

  document.getElementById("newRecommendation").value = "";

  const popup = document.getElementById("popup");
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
});
