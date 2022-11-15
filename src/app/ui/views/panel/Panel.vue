<template>
<aside class="panel" v-if="$route.name !== 'library'">
  <navigation class="panel-navigation">
    <BaseButton id="squared" :is="[IsButton.SQUARED, IsButton.SMALL]"><XCircleIcon/></BaseButton>
  </navigation>
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
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"
import { AcademicCapIcon, SunIcon } from '@heroicons/vue/24/solid';
import { Is as IsButton } from '@/app/ui/components/base/base-button/types'
import { XCircleIcon } from '@heroicons/vue/24/solid'
</script>
<style lang="scss" src="./Panel.scss" />