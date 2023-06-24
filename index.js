function moveToNextBox(event) {

   
    const currentInput = event.target;

    currentInput.addEventListener('input', function() {
        this.value = this.value.toUpperCase();
      });


    console.log(currentInput);
    const classval=currentInput.className;
    const maxLength = 1;
    const currentLength = currentInput.value.length;
    console.log(currentLength);
    if (currentLength === maxLength) {
      const letterBoxes = document.getElementsByClassName(classval);
      const currentIndex = Array.from(letterBoxes).indexOf(currentInput);
  
      if (currentIndex < letterBoxes.length - 1) {
        const checkbox=document.querySelector('#'+classval);
        console.log(checkbox);
        checkbox.style.color="black";
        const nextInput = letterBoxes[currentIndex + 1];
        nextInput.focus();
      }
      if (currentIndex===letterBoxes.length-1)
      {
        const elements = document.getElementsByClassName(classval);
        let parsedText = '';
       for (let i=0;i<elements.length;i++)
       {
        const element=elements[i];
            const letter = element.value;
            parsedText += letter;   
      }
      parsedText=parsedText.toLowerCase();
      console.log(parsedText);
      console.log(classval);
      if (parsedText===classval)
      {
        const checkbox=document.querySelector('#'+classval);
        console.log(checkbox);
        checkbox.style.color="green";
        checkbox.style.fontWeight='bold';
      }
    }
}


    if (currentLength===0)
    {
        const checkbox=document.querySelector('#'+classval);
        console.log(checkbox);
        checkbox.style.color="black";
        checkbox.style.fontWeight='normal';
        const letterBoxes = document.getElementsByClassName(classval);
      const currentIndex = Array.from(letterBoxes).indexOf(currentInput);
      if (currentIndex >0) {
        const nextInput = letterBoxes[currentIndex - 1];
        nextInput.focus();
    }
  }
}

// const inputBox=document.getElementsByID('box');
// inputBox.addEventListener('input', function(event) {
//     const inputValue = event.target.value;
//     if (event.inputType === 'deleteContentBackward') {
      
//     }
//     console.log('User entered something:', inputValue);
//   });
  

function func(event)
{
    const currentInput = event.target;
    currentInput.addEventListener('input', function() {
        this.value = this.value.toUpperCase();
      });
 
    const classval=currentInput.className;
    const maxLength = 1;
    const currentLength = currentInput.value.length;
 

    if (currentLength === maxLength && event.keyCode!=8) {
      const letterBoxes = document.getElementsByClassName(classval);
      const currentIndex = Array.from(letterBoxes).indexOf(currentInput);
  
      if (currentIndex < letterBoxes.length - 1) {
        const checkbox=document.querySelector('#'+classval);
        console.log(checkbox);
        checkbox.style.color="black";
        checkbox.style.fontWeight='normal';
        const nextInput = letterBoxes[currentIndex + 1];
        nextInput.focus();
      }
    }

    if (currentLength===0 && event.keyCode==8)
    {
        const checkbox=document.querySelector('#'+classval);
        console.log(checkbox);
        checkbox.style.color="black";
        checkbox.style.fontWeight='normal';
        const letterBoxes = document.getElementsByClassName(classval);
      const currentIndex = Array.from(letterBoxes).indexOf(currentInput);
      if (currentIndex >0) {
        const nextInput = letterBoxes[currentIndex - 1];
        nextInput.focus();
    }
  }
}