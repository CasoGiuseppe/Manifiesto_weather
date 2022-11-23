<template>
<aside v-if="$route.name !== 'library'"
  :class="[
    userLoggedState ? 'panel--is-logged' : null,
    'panel'
  ]"
>
  <nav class="panel-navigation">
    <BaseButton id="squared" :is="[IsButton.SQUARED, IsButton.SMALL]"><XCircleIcon/></BaseButton>
  </nav>
  <section class="panel-content">
    <header class="panel__header">
      <RouterLink :to="{name: 'start'}">
        <h1 class="panel__logo"><SunIcon />Manifiesto Weather</h1>
      </RouterLink>
    </header>
    <Transition
      mode="out-in"
      name="switch-component"
      appear
    >
      <article :key="currentRouteName" class="panel__switch">
        <slot name="component" />
      </article>
    </Transition>
    <footer class="panel__footer">
      <AcademicCapIcon />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
    </footer>
  </section>
</aside>
</template>
<script setup lang="ts">
import { computed, inject, } from "vue";
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"
import { AcademicCapIcon, SunIcon } from '@heroicons/vue/24/solid';
import { Is as IsButton } from '@/app/ui/components/base/base-button/types'
import { XCircleIcon } from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router';

const currentRouteName = computed(() => useRoute().name as string)
const userLoggedState = inject("userLoggedState")
</script>
<style lang="scss" src="./Panel.scss" />