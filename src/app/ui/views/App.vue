<template>
  <section
    :class="['root-layout bg-gray-500 phone:bg-gray-200 tablet-ld:bg-blue-200 p-lg phone:p-sm font-default text-base']"
  >
    <header class="root-layout__header">
      <h1>Starwars Heroes</h1>
    </header>

    <section class="root-layout__content">
      <RouterView />
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
