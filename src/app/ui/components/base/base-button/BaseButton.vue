<template>
  <button
    :class="[
      (is.length > 0) ? `${is.map((type) => `base-button--is-${type}`).join(' ')}` : null,
      'base-button',
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
  is: {
    type: Array,
    default: [],
    validator(value: string[]) {
      const matchArray = ['secondary', 'small']
      return value.length > 0 ? matchArray.some(node => value.includes(node)) : true
    }
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isSecondary: {
    type: Boolean,
    default: false,
  },
  isSmall: {
    type: Boolean,
    default: false,
  },
});

const clickEmit = defineEmits(["handleClick"]);
const handleClick = (id: string | number) => clickEmit("handleClick", id);
</script>
<style lang="scss" src="./BaseButton.scss" />
