<template>
  <select
    :class="['base-select']"
    :data-id="id"
  >
    <option
      v-for="option in options"
      :value="option['value']"
    >
      <slot :option="option" name="options" />
    </option>
  </select>
</template>

<script setup lang="ts">
export interface Options {
  value: string | number
  label: string
}

export interface ISelect {
  id?: string
  options: Options[]
}

withDefaults(defineProps<ISelect>(), {
  id: 'test',
  options: () => [{value: '', label: ''}]
})
</script>
<style lang="scss" src="./BaseSelect.scss" />