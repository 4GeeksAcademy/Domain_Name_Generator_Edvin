// Puedes revisar mas estricto

import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["the", "his"];
  let adj = ["divine", "smart", "cunning"];
  let noun = ["book", "student", "ocean"];
  let extension = [".com", ".org", ".es"];

  let result = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          const domain = `${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`;
          result += domain + "<br>";
        }
      }
    }
  }
  document.getElementById("generator").innerHTML = result;
};

/* pronoun.forEach(c =>
  adj.forEach(d =>
    noun.forEach(e => extension.forEach(f => console.log(`${c}${d}${e}${f}`)))
  )
); */
