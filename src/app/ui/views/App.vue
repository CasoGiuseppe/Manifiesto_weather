<template>
  <section
    :class="[
      ($route.name === 'library') ? 'layout--is-secondary' : null,
      getLoaderStoreState.value ? 'layout--is-loading layout--is-blocked' : null,
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
        <component
          v-if="route.meta.type !== 'library'"
          :is="Component"
          :key="route.meta.login"
          @user-logout="closeUserSession"
        >
          <template #component>
            <component
              :is="setComponent"
              :key="route.meta.type"
            >
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
import { defineAsyncComponent, computed, watch, shallowRef, provide } from "vue";
import { RouterView, useRoute, useRouter } from 'vue-router';
import { BASE_FIGMA_URL } from "@/app/shared/helpers/constants";

// UI
import { Is as IsButton } from '@/app/ui/components/base/base-button/types'
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"

// pinia
import { useAppBehavioursStore } from "@/app/shared/stores/app_behaviours";
import { storeToRefs } from "pinia";
import { userStore } from "@/domains/user/infrastructure/store/user"
import { weatherStore } from "@/domains/weather/infrastructure/store/weather";
import { chartStore } from "@/domains/visualizers/charts/shared/infrastructure/store/chart";
import { CHANGE_USER_STATE } from "@/domains/user/infrastructure/store/user/actions";
import { CHANGE_CURRENT_DAY, CHANGE_WEATHER_LIST } from "@/domains/weather/infrastructure/store/weather/actions";
import { REMOVE_CHARTS } from "@/domains/visualizers/charts/shared/infrastructure/store/chart/actions";

const components = {
  start: () => import("@/app/ui/widgets/login/Login.vue"),
  sign: () => import("@/app/ui/widgets/sign-in/SignIn.vue"),
  dashboard: () => import("@/app/ui/widgets/forecast-weather/ForecastWeather.vue")
}

const route = useRoute()
const router = useRouter()

// change dynamic panel component
const currentRouteName = computed(() => route.name)
const setComponent = shallowRef()
watch(() => route.meta.type, (value) => {
  if (value === 'library') return
  setComponent.value = defineAsyncComponent(components[currentRouteName.value as keyof typeof components])
})
  

// router handler for buttons anction
const bringLibrary = () => {router.push({ name: 'library'})}
const bringFigma = () => {
  const w = window.open(BASE_FIGMA_URL, '_blank');
  if (w) w.focus()
}

// store handler for loader state
const behavioursStore = useAppBehavioursStore();
const getLoaderStoreState = storeToRefs(behavioursStore).hasLoader;

const isLogged = storeToRefs(userStore).getUserLogged
provide("userLoggedState", isLogged)

// logout
const closeUserSession = () => {
  userStore[CHANGE_USER_STATE]({})
  weatherStore[CHANGE_WEATHER_LIST]()
  weatherStore[CHANGE_CURRENT_DAY]()
  chartStore[REMOVE_CHARTS]()
}
</script>
