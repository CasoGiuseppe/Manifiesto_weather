<template>
  <section class="dashboard">
    <article class="dashboard--is-no-logged">
      <p class="dashboard__highlight">
        Welcome to our Weather dashboard
        <RouterLink :to="{name: 'sign'}" class="link link--is-simple">Sign in </RouterLink>
      </p>
    </article>
    <ul class="dashboard__charts">
        <li>
          <BaseBadge id="row" :is="[IsBadge.ROW]">
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
          <BaseBadge id="row" :is="[IsBadge.ROW]">
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
        <li class="dashboard__charts--is-expand">5</li>
      </ul>
  </section>
</template>
<script setup lang="ts">
  import BaseBadge from "@/app/ui/components/base/base-badge/BaseBadge.vue"
  import { Is as IsBadge } from '@/app/ui/components/base/base-badge/types'
  import { ChartBarIcon } from '@heroicons/vue/24/solid'
</script>
<style lang="scss" src="./Dashboard.scss" />