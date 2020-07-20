const imgContainer = document.querySelector("#img-container");

const form = document.querySelector('#imgForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log("form.imgFile.value=",form.imgFile.value);
    console.log("form.topText.value=",form.topText.value);
    console.log("form.bottomText.value=",form.bottomText.value);
    // alert('You Submitted The Form!!!!'+'text');
    addImg();
    
});

// ==========================================

function addImg() {
    const newDiv = document.createElement("div"); 
    const newImg = document.createElement("img");
    const newSpan1 = document.createElement("span");
    const newSpan2 = document.createElement("span");
    const newButton = document.createElement("button");

    // create to imgBox class for div element
    newDiv.classList.add('imgBox');
  
    newImg.setAttribute("src", form.imgFile.value);
    newSpan1.classList.add('text-top');
    newSpan2.classList.add('text-bottom');
    newButton.classList.add('btn');

    newSpan1.innerHTML = form.topText.value;
    newSpan2.innerHTML = form.bottomText.value;
    newButton.innerHTML = "X";

    newButton.addEventListener("click", removeDiv);
    // getEventListeners(newButton); check console

    newDiv.append(newSpan1);
    newDiv.append(newImg);
    newDiv.append(newSpan2);
    newDiv.append(newButton);

    imgContainer.append(newDiv);
    form.reset();
     
  }
  
  function removeDiv(event) {
      console.log("event.target"+event.target);
      event.target.parentElement.remove();
  }

