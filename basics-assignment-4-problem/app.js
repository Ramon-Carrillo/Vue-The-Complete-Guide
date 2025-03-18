const app = Vue.createApp({
  data() {
    return {
      user: "",
      isVisible: true,
      inputBackgroundColor: "",
    };
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.user === "user1",
        user2: this.user === "user2",
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
