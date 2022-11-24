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
        <li class="
          dashboard__charts__box
          dashboard__charts--is-25
        ">
          <BaseBadge
            id="min/max"
            :is="[IsBadge.COLUMN]"
          >
            <template #title>Min/Max</template>
          </BaseBadge>
        </li>
        <li
          :class="[
            `dashboard__charts--is-${MODELS[key.toLocaleLowerCase() as keyof typeof MODELS]?.class}`,
            'dashboard__charts__box'
          ]"
          v-for="key in Object.keys(chartModels)"
        >
          <BaseBadge
            :id="key"
            :is="[MODELS[key.toLocaleLowerCase() as keyof typeof MODELS]?.direction || 'Row']"
          >
            <template #title><ChartBarIcon style="fill: white" />{{MODELS[key.toLocaleLowerCase() as keyof typeof MODELS].heading}}</template>
            <template #payoff>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </template>
            <template #chart>
              <apexchart
                :type="MODELS[key.toLocaleLowerCase() as keyof typeof MODELS]?.chart?.type"
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
import { ChartBarIcon } from '@heroicons/vue/24/solid'


// store
import { chartStore } from "@/domains/charts/infrastructure/store/chart";

// types
import { MODELS } from './types'

const chartModels = storeToRefs(chartStore).current

</script>
<style lang="scss" src="./Dashboard.scss" />