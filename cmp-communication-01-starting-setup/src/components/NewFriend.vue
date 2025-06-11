<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      const name = this.enteredName.trim();
      const phone = this.enteredPhone.trim();
      const email = this.enteredEmail.trim();

      if (name === "" || phone === "" || email === "") {
        return;
      }

      this.$emit("add-contact", name, phone, email);

      // Clear the input fields after submission
      this.enteredName = "";
      this.enteredPhone = "";
      this.enteredEmail = "";
    },
  },
};
</script>
