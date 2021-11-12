// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     // -----------------------------------------
//     // Этот кусок не работает
//     const {
//         elements: {
//             login,
//             password
//         },
//     } = event.currentTarget;

//     console.log(event.currentTarget);

//     if (login.value === "" || password.value === "") {
//         alert("Please fill in all the fields!");
//         return;
//     }
//       const check = () => {
//           if (document.querySelector(".login-form input[name='email']").value === "") {
//               alert("Поле Email не заполнено !!!");
//               return false;
//           }
//           if (
//               document.querySelector(".login-form input[name='password']").value === ""
//           ) {
//               alert("Поле Password не заполнено !!!");
//               return false;
//           }
//       };

//       check();
//     // ---------------------------------------------

//     console.log(login: $ {login}, password: $ {password});
//     event.currentTarget.reset();

//     console.log(formData);
//     formData.forEach((value, name) => {
//         console.log("onFormSubmit -> name", name);
//         console.log("onFormSubmit -> value", value);
//     });
// }
////////////////////работающий вариант/////////////
const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elementEl = event.currentTarget;
    const mail = elementEl.email.value;
    const password = elementEl.password.value;

    if (mail === "" || password === "") {
        return alert("Please check all the fields!");
    } else {
        const formEl = {
            mail,
            password

        }
        console.log(formEl)
        event.currentTarget.reset();
    }
}
/////////////////////не работает/////////////////
// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     const formElements = event.currentTarget.elements;
    
//     if (login.value === "" || password.value === "") {
//         return console.log("Please check all the fields!");
//     }
//     const mail = formElements.email.value;
//     const password = formElements.password.value;
//     const submit = formElements.submit.value;
//     console.log(`Login: ${login.value}, Password: ${password.value}`);
//     event,currentTarget.reset();
// }
///////////////////////проба//////////////
// const form = document.querySelector('.login-form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     const {
//         elements: {
//             login,
//             password
//         }
//     } = event.currentTarget;

//     if (login === "" || password === "") {
//         alert("Please fill in all the fields!");
//         return;
//     }

//     console.log(`Login: ${login}, Password: ${password}`);
//     event.currentTarget.reset();

    // console.log(formData);
    // formData.forEach((value, name) => {
    //     console.log('onFormSubmit -> name', name);
    //     console.log('onFormSubmit -> value', value);

        
    // });
    

    

