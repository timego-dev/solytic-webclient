<template>
  <ErrorMessage :name="name" class="atom__error-message" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { ErrorMessage } from "vee-validate";

defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
