<template>
  <div class="m-form-field">
    <div class="form-input-wrapper">
      <a-input-icon v-if="icon">
        <font-awesome-icon :icon="icon" />
      </a-input-icon>
      <a-input :name="name" :type="type" />
    </div>
    <a-error-message :name="name" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import AInputIcon from "@/components/atoms/AInputIcon.vue";
import AInput from "@/components/atoms/AInput.vue";
import AErrorMessage from "@/components/atoms/AErrorMessage.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["text", "email", "password"],
    default: "text",
  },
  icon: {
    type: String,
  },
});
</script>
