let orderNumberElement = document.querySelector(".js-orderNumber");
let versionElement = document.querySelector(".js-version");
let editionElement = document.querySelector(".js-edition");
let numberBooksInBoxElement = document.querySelector(".js-numberBooksInBox");
let boxesPerLayerElement = document.querySelector(".js-boxesPerLayer");
let numberOfLayersElement = document.querySelector(".js-numberOfLayers");
let formElement = document.querySelector(".js-form");

let orderNumberResult = document.querySelector(".js-orderNumberResult");
let versionResult = document.querySelector(".js-versionResult");
let editionResult = document.querySelector(".js-editionResult");
let numberBooksInBoxResult = document.querySelector(
  ".js-numberBooksInBoxResult"
);
let boxesPerLayerResult = document.querySelector(".js-boxesPerLayerResult");
let numberOfLayersResult = document.querySelector(".js-numberOfLayersResult");
let numberBooksInFullPalletResult = document.querySelector(
  ".js-numberBooksInFullPalletResult"
);
let numberFullPalletResult = document.querySelector(
  ".js-numberFullPalletResult"
);
let numberBooksInLastPalletResult = document.querySelector(
  ".js-numberBooksInLastPalletResult"
);
let numberLayersInLastPalletResult = document.querySelector(
  ".js-numberLayersInLastPalletResult"
);
let numberBoxInLastPalletResult = document.querySelector(
  ".js-numberBoxInLastPalletResult"
);
let numberBoxInLastLayerOnLastPalletResult = document.querySelector(
  ".js-numberBoxInLastLayerOnLastPalletResult"
);
let numberBooksInLastBoxResult = document.querySelector(
  ".js-numberBooksInLastBoxResult"
);


formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let orderNumber = orderNumberElement.value;
  let version = versionElement.value;
  let edition = editionElement.value;
  let numberBooksInBox = numberBooksInBoxElement.value;
  let boxesPerLayer = boxesPerLayerElement.value;
  let numberOfLayers = numberOfLayersElement.value;

  orderNumberResult.innerText = orderNumber;
  versionResult.innerText = version;
  editionResult.innerText = edition;
  numberBooksInBoxResult.innerText = numberBooksInBox;
  boxesPerLayerResult.innerText = boxesPerLayer;
  numberOfLayersResult.innerText = numberOfLayers;

  let numberBooksInFullPallet =
    numberBooksInBox * boxesPerLayer * numberOfLayers;
  numberBooksInFullPalletResult.innerText = numberBooksInFullPallet;

  let numberFullPallet = edition / numberBooksInFullPallet;
  numberFullPalletResult.innerText = Math.floor(numberFullPallet);

  let numberBooksInLastPallet =
    edition - Math.floor(numberFullPallet) * numberBooksInFullPallet;
  numberBooksInLastPalletResult.innerText = numberBooksInLastPallet;

  let numberBoxInLastPallet = numberBooksInLastPallet / numberBooksInBox;
  numberBoxInLastPalletResult.innerText = Math.floor(numberBoxInLastPallet);

  let numberLayersInLastPallet = numberBoxInLastPallet / boxesPerLayer;
  numberLayersInLastPalletResult.innerText = Math.floor(
    numberLayersInLastPallet
  );

  let numberBoxInLastLayerOnLastPallet = numberBoxInLastPallet % boxesPerLayer;
  numberBoxInLastLayerOnLastPalletResult.innerText =
    Math.floor(numberBoxInLastLayerOnLastPallet);

  let numberBooksInLastBox = numberBooksInLastPallet % numberBooksInBox;
  numberBooksInLastBoxResult.innerText = numberBooksInLastBox;
    
});
  
