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
import AtomButton from "@/components/atoms/AButton.vue";
import FormField from "@/components/molecules/FormField.vue";
import { useAuthStore } from "@/store";
import { ILoginData } from "@/type";
import { storeToRefs } from "pinia";
import { Form } from "vee-validate";
import { ref } from "vue";
import { useRouter } from "vue-router";
import * as yup from "yup";

const authStore = useAuthStore();
const { login } = authStore;
const { user } = storeToRefs(authStore);

const router = useRouter();

const schema = ref(
  yup.object().shape({
    email: yup.string().email("Invalid field!").required("Email is required!"),
    password: yup
      .string()
      .min(8, "Please input at least 8 characters!")
      .required("Password is required!"),
  })
);

const handleLogin = async (userData: ILoginData) => {
  await login(userData);
  await router.push("/");
  localStorage.setItem("user", JSON.stringify(user.value));
};

const loginFields = [
  {
    name: "email",
    type: "email",
    icon: "user",
  },
  {
    name: "password",
    type: "password",
    icon: "lock",
  },
];
</script>
