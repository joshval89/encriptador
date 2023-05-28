
const msj = document.querySelector("#textarea");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const msjFinal = document.querySelector("#resultado");

const msjEncriptar = text => {

  switch (text) {
    case 'a':
      return 'ia';
    case 'e':
      return 'enter';
    case 'i':
      return 'imes';
    case 'o':
      return 'ober';
    case 'u':
      return 'ufat';
    default:
      return text;
  }
};

const encriptar = text => {

  const msjEncriptado = text.replace(/a|e|i|o|u/g, msjEncriptar);
  toggleElementVisibility('ocultar', false);
  toggleElementVisibility('resultado', true);
  toggleElementVisibility('copiar', true);
  return msjEncriptado;
};

const msjDesencriptar = text => {
  switch (text) {
    case 'ia':
      return 'a';
    case 'enter':
      return 'e';
    case 'imes':
      return 'i';
    case 'ober':
      return 'o';
    case 'ufat':
      return 'u';
    default:
      return text;
  }
};

const desencriptar = text => {
  const msjDesencriptado = text.replace(/ia|enter|imes|ober|ufat/g, msjDesencriptar);
  return msjDesencriptado;
};
btnEncriptar.addEventListener("click", event => {
  event.preventDefault();
  const text = msj.value;
  msjFinal.value = "";
  const msjSeguro = encriptar(text);
  msjFinal.value = msjSeguro;
});

btnDesencriptar.addEventListener("click", event => {
  event.preventDefault();
  const text = msj.value;
  msjFinal.value = "";
  const msjSeguro = desencriptar(text);
  msjFinal.value = msjSeguro;
});

btnCopiar.addEventListener("click", event => {
  event.preventDefault();
  msjFinal.select();
  navigator.clipboard.writeText(msjFinal.value);
});

const toggleElementVisibility = (elementId, shouldShow) => {
  const element = document.getElementById(elementId);
  if (shouldShow) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
};
