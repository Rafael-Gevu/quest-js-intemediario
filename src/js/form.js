const sendBtn = document.querySelector('.send-btn')

const inputText = document.querySelectorAll('.input-text');






sendBtn.addEventListener('click', function(){
    inputText.forEach(inputText => {
        if (inputText.value === ""){
            inputText.classList.add('change-color-negative');
            inputText.classList.remove('change-color-positive')
            inputText.nextElementSibling.classList.add('alert')
        } else if(inputText.value !== ""){
            inputText.classList.add('change-color-positive');
            inputText.classList.remove('change-color-negative')
            inputText.nextElementSibling.classList.remove('alert')
        }})  
    });


























// inputText.forEach(inputText => {
//     const sendBtn = document.querySelector('.form .send-btn')
//     sendBtn.addEventListener('change', function(){
//         if(inputText.value !== ""){
//             inputText.classList.add('change-color-positive');
//         } else {
//             inputText.classList.add('change-color-negative')
//         }
//     })
// })
