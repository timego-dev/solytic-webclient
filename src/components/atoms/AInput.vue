<template>
  <Field :name="name" :type="type" class="atom__input" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Field } from "vee-validate";

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
