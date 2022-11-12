<template>
  <section class="library">
    <h1 class="library__title">Library</h1>
    <!-- category: components -->
    <article class="library__category">
      <h2 class="library__title">Base Components: <span>Buttons</span></h2>
      <ul class="library__table">
        <li data-label="is primary"><BaseButton id="simple">primary</BaseButton></li>
        <li data-label="is secondary"><BaseButton id="secondary" :is="['secondary']">secondary</BaseButton></li>
        <li data-label="is secondary with icon"><BaseButton id="secondary-icon" :is="['secondary']"><Cog6ToothIcon/>secondary</BaseButton></li>
        <li data-label="is small"><BaseButton id="small" :is="['small']">small</BaseButton></li>
        <li data-label="is squared with icon"><BaseButton id="squared" :is="['squared']"><Cog6ToothIcon/></BaseButton></li>
        <li data-label="is squared small with icon"><BaseButton id="squared-small" :is="['squared', 'small']"><Cog6ToothIcon/></BaseButton></li>
        <li data-label="is rounded with icon"><BaseButton id="rounded" :is="['rounded']"><Cog6ToothIcon/></BaseButton></li>
        <li data-label="is rounded with icon and transparent" class="library__table--is-negative"><BaseButton id="rounded" :is="['rounded', 'transparent']"><Cog6ToothIcon/></BaseButton></li>
      </ul>
    </article>

     <!-- category: widgets -->
     <article class="library__category">
      <h2 class="library__title">Widgets</h2>
      <ul class="library__table">
        <li>1</li>
        <li>2</li>
      </ul>
    </article>
  </section>
</template>
<script setup lang="ts">
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'
</script>
<style lang="scss" src="./Library.scss" />