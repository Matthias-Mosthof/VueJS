/*const redSlider = document.querySelector("#r");
const greenSlider = document.querySelector("#g");
const blueSlider = document.querySelector("#b");
const colorValue = document.querySelector("#color-value");

function setBackgroundColor() {
  const red = rangeValueToHex(redSlider.value);
  const green = rangeValueToHex(greenSlider.value);
  const blue = rangeValueToHex(blueSlider.value);

  const color = "#" + red + green + blue;
  document.body.style.backgroundColor = color;
  colorValue.innerText = color;
}
setBackgroundColor();

function rangeValueToHex(value) {
  value = Number.parseInt(value);
  return ("0" + value.toString(16)).substr(-2);
}

document.body.addEventListener("input", setBackgroundColor);*/

Vue.createApp({
  data() {
    return {
      attributesFix: {
        type: "range",
        step: "1",
        min: "0",
        max: "255",
      },
      attributesRed: {
        class: "red",
        id: "r",
        value: "50",
      },
      attributesGreen: {
        class: "green",
        id: "g",
        value: "50",
      },
      attributesBlue: {
        class: "blue",
        id: "b",
        value: "0",
      },
      hexValue: "",
    };
  },
  computed: {
    setColor() {
      let red = this.attributesRed.value;
      let green = this.attributesGreen.value;
      let blue = this.attributesBlue.value;
      let rgbValue = "rgb" + "(" + red + "," + green + "," + blue + ")";
      return rgbValue;
    },
  },
  methods: {
    setRGBtoHex() {
      let r = parseInt(this.attributesRed.value, 10).toString(16);
      r = r.length == 1 ? "0" + r : r;

      let g = parseInt(this.attributesGreen.value, 10).toString(16);
      g = g.length == 1 ? "0" + g : g;

      let b = parseInt(this.attributesBlue.value, 10).toString(16);
      b = b.length == 1 ? "0" + b : b;

      hex = "#" + r + g + b;
      this.hexValue = hex;
    },
    setBackgroundColorRed(event) {
      this.attributesRed.value = event.target.value;
    },
    setBackgroundColorGreen(event) {
      this.attributesGreen.value = event.target.value;
    },
    setBackgroundColorBlue(event) {
      this.attributesBlue.value = event.target.value;
    },
  },
}).mount("#app");
