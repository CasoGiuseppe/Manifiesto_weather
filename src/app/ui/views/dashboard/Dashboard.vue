<template>
  <section class="dashboard">
    <Transition
        mode="out-in"
        name="appear-extra-panel"
        appear
      >
      <ul
        v-if="Object.keys(chartModels).length > 0"
        class="dashboard__charts"
      >
        <!-- dynamic data -->
        <li
          v-for="key in Object.keys(chartModels)"
          :class="[
            `dashboard__charts--is-row-${MODELS[key.toLocaleLowerCase() as keyof typeof MODELS]?.class}`,
          ]"
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
        <li class="dashboard__charts--is-row-c__right">
          <BaseTable
            :current="route.params.id"
            :head="weatherTableModel.head"
            :body="weatherTableData.body"
            :is="[IsTable.COLUMN]"
          >
            <template #title>weather <span>forecast</span></template>
            <template #payoff>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </template>
            <template #head="{property}">
              {{ property}}
            </template>
            <template #cell="{property: {value, component}}">
              {{ value}}
              <component
                :is="component?.type"
                v-bind="component?.properties"
                @send-click="changeWeatherDay"
              >
                {{ component?.label}}
              </component>
            </template>
          </BaseTable>
        </li>
        <!-- end dynamic data-->
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
import { computed, defineAsyncComponent, shallowRef, watch } from "vue";
import { storeToRefs } from "pinia";
import { RouterLink, useRoute, useRouter } from "vue-router";

// UI
import BaseBadge from "@/app/ui/components/base/base-badge/BaseBadge.vue"
import BaseTable from "@/app/ui/components/base/base-table/BaseTable.vue"
import { ChartBarIcon } from '@heroicons/vue/24/solid'
import { Is as IsButton } from '@/app/ui/components/base/base-button/types'
import { Is as IsTable } from '@/app/ui/components/base/base-table/types'

// store
import { chartStore } from "@/domains/charts/infrastructure/store/chart";
import { weatherStore } from "@/domains/weather/infrastructure/store/weather";

// types
import { MODELS } from './types'

const chartModels = storeToRefs(chartStore).current
const weatherModel = storeToRefs(weatherStore).weather || []

type WeatherParse = string[]

const weatherParse: WeatherParse = ['precipitation', 'relative_humidity', 'wind_speed', 'cloud_cover', 'temperature']
let weatherTableModel = shallowRef({
  head: ['Date', 'Rain', 'Humidity', 'Wind', 'Cloud', 'Degrees'],
  body: []
})
const weatherTableData = computed(() => weatherTableModel).value

const route = useRoute()
const router = useRouter()

watch(() => weatherModel.value, (model) => {
  weatherTableModel.value.body = JSON.parse(JSON.stringify(model || [])).map((node: Record<string, any>) => {
      return {
        id: node.id,
        values:[
          {
            id: node.id,
            type: 'bold',
            value: node.time
          },
          ...weatherParse.map((type: string) => {
            return {
              id: type,
              type: 'center',
              value: Math.floor(node.forecastDay.map((day: any) => {
                return day[type]
              }).reduce((partial: number, value: number) => partial + value, 0) / node.forecastDay.length)
            }
          }),
          {
            id: node.id,
            type: 'center',
            component: {
              type: defineAsyncComponent(() => import("@/app/ui/components/base/base-button/BaseButton.vue")),
              label: 'Details',
              properties: {
                id: node.id,
                is: [IsButton.DEFAULT]
              }
            }
          },
        ]
      }
    })
}, {
  immediate: true
})

const changeWeatherDay = (id: string) => router.push({name: 'dashboard', params: {id}})
</script>
<style lang="scss" src="./Dashboard.scss" />