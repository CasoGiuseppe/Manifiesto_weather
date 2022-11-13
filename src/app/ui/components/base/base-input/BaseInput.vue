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
const props = defineProps({
  id: {
    type: [String, Number],
    default: "test",
  },
  type: {
    type: String,
    default: "text",
    validator(value: string) {
      const matchArray: string[] = ['text', 'password']
      return matchArray.includes(value)
    }
  },
  placeholder: {
    type: String,
    default: "placeholder",
  },
  is: {
    type: Array,
    default: [],
    validator(value: string[]) {
      const matchArray: string[] = ['correct', 'wrong']
      return value.length > 0 ? matchArray.some((node:string) => value.includes(node)) : true
    }
  },
  inputModel: {
    type: String
  },
  maxWidth: {
    type: String,
    default: "100%"
  }
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