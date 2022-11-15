<template>
<aside class="panel" v-if="$route.name !== 'library'">
  <navigation class="panel-navigation">n</navigation>
  <section class="panel-content">
    <header class="panel__header">
      <RouterLink :to="{name: 'start'}">
        <h1 class="panel__logo"><SunIcon />Manifiesto Weather</h1>
      </RouterLink>
    </header>
    <slot name="component"></slot>
    <footer class="panel__footer">
      <AcademicCapIcon />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
    </footer>
  </section>
</aside>
</template>
<script setup lang="ts">
import { AcademicCapIcon, SunIcon } from '@heroicons/vue/24/solid';
</script>
<style lang="scss" src="./Panel.scss" />