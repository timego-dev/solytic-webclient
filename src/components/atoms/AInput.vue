<template>
  <Field :name="name" :type="type" class="atom__input" />
</template>

<script setup lang="ts">
import { Field } from "vee-validate";
import { defineProps } from "vue";

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
});
</script>
