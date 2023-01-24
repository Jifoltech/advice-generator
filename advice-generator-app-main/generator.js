const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  //   console.log(data);
  document.getElementById("title").textContent = `ADVICE # ${data.slip.id}`;
  document.getElementById("text").textContent = `"${data.slip.advice}"`;
};

document.getElementById("btn").addEventListener("click", () => {
  fetchAdvice();
});
