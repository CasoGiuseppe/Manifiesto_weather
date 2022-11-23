<template>
  <section class="dashboard">
    <Transition
        mode="out-in"
        name="appear-extra-panel"
        appear
      >
      <ul
        class="dashboard__charts"
        v-if="Object.keys(chartModels).length > 0"
      >
        <li
          :class="[
            `dashboard__charts--is-${MODELS[key.toLocaleLowerCase() as keyof typeof MODELS]?.class}`
          ]"
          v-for="key in Object.keys(chartModels)"
        >
          <BaseBadge id="row" :is="[IsBadge.COLUMN]">
            <template #title>{{MODELS[key.toLocaleLowerCase() as keyof typeof MODELS].heading}}</template>
            <template #payoff>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </template>
            <template #content>
              <apexchart
                :type="MODELS[key.toLocaleLowerCase() as keyof typeof MODELS]?.chart.type"
                :options="Object.assign(MODELS[key.toLocaleLowerCase() as keyof typeof MODELS], {labels: chartModels[key].labels || {}, xaxis: chartModels[key].xaxis || {}})"
                :series="chartModels[key].series">
              </apexchart>
            </template>
          </BaseBadge>
        </li>
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

// UI
import BaseBadge from "@/app/ui/components/base/base-badge/BaseBadge.vue"
import { Is as IsBadge } from '@/app/ui/components/base/base-badge/types'

// store
import { chartStore } from "@/domains/charts/infrastructure/store/chart";

// types
import { MODELS } from './types'

const chartModels = storeToRefs(chartStore).current

</script>
<style lang="scss" src="./Dashboard.scss" />