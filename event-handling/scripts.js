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
<<<<<<< HEAD
      console.log(event);
=======
>>>>>>> ac1c8eb01995e1f98c553780c65c14abb6a04fa7
      this.x = event.clientX;
      this.y = event.clientY;
      if (event.path[0].className === "dead-spot") {
        this.x = "not here dude";
        this.y = "neither here";
      }
    },
<<<<<<< HEAD

=======
    stopUpdate() {
      this.x = "this is stopUpdatefunctionNow";
      this.y = "this is stopUpdatefunctionNow";
    },
>>>>>>> ac1c8eb01995e1f98c553780c65c14abb6a04fa7
    removeEntry(fruit) {
      this.fruitBasket.forEach((fruitInitial, index, array) => {
        if (fruitInitial === fruit) {
          array.splice(index, 1);
        }
      });
    },
  },
}).mount("#app");
