<template>
  <section class="base-table">
    <table class="base-table__display">
      <thead class="base-table__head">
        <tr>
          <th v-for="(key) in head" :key="key">
            <span class="base-table__head-label">
              <slot :property="key" name="head" />
            </span>
          </th>
        </tr>
      </thead>
    </table>
  </section>
</template>
<script setup lang="ts">
export interface ITableHead {
  head: string[]
}

const props = withDefaults(defineProps<ITableHead>(), {
  head: () => [],
})
</script>
<style lang="scss" src="./BaseTable.scss" />