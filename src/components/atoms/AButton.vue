<template>
  <button
    class="atom__button"
    :class="
      classnames({
        'atom__button--fullwidth': fullWidth,
      })
    "
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { defineProps } from "vue";

defineProps({
  fullWidth: {
    type: Boolean,
    default: false,
  },
});
</script>
