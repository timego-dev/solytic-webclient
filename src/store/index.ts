import apolloClient from "@/apollo.client";
import { ILoginData, IUserData } from "@/type";
import { useMutation } from "@vue/apollo-composable";
import { provideApolloClient } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { defineStore } from "pinia";

provideApolloClient(apolloClient);

export const useAuthStore = defineStore({
  id: "auth",

  state(): {
    user: IUserData | null;
  } {
    return {
      user: null,
    };
  },
  getters: {},
  actions: {
    setUser(user: IUserData) {
      this.user = user;
    },
    async login(user: ILoginData) {
      const { mutate } = useMutation(
        gql`
          mutation LoginUser($user: UserLoginInput!) {
            loginUser(user: $user) {
              user {
                id
                name
                email
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
          update: (store, { data }) => {
            if (data) {
              this.user = data.loginUser.user;
            }
          },
        })
      );

      await mutate();
    },
  },
});
