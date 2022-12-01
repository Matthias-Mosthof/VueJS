Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    updateCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
      if (event.path[0].className === "dead-spot") {
        this.x = "not here dude";
        this.y = "neither here";
      }
    },
    stopUpdate() {
      this.x = "this is stopUpdatefunctionNow";
      this.y = "this is stopUpdatefunctionNow";
    },
    removeEntry(fruit) {
      this.fruitBasket.forEach((fruitInitial, index, array) => {
        if (fruitInitial === fruit) {
          array.splice(index, 1);
        }
      });
    },
  },
}).mount("#app");
