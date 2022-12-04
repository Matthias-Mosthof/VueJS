Vue.createApp({
  data() {
    return {
      secondsIn: 0,
      minutesIn: 0,
      hoursIn: 0,
      intervalSeconds: null,
      intervalMinutes: null,
      intervalHours: null,
    };
  },
  computed: {},
  methods: {
    timer(event) {
      console.log("hello");
      if (event.target.checked === true) {
        this.intervalSeconds = setInterval(this.countSeconds, 1000);
        this.intervalMinutes = setInterval(this.countMinutes, 60000);
        this.intervalHours = setInterval(this.countHours, 36000000);
      }
      if (event.target.checked === false) {
        clearInterval(this.intervalSeconds);
        clearInterval(this.intervalMinutes);
        clearInterval(this.intervalHours);
      }
    },

    countSeconds() {
      this.secondsIn++;
    },
    countMinutes() {
      this.minutesIn++;
    },
    countHours() {
      this.hoursIn++;
    },
  },
}).mount("#app");
