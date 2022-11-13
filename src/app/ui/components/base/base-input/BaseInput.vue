<template>
  <input
    :type="type"
    :data-id="id"
    :placeholder="placeholder"
    :value="inputModel"
    :class="[
      'base-input',
      cssCustomElementTypes
    ]"
    :style="cssCustomVariables"
    @input="update"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { Types, type Is } from './types';

export interface IButton {
  id?: string,
  type?: Types,
  placeholder?: string,
  is?: Is[],
  inputModel?: string | null,
  maxWidth?: string,
}

const props = withDefaults(defineProps<IButton>(), {
  id: 'test',
  type: Types.TEXT,
  placeholder: 'placeholder',
  is: () => [],
  inputModel: '',
  maxWidth: '100%'
})

const cssCustomElementTypes = computed(() => {
  return props.is.length > 0 ? props.is.map((type) => `base-input--is-${type}`) : []
})

const cssCustomVariables = computed(() => {
  return { '--max-width': props.maxWidth }
})

const updateEmit = defineEmits(["update:inputModel"]);
const update = (e:Event) => updateEmit("update:inputModel", (e.target as HTMLInputElement).value);
</script>
<style lang="scss" src="./BaseInput.scss" />