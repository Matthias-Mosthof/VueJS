Vue.createApp({
  data() {
    return {
      addTimes: [
        {
          activityName: "",
          secondsIn: 0,
          minutesIn: 0,
          hoursIn: 0,
          active: false,
        },
      ],
      times: [
        {
          activityName: "VueJS",
          secondsIn: 0,
          minutesIn: 0,
          hoursIn: 0,
          active: false,
        },
      ],

      intervalSeconds: null,
      intervalMinutes: null,
      intervalHours: null,
      intervalServerRequest: null,
    };
  },
  async created() {
    const response = await fetch("http://localhost:3000/activity");
    this.times = await response.json();
  },
  computed: {},
  methods: {
    timer(event) {
      if (event.target.checked === true) {
        this.times.forEach((activity) => {
          if (
            event.path[2].firstElementChild.childNodes[1].innerText ===
            activity.activityName
          ) {
            activity.active = true;
          }
        });
        this.times.forEach((activity) => {
          if (activity.active === true) {
            this.intervalSeconds = setInterval(this.countSeconds, 1000);
            this.intervalMinutes = setInterval(this.countMinutes, 1000);
            this.intervalHours = setInterval(this.countHours, 1000);
            this.intervalHours = setInterval(this.serverRequest, 1000);
          }
        });
      }

      if (event.target.checked === false) {
        this.times.forEach((activity) => {
          if (
            event.path[2].firstElementChild.childNodes[1].innerText ===
            activity.activityName
          ) {
            activity.active = false;
          }
        });
        clearInterval(this.intervalSeconds);
        clearInterval(this.intervalMinutes);
        clearInterval(this.intervalHours);
        clearInterval(this.intervalServerRequest);
        clearInterval(this.intervalServerRequest);
        //this.serverRequest();
      }
    },

    countSeconds() {
      /*this.times[0].secondsIn++;
      console.log(this.times[0].secondsIn);
      
      }*/
      this.times.forEach((activity) => {
        if (activity.active === true) {
          activity.secondsIn++;
          if (this.times[0].secondsIn >= 60) {
            this.times[0].secondsIn = 0;
          }
        }
      });
    },

    countMinutes() {
      if (this.times[0].secondsIn === 0) {
        this.times[0].minutesIn++;
      }
      if (this.times[0].minutesIn === 60) {
        this.times[0].minutesIn = 0;
      }
    },

    countHours() {
      if (this.times[0].minutesIn === 0 && this.times[0].secondsIn === 0) {
        this.times[0].hoursIn++;
      }
    },
    async serverRequest() {
      let activity = this.times[0];

      await fetch("http://localhost:3000/activity/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(activity),
      });
    },
    safeInput(event) {
      this.addTimes[0].activityName = event.target.value;
    },
    renderActivity() {
      fetch("http://localhost:3000/activity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.addTimes[0]),
      });
      this.loadActivity();
    },
    async loadActivity() {
      const response = await fetch("http://localhost:3000/activity");
      this.times = await response.json();
    },
  },
}).mount("#app");
