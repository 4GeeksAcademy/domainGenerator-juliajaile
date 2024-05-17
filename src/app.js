/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
function generateAllDomainCombinations() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];

  for (let pronounItem of pronoun) {
    for (let adjectiveItem of adj) {
      for (let nounItem of noun) {
        for (let extensionItem of extension) {
          console.log(
            `${pronounItem} ${adjectiveItem} ${nounItem} ${extensionItem}`
          );
        }
      }
    }
  } //return `${pronounItem} ${adjectiveItem} ${nounItem} ${extensionItem}`;
}

generateAllDomainCombinations();

//let domainElement = document.getElementById("domain");
//domainElement.innerHTML = generateAllDomainCombinations();
