<template>
  <div class="emailform">
    <v-form>
      <v-text-field label="Name" required v-model="name"></v-text-field>
      <v-text-field
        label="Email"
        required
        type="email"
        v-model="email"
      ></v-text-field>
      <v-textarea
        name="text"
        label="Text"
        auto-grow
        v-model="text"
      ></v-textarea>
      <v-btn color="success" class="mr-4" @click="sendEmail">
        Send Email
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'SendEmailForm',
  props: {},
  data() {
    return {
      name: '',
      email: '',
      text: '',
    };
  },
  methods: {
    async sendEmail() {
      const data = {
        service_id: process.env.VUE_APP_SERVICE_ID,
        template_id: process.env.VUE_APP_TEMPLATE_ID,
        user_id: process.env.VUE_APP_USER_ID,
        template_params: {
          username: this.name,
          message: this.text,
          from_name: this.email,
        },
      };

      const response = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        },
      );

      const res = await response;

      console.log(res);

      // Response {type: "cors", url: "https://api.emailjs.com/api/v1.0/email/send", redirected: false, status: 200, ok: true, …}
      // body: ReadableStream
      // bodyUsed: false
      // headers: Headers {}
      // ok: true
      // redirected: false
      // status: 200
      // statusText: "OK"
      // type: "cors"
      // url: "https://api.emailjs.com/api/v1.0/email/send"
      // __proto__: Response
    },
  },
  computed: {},
  components: {},
};
</script>

<style scoped lang="scss">
.emailform {
  padding: 25px;
}
</style>
