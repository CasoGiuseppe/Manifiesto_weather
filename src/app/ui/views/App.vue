<template>
  <section class="layout">

    <!--
      behaiour: user panel
      visible: router name !== library
    -->
    <aside
      v-if="$route.name !== 'library'"
      class="layout__panel"
    >
      <navigation class="layout__panel-navigation">n</navigation>
      <section class="layout__panel-content">c</section>
    </aside>

    <!--
      behaiour: dashboard/component library
    -->
    <section class="layout__router-box">
      <!--
        behaiour: user login/logout
        visible: router name !== library
      -->
      <header
        v-if="$route.name !== 'library'"
        class="layout__router-box__header"
      >
        h
      </header>
      <section class="layout__router-box__content">
        <RouterView />
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(async () => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_ENDPOINT}`)
  const weather = await fetch(`https://api.brightsky.dev/current_weather?${new URLSearchParams({ lat: '51', lon: '7.38'})}`)
  console.log(await res.json())
  console.log(await weather.json())
})
</script>
