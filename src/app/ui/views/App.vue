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
    
    <RouterView name="panel" v-slot="{ Component, route }">
      <Transition
        mode="out-in"
        name="appear-extra-panel"
        appear
      >
        <component :is="Component" :key="route.meta.login" v-if="route.name !== 'library'">
          <template #component>
            <component :is="setComponent" :key="route.name">
              <template #title>get started</template>
              <template #message>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</template>
            </component>
          </template>
        </component>
      </Transition>
    </RouterView>

    <!--
      behaiour: dashboard/component library
    -->
    <section class="layout__router-box">
      <!--
        behaiour: user login/logout
        visible: router name !== library
      -->
      <header class="layout__router-box__header">
        <BaseButton id="library" @send-click="bringLibrary" :is="[IsButton.SMALL]">Library</BaseButton>
        <BaseButton id="figma" @send-click="bringFigma" :is="[IsButton.SMALL, IsButton.SECONDARY]">Figma prototype</BaseButton>
      </header>
      <section class="layout__router-box__content">
        <RouterView />
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { provide, onBeforeMount, defineAsyncComponent, computed, } from "vue";
import { useRoute, useRouter } from 'vue-router';
import type { UserServices } from "@/domains/user/application/use-cases";
import { UseUserService, UseWeatherService } from '@/domains';
import { Is as IsButton } from '@/app/ui/components/base/base-button/types'
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"

const components = {
  start: () => import("@/app/ui/widgets/login/Login.vue"),
  sign: () => import("@/app/ui/widgets/sign-in/SignIn.vue")
}

const currentRouteName = computed(() => useRoute().name)
const setComponent = computed(() => defineAsyncComponent(components[currentRouteName.value as keyof typeof components]))
provide<UserServices>("UseUserService", UseUserService);
  
onBeforeMount(async () => {
  console.log(await UseWeatherService.getWeatherForecastData())
  //console.log(await fetch(`https://api.brightsky.dev/current_weather?${new URLSearchParams({ lat: '51', lon: '7.38'})}`))
  // 
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

const router = useRouter()
const bringLibrary = () => {router.push({ name: 'library'})}
const bringFigma = () => {
  const url = "https://www.figma.com/proto/GzwexU2trMU1cyvRQnQlPx/Manifesto---Weather-test?page-id=0%3A1&node-id=24%3A22&viewport=668%2C369%2C1.18&scaling=scale-down&starting-point-node-id=6%3A5"
  const w = window.open(url, '_blank');
  if (w) w.focus()
}
</script>
