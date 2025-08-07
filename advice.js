function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const adviceText = data.slip.advice;
      const adviceId = data.slip.id;

      document.getElementById("advice").innerText = `"${adviceText}"`;
      document.getElementById("advice-id").innerText = `Advice #${adviceId}`;
    })
    .catch((error) => {
      console.log("Error fetching advice:", error);
    });
}

window.addEventListener("DOMContentLoaded", getAdvice);

document.getElementById("random").addEventListener("click", getAdvice);
