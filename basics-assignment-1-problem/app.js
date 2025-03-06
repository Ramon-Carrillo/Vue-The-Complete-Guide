const app = Vue.createApp({
  data() {
    return {
      myName: "Ramon",
      myAge: 44,
      imageUrl: "https://placehold.co/200x200",
    };
  },
  methods: {
    outputAge() {
      return this.myAge + 5;
    },
    outputRandomNumber() {
      return (Math.random() * 1).toFixed(0);
    },
  },
});

app.mount("#assignment");
