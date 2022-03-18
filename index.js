async function test() {
  let url = "https://api.adviceslip.com/advice";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  } 
};

async function renderAdvice() {
  let advice;
  advice = await test();
  let id = advice.slip.id;
  let content = advice.slip.advice;
  document.getElementById("advice-number").innerHTML = "Advice #" + id;
  document.getElementById("advice-content").innerHTML = content;
}

renderAdvice()