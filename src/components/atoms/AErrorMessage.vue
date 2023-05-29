<template>
  <ErrorMessage :name="name" class="atom__error-message" />
</template>

<script setup lang="ts">
import { ErrorMessage } from "vee-validate";
import { defineProps } from "vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
