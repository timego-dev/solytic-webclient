<template>
  <div class="homepage">
    <button @click="handleLogOut">Log Out</button>
    <table>
      <thead>
        <tr>
          <th colspan="2">User</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ID:</td>
          <td>{{ user?.id }}</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{{ user?.name }}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{{ user?.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const { user } = storeToRefs(authStore);

const handleLogOut = () => {
  localStorage.clear();
  router.push("/login");
};
</script>

<style lang="scss">
.homepage {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;

  button {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

  table {
    thead {
    }

    tr {
      td {
        text-align: left;
      }
    }
  }
}
</style>
