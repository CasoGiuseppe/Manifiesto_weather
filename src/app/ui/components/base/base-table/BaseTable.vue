<template>
  <section
    :class="[
      'base-table',
      cssCustomElementTypes
    ]"
  >
    <header class="base-table__header">
      <h2
        v-if="$slots['title']"
        class="base-table__title"
      >
        <slot name="title" />
      </h2>
      <p
        v-if="$slots['payoff']"
        class="base-table__payoff"
      >
        <slot name="payoff" />
      </p>
    </header>
    <table class="base-table__display">
      <thead class="base-table__head">
        <tr>
          <th
            v-for="(key) in head"
            :key="key"
          >
            <span class="base-table__head-label">
              <slot :property="key" name="head" />
            </span>
          </th>
        </tr>
      </thead>
      <tbody class="base-table__body">
        <tr
          v-for="row in body"
          :key="row.id"
          :class="[
            row.id === current ? 'base-table--is-current' : null
          ]"
        >
          <td
            v-for="{
              value,
              component,
              id,
              type
            } in row.values"
            :key="id"
            :class="type ? `base-table--is-${type}` : null"
          >
            <slot :property="{value, component}" name="cell" />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { Is } from './types';
import type { IRowValue } from './interfaces';

export interface ITableHead {
  head: string[],
  body: IRowValue[],
  is: Is[] | string[],
  current: string | undefined
}

const props = withDefaults(defineProps<ITableHead>(), {
  head: () => [],
  body: () => [],
  is: () => [Is.COLUMN],
  current: undefined
})

const cssCustomElementTypes = computed(() => {
  return props.is.length > 0 ? props.is.map((type) => `base-table--is-${type.toLocaleLowerCase()}`) : []
})

</script>
<style lang="scss" src="./BaseTable.scss" />