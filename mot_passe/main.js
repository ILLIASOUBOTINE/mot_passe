const inpPasse = document.querySelector(".inp_passe");

inpPasse.addEventListener("input", (e) => {
  console.log(inpPasse.value.length);
  console.log(formula(calculNum(inpPasse.value), inpPasse.value.length));

  if (formula(calculNum(inpPasse.value), inpPasse.value.length) < 104) {
    inpPasse.style.borderColor = "red";
    inpPasse.style.color = "red";
  } else {
    inpPasse.style.color = "green";
    inpPasse.style.borderColor = "green";
  }
});

// let motPasse = "1dW!$";

// const arrSignSpeciale = ['\!','\#', '\$', '\?', '\@', '\%', '\&', '\*', '\\', '\+', '\-', '\/', '\.',
//  '\,', '\^', '\(', '\)', '\{', '\}', '\[', '\]', '\;', '\:', '\'', '\"', '\_', '\-']

function formula(num, lenth) {
  return Math.round(Math.log2(num) * lenth);
}

function calculNum(str) {
  let num = 0;

  if (str.match(/[a-z]/)) {
    num += 26;
  }
  if (str.match(/[A-Z]/)) {
    num += 26;
  }
  if (str.match(/[0-9]/)) {
    num += 10;
  }

  if (str.match(/[!#$%?@%&*+-.'"]/)) {
    num += 14;
  }

  // for(let elem of arrSignSpeciale){
  //   // let regx = elem;
  //   if (str.includes(`${elem}`)) {
  //     num +=27;
  //   }
  // }

  return num;
}

// console.log(calculNum(motPasse));

// console.log(formula(calculNum(motPasse), motPasse.length));
