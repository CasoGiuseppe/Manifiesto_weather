<template>
  <section class="forecast-weather">
    <Transition
        mode="out-in"
        name="current-day-change"
      >
      <section
        :key="getCurrentDay?.current.time"  
        class="forecast-weather__switch"
      >
        <BaseWeatherInfo>
          <template #place>{{getCurrentDay?.current.place}}<span>/Spain</span></template>
          <template #temperature>{{getCurrentDay?.current.temperature}}</template>
          <template #icon><CloudIcon /></template>
          <template #date>{{getCurrentDay?.current.time}}</template>
          <template #min-max><EyeDropperIcon />{{ `${getCurrentDay?.current.min} - ${getCurrentDay?.current.max}`}}</template>
          <template #user-title>don't forget the umbrella</template>
          <template #user-message>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            </template>
        </BaseWeatherInfo>
      </section>
    </Transition>
    <BaseButton
      :id="getCurrentDay?.prev"
      :is="[IsButton.ROUNDED]"
      @send-click="navigateToDay"
    >
      <ChevronLeftIcon/>
    </BaseButton>

    <BaseButton
      :id="getCurrentDay?.next"
      :is="[IsButton.ROUNDED]"
      @send-click="navigateToDay"
    >
      <ChevronRightIcon/>
    </BaseButton>
  </section>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { storeToRefs } from "pinia";

import BaseWeatherInfo from '@/app/ui/components/base/base-weather-info/BaseWeatherInfo.vue'
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"
import { Is as IsButton } from '@/app/ui/components/base/base-button/types'

import { CloudIcon, EyeDropperIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid'
import { weatherStore } from "@/domains/weather/infrastructure/store/weather";

const router = useRouter()
const getCurrentDay = storeToRefs(weatherStore).current;

const navigateToDay = (id: string) => router.push({path: `/dashboard/${id}`})
</script>
<style lang="scss" src="./ForecastWeather.scss" />