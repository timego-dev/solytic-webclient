<template>
  <div class="o-login-form">
    <Form @submit="handleLogin" :validation-schema="schema">
      <template
        v-for="({ name, type, icon }, index) in loginFields"
        :key="index"
      >
        <FormField :name="name" :type="type" :icon="icon" />
      </template>

      <div class="form-group">
        <atom-button full-width>Sign In</atom-button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import { ref } from "vue";
import * as yup from "yup";

import FormField from "@/components/molecules/FormField.vue";
import AtomButton from "@/components/atoms/AButton.vue";

const schema = ref(
  yup.object().shape({
    username: yup.string().required("Username is required!"),
    password: yup.string().required("Password is required!"),
  })
);

const loginFields = [
  {
    name: "username",
    type: "email",
    icon: "user",
  },
  {
    name: "password",
    type: "password",
    icon: "lock",
  },
];

const handleLogin = (user) => {
  console.log(user);
};
</script>
