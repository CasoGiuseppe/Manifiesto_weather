<template>
  <button
    :class="[
      'base-button',
      cssCustomElementTypes
    ]"
    :style="cssCustomVariables"
    :data-id="id"
    @click="handleClick(id)"
  >
    <span class="base-button__label">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: [String, Number],
    default: "test",
  },
  is: {
    type: Array,
    default: [],
    validator(value: string[]) {
      const matchArray: string[] = ['default', 'secondary', 'small', 'squared', 'rounded', 'transparent']
      return value.length > 0 ? matchArray.some((node:string) => value.includes(node)) : true
    }
  },
  maxWidth: {
    type: String,
    default: "100%"
  }
});

const cssCustomElementTypes = computed(() => {
  return props.is.length > 0 ? props.is.map((type) => `base-button--is-${type}`) : []
})

const cssCustomVariables = computed(() => {
  return {
    '--max-width': props.maxWidth
  }
})

const clickEmit = defineEmits(["handleClick"]);
const handleClick = (id: string | number) => clickEmit("handleClick", id);
</script>
<style lang="scss" src="./BaseButton.scss" />
 
