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
import { computed } from 'vue';
import type { Is } from './types';

export interface IButton {
  id: string,
  is: Is[],
  maxWidth?: string
}

const props = withDefaults(defineProps<IButton>(), {
  id: 'test',
  is: () => [],
  maxWidth: '100%'
})

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
 
