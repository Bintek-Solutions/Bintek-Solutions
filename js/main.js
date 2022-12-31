function changeAtiveTab(event,tabID){
  let element = event.target;
  while(element.nodeName !== "A"){
    element = element.parentNode;
  }
  ulElement = element.parentNode.parentNode;
  aElements = ulElement.querySelectorAll("li > a");
  tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
  for(let i = 0 ; i < aElements.length; i++){
    aElements[i].classList.remove("text-white");
    aElements[i].classList.remove("bg-bintek-green");
    aElements[i].classList.add("text-gray-900");
    aElements[i].classList.add("bg-gray-500");
    tabContents[i].classList.add("hidden");
    tabContents[i].classList.remove("block");
  }
  element.classList.remove("text-white");
  element.classList.remove("bg-bintek-green");
  element.classList.add("text-white");
  element.classList.add("bg-white");
  document.getElementById(tabID).classList.remove("hidden");
  document.getElementById(tabID).classList.add("block");
}
