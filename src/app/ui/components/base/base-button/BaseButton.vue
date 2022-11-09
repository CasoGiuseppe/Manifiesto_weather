<template>
  <button
    :class="[
      `base-button--is-${mode}`,
      isSecondary ? 'base-button--is-secondary' : null,
      isWarning ? 'base-button--is-warning' : null,
      'base-button wiggle',
    ]"
    :data-id="id"
    :disabled="isDisabled"
    @click="handleClick(id)"
  >
    <span class="base-button__label">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: [String, Number],
    default: "test",
  },
  mode: {
    type: String,
    default: "basic",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isSecondary: {
    type: Boolean,
    default: false,
  },
  isWarning: {
    type: Boolean,
    default: false,
  },
  extraInfo: [String, Number],
});

const clickEmit = defineEmits(["handleClick"]);
const handleClick = (id: string | number) => clickEmit("handleClick", id);
</script>
<style lang="scss" src="./BaseButton.scss" />
