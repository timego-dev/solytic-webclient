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
import { defineProps } from "vue";
import classnames from "classnames";

defineProps({
  fullWidth: {
    type: Boolean,
    default: false,
  },
});
</script>
