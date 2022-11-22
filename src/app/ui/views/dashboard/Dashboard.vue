<template>
  <section class="dashboard">
    <Transition
        mode="out-in"
        name="appear-extra-panel"
        appear
      >
      <ul
        class="dashboard__charts"
        v-if="isPageReady"
      >
        <li>
          <BaseBadge id="row" :is="[IsBadge.COLUMN]">
            <template #title>title</template>
            <template #payoff>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </template>
            <template #content><ChartBarIcon style="fill: white" /></template>
          </BaseBadge>
        </li>
        <li>
          <BaseBadge id="row" :is="[IsBadge.COLUMN]">
            <template #title>title</template>
            <template #payoff>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </template>
            <template #content><ChartBarIcon style="fill: white" /></template>
          </BaseBadge>
        </li>
        <li>
          <BaseBadge id="row" :is="[IsBadge.ROW]">
            <template #title>title</template>
            <template #payoff>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </template>
            <template #content><ChartBarIcon style="fill: white" /></template>
          </BaseBadge>
        </li>
        <li>
          <BaseBadge id="row" :is="[IsBadge.COLUMN]">
            <template #title>title</template>
            <template #payoff>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </template>
            <template #content><ChartBarIcon style="fill: white" /></template>
          </BaseBadge>
        </li>
        <li class="dashboard__charts--is-expand">5</li>
      </ul>

      <!-- log out user-->
      <article
        v-else
        class="dashboard--is-no-logged"
      >
        <p class="dashboard__highlight">
          Welcome to our Weather dashboard
          <RouterLink :to="{name: 'sign'}" class="link link--is-simple">Sign in </RouterLink>
        </p>
      </article>
    </Transition>
  </section>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { computed } from "vue";

// UI
import BaseBadge from "@/app/ui/components/base/base-badge/BaseBadge.vue"
import { Is as IsBadge } from '@/app/ui/components/base/base-badge/types'
import { ChartBarIcon } from '@heroicons/vue/24/solid'

// store
import { userStore } from "@/domains/user/infrastructure/store/user";
import { weatherStore } from "@/domains/weather/infrastructure/store/weather";

const isUserLogged = storeToRefs(userStore).getUserLogged
const hasWeatherList = storeToRefs(weatherStore).getWeatherList
const isPageReady = computed(() => {
  return [isUserLogged.value, hasWeatherList.value !== undefined].every(value => value === true)
})

</script>
<style lang="scss" src="./Dashboard.scss" />