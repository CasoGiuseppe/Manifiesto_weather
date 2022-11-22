<template>
  <section>
    <BaseWeatherInfo>
      <template #place>Madrid<span>/Spain</span></template>
      <template #temperature>{{getCurrentDay?.current.temperature}}<CloudIcon /></template>
      <template #date>{{getCurrentDay?.current.time}}</template>
      <template #min-max><EyeDropperIcon />{{ `${getCurrentDay?.current.min} - ${getCurrentDay?.current.max}`}}</template>
    </BaseWeatherInfo>
    <RouterLink :to="{path: `/dashboard/${getCurrentDay?.prev}`}">prev</RouterLink>
    <RouterLink :to="{path: `/dashboard/${getCurrentDay?.next}`}">next</RouterLink>
  </section>
</template>
<script setup lang="ts">
import BaseWeatherInfo from '@/app/ui/components/base/base-weather-info/BaseWeatherInfo.vue'
import { CloudIcon, EyeDropperIcon } from '@heroicons/vue/24/solid'
import { storeToRefs } from "pinia";
import { weatherStore } from "@/domains/weather/infrastructure/store/weather";

const getCurrentDay = storeToRefs(weatherStore).current;
</script>