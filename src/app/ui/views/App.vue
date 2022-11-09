<template>
  <section class="layout">

    <aside class="layout__panel">
      <navigation class="layout__panel-navigation">n</navigation>
      <section class="layout__panel-content">c</section>
    </aside>
    <section class="layout__router-box">
      <header class="layout__router-box__header">h</header>
      <section class="layout__router-box__content">
        <BaseButton>button</BaseButton><br><br>
        <BaseButton :is="['secondary']">secondary</BaseButton><br><br>
        <BaseButton :is="['small']">button</BaseButton><br><br>
      </section>
      <!--<RouterView />-->
    </section>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue" 

onMounted(async () => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_ENDPOINT}`)
  const weather = await fetch(`https://api.brightsky.dev/current_weather?${new URLSearchParams({ lat: '51', lon: '7.38'})}`)
  console.log(await res.json())
  console.log(await weather.json())
})
</script>
