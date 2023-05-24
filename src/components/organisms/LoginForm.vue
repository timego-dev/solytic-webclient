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
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

import FormField from "@/components/molecules/FormField.vue";
import AtomButton from "@/components/atoms/AButton.vue";

export interface ILoginData {
  email: string;
  password: string;
}

const schema = ref(
  yup.object().shape({
    email: yup.string().email("Invalid field!").required("Email is required!"),
    password: yup
      .string()
      .min(8, "Please input at least 8 characters!")
      .required("Password is required!"),
  })
);

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

const handleLogin = async (user: ILoginData) => {
  const { mutate } = useMutation(
    gql`
      mutation LoginUser($user: UserLoginInput!) {
        loginUser(user: $user) {
          user {
            id
          }
          accessToken {
            token
            tokenType
          }
        }
      }
    `,
    () => ({
      variables: {
        user,
      },
    })
  );

  await mutate();
};
</script>
