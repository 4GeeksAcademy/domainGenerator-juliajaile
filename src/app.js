/* eslint-disable */
import "bootstrap";
import "./style.css";

//write your code here
function generateAllDomainCombinations() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];

  let domainsNoun = " ";
  for (let pronounItem of pronoun) {
    for (let adjectiveItem of adj) {
      for (let nounItem of noun) {
        for (let extensionItem of extension) {
          console.log(
            `${pronounItem}${adjectiveItem}${nounItem}${extensionItem}`
          );
          domainsNoun +=
            pronounItem + adjectiveItem + nounItem + extensionItem + "</br>";
        }
      }
    }
  }
  return domainsNoun;
}

document.getElementById("domain").innerHTML = generateAllDomainCombinations();
