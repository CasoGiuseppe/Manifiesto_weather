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
            current="2"
            :head="table.head"
            :body="table.body"
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
              >
                {{ component?.label}}
              </component>
            </template>
          </BaseTable>
        </li>
        <!-- end dynamic data-->
        <!--<li class="dashboard__charts--is-row-t__left">
          1
        </li>
        <li class="dashboard__charts--is-row-t__center">
          2
        </li>
        <li class="dashboard__charts--is-row-t__right">
          3
        </li>
        <li class="dashboard__charts--is-row-c__left-top">
          4
        </li>
        <li class="dashboard__charts--is-row-c__left-bottom">
          5
        </li>
        <li class="dashboard__charts--is-row-c__right">
          6
        </li>
        <li class="dashboard__charts--is-row-b">
          7
        </li>-->
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
import { defineAsyncComponent, shallowRef } from "vue";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

// UI
import BaseBadge from "@/app/ui/components/base/base-badge/BaseBadge.vue"
import BaseTable from "@/app/ui/components/base/base-table/BaseTable.vue"
import { ChartBarIcon } from '@heroicons/vue/24/solid'
import { Is as IsButton } from '@/app/ui/components/base/base-button/types'
import { Is as IsTable } from '@/app/ui/components/base/base-table/types'

// store
import { chartStore } from "@/domains/charts/infrastructure/store/chart";

// types
import { MODELS } from './types'

const chartModels = storeToRefs(chartStore).current


// temp data table
const table = shallowRef({
  head: ['uno', 'due', 'tre', 'quattro'],
  body: [
    {
      id: '1',
      values: [
        { 
          id: '001',
          type: 'bold',
          value: 'value001'
        },
        {
          id: '002',
          type: 'center',
          value: 'value002'
        },
        {
          id: '003',
          type: 'center',
          value: 'value003'
        },
        {
          id: '004',
          type: 'center',
          value: 'value004'
        },
        {
          id: '005',
          type: 'center',
          component: {
            type: defineAsyncComponent(() => import("@/app/ui/components/base/base-button/BaseButton.vue")),
            label: 'Details',
            properties: {
              id: '001',
              is: [IsButton.DEFAULT]
            }
          }
        },
      ]
    },
  ]
})
</script>
<style lang="scss" src="./Dashboard.scss" />