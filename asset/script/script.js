const btn = document.querySelectorAll(".menu__content__btn");
const price = document.querySelectorAll(".menu__content__price");
const intitulé = document.querySelectorAll(".menu__content__text");
const btnnn = document.querySelectorAll("button");
console.log(btn);

console.log(price);

console.log(intitulé);

for (i = 0; i < btn.length; i++) {
  const allBtn = btn[i];
  const allPrice = price[i];
  const allIntitulé = intitulé[i];
  let storage = JSON.parse(localStorage.getItem("commande"));
  function indexStorage() {
    if (storage != null) {
      const orderExist = storage.map((e) => e.name).indexOf(allIntitulé.innerHTML);
      console.log(orderExist);
      if (orderExist != -1) {
        changeColorBtn();
      } else {
        changeColorBtn2();
      }
    }
    //     if (storage != null) {
    //       storage.forEach((element) => {
    //         console.log[element];
    //         const storageName = element.name;
    //         console.log(storageName);
    //         if (storageName == allIntitulé.innerHTML) {
    //           console.log("1");
    //           changeColorBtn();
    //         } else {
    //           console.log("2");
    //           changeColorBtn2();
    //         }
    //       });
    //     }
    //   }
  }
  indexStorage();
  function changeColorBtn() {
    allBtn.style.border = "3px solid green";
    allBtn.style.boxShadow = "1px 1px 23px 3px rgb(0, 0, 0, 0.5) ";
    allBtn.style.transform = "scale(1.1)";

    return true;
  }
  function changeColorBtn2() {
    allBtn.style.border = "2px solid black";
    allBtn.style.boxShadow = "0px 1px 33px 8px rgb(0, 0, 0, 0.22)";
    allBtn.style.transform = "scale(1)";

    return false;
  }
  allBtn.addEventListener("click", () => {
    let nameProduct = allIntitulé.innerHTML;
    let priceProduct = allPrice.innerHTML;
    let order = {
      name: nameProduct,
      prix: priceProduct,
    };
    let storage = JSON.parse(localStorage.getItem("commande"));

    if (storage == null) {
      storage = [];
      storage.push(order);
      localStorage.setItem("commande", JSON.stringify(storage));
      changeColorBtn();
      console.log("1");
    } else if (storage != null) {
      const nameExist = storage.map((e) => e.name).indexOf(nameProduct);
      if (nameExist == -1) {
        console.log(nameExist);
        storage.push(order);
        localStorage.setItem("commande", JSON.stringify(storage));
        changeColorBtn();
        console.log("2");
      } else if (nameExist != -1) {
        const filter = storage.filter((productName) => productName.name != nameProduct);
        console.log(filter);
        localStorage.setItem("commande", JSON.stringify(filter));

        changeColorBtn2();
      }
    }
  });
}

// if (storage == null && orderError() !== true) {
//   changeColorBtn();
//   storage = [];
//   savePanier();
// } else if (storage != null && orderError() !== true) {
//   const colorsExist = storage.map((e) => e.colors).indexOf(colorsProduct);
//   const idExist = storage.map((e) => e.Id).indexOf(idProduct);
//   const index = storage.map((e) => e.Id + e.colors).indexOf(idProduct + colorsProduct);

/*.catch((error) => {
            let texteerror = document.querySelector("h1");
            texteerror.innerText = "Nous n'avons pas réussi à afficher nos produit. Veuillez reesayer ultérieurement";
            console.log(texteerror);
            console.log(error);
        });*/
//   if (index != -1) {
//     changeColorBtn();
//     storage[index].quantity += quantityProduct;
//     localStorage.setItem("Produit", JSON.stringify(storage));
//   } else if (colorsExist == -1 && idExist != -1) {
//     changeColorBtn();
//     savePanier();
//   } else if (idExist == -1) {
//     changeColorBtn();
//     savePanier();
//   }
//   console.log(index);
//   console.log(idExist);
//   console.log(colorsExist);
//
