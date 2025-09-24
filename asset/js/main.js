// window.onscroll = function () {
//   myFunction();
// };

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// function increasePeople() {
//   let input = document.getElementById("peopleCount");
//   let val = parseInt(input.value);
//   if (val < 20) input.value = val + 1;
// }
// function decreasePeople() {
//   let input = document.getElementById("peopleCount");
//   let val = parseInt(input.value);
//   if (val > 0) input.value = val - 1;
// }



// const swiper = new Swiper(".room-swiper", {
//   // loop: true, 
//   slidesPerView: 3,
//   spaceBetween: 0,
//   // centeredSlides: true,

//   // Navigatsiya tugmalari
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     320: { slidesPerView: 1 },
//     768: { slidesPerView: 2 },
//     1200: { slidesPerView: 3 },
//   },
// });


const swiper = new Swiper(".services-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 0px dan boshlab
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // 480px dan boshlab
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // 768px dan boshlab
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // 992px dan boshlab
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    // 1200px dan boshlab
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


  // const questions = [
  //   { text: "С какой целью вы обращаетесь?", options: ["Регистрацию полезной модели","Регистрацию промышленного образца","Регистрацию изобретения"] },
  //   { text: "Выберите действие:", options: ["Подготовка заявки на выдачу патента","Подготовка заявки на передачу прав патента"] },
  //   { text: "3-savol: Variant tanlang", options: ["A","B"] },
  //   { text: "4-savol: Variant tanlang", options: ["A","B"] },
  //   { text: "5-savol: Variant tanlang", options: ["A","B"] },
  //   { text: "6-savol: Variant tanlang", options: ["A","B"] },
  //   { text: "7-savol: Variant tanlang", options: ["A","B"] },
  //   { text: "8-savol: Variant tanlang", options: ["A","B"] }
  // ];

  // let currentStep = 0;

  // function renderStep() {
  //   // Savol matni
  //   const q = questions[currentStep];
  //   document.getElementById("quiz-question").textContent = q.text;

  //   // Variantlar
  //   const optionsBox = document.getElementById("quiz-options");
  //   optionsBox.innerHTML = "";
  //   q.options.forEach(opt => {
  //     const div = document.createElement("div");
  //     div.textContent = opt;
  //     div.className = "quiz-option p-3 mb-2 rounded bg-secondary";
  //     div.onclick = () => {
  //       [...optionsBox.children].forEach(c => c.classList.remove("active"));
  //       div.classList.add("active");
  //     };
  //     optionsBox.appendChild(div);
  //   });

  //   // Step indicator (2 qatorda 4 tadan)
  //   const stepBox = document.getElementById("stepIndicator");
  //   stepBox.innerHTML = `
  //     <div class="row row-cols-4 g-3">
  //       ${Array.from({length: questions.length}, (_, i) => `
  //         <div class="col">
  //           <div class="step-circle rounded-circle d-flex align-items-center justify-content-center 
  //                       fw-bold text-white ${i === currentStep ? 'bg-danger' : 'bg-secondary'}">
  //             ${i+1}
  //           </div>
  //         </div>
  //       `).join("")}
  //     </div>
  //   `;

  //   // Tugmalar
  //   document.getElementById("prevBtn").disabled = currentStep === 0;
  //   document.getElementById("nextBtn").textContent =
  //     currentStep === questions.length-1 ? "Завершить" : "Далее";
  // }

  // // Tugma eventlari
  // document.getElementById("nextBtn").onclick = () => {
  //   if (currentStep < questions.length-1) {
  //     currentStep++;
  //     renderStep();
  //   }
  // };
  // document.getElementById("prevBtn").onclick = () => {
  //   if (currentStep > 0) {
  //     currentStep--;
  //     renderStep();
  //   }
  // };

  // // Boshlanish
  // renderStep();


  const collection = new Swiper(".collection-swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 0px dan boshlab
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // 480px dan boshlab
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // 768px dan boshlab
    768: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    // 992px dan boshlab
    992: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // 1200px dan boshlab
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

  const team = new Swiper(".team-swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 0px dan boshlab
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // 480px dan boshlab
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // 768px dan boshlab
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // 992px dan boshlab
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    // 1200px dan boshlab
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});