<template>
  <section
    :class="[
      ($route.name === 'library') ? 'layout--is-secondary' : null,
      'layout'
    ]">
    <!--
      behaiour: user panel
      visible: router name !== library
    -->
    <aside class="layout__panel">
      <navigation class="layout__panel-navigation">n</navigation>
      <section class="layout__panel-content">
        <header class="layout__panel__header">
          <SunIcon />
          Logo here
        </header>
        <RouterView name="panel" v-slot="{ Component }" :key="$route.path">
          <component :is="Component">
            <template #title>get started</template>
            <template #message>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</template>
          </component>
        </RouterView>
        <footer class="layout__panel__footer">
          <AcademicCapIcon />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
        </footer>
      </section>
    </aside>
    <!--
      behaiour: dashboard/component library
    -->
    <section class="layout__router-box">
      <!--
        behaiour: user login/logout
        visible: router name !== library
      -->
      <header class="layout__router-box__header">
        <RouterLink :to="{name: 'library'}">library</RouterLink>
        <a href="https://www.figma.com/proto/GzwexU2trMU1cyvRQnQlPx/Manifesto---Weather-test?page-id=0%3A1&node-id=24%3A22&viewport=668%2C369%2C1.18&scaling=scale-down&starting-point-node-id=6%3A5">Figma prototype</a>
      </header>
      <section class="layout__router-box__content">
        <RouterView />
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { provide, onBeforeMount } from "vue";
import { AcademicCapIcon, SunIcon } from '@heroicons/vue/24/solid';
import type { UserServices } from "@/domains/user/application/use-cases";
import { userService } from '@/domains/user';


onBeforeMount(() => {
  provide<UserServices>("userService", userService);
})
//onCreated(async () => {
  //provide<UserServices>("userService", userService);
  //const res = await userService?.getUserByLogin('test@gmail.com', '12345677')
  //console.log(res)
  //const res = await fetch(`${import.meta.env.VITE_APP_API_ENDPOINT}`)
  //const weather = await fetch(`https://api.brightsky.dev/current_weather?${new URLSearchParams({ lat: '51', lon: '7.38'})}`)
  //console.log(await res.json())
  //console.log(await weather.json())
//})

</script>
