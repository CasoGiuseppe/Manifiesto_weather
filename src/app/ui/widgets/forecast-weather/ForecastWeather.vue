<template>
  <section>
    <BaseWeatherInfo>
      <template #place>Madrid<span>/Spain</span></template>
      <template #temperature>{{current.temperature}}<CloudIcon /></template>
      <template #date>{{current.time}}</template>
      <template #min-max><EyeDropperIcon />{{ `${current.min} - ${current.max}`}}</template>
    </BaseWeatherInfo>
    {{prevDay}} {{ nextDay }}<br>
    <RouterLink v-if="prevDay" :to="{path: `/dashboard/${prevDay}`}">prev</RouterLink>
    <RouterLink v-if="nextDay" :to="{path: `/dashboard/${nextDay}`}">next</RouterLink>
  </section>
</template>
<script setup lang="ts">
import { inject, onBeforeMount, watch } from 'vue';
import { onBeforeRouteUpdate, RouterLink } from 'vue-router';
import BaseWeatherInfo from '@/app/ui/components/base/base-weather-info/BaseWeatherInfo.vue'
import { CloudIcon, EyeDropperIcon } from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router';

// set emit to launch on mounted and router change
const loadEmit = defineEmits(["upload:day"]);

// set inject to recive data from APP
const nextDay = inject('nextDay') as string
const prevDay = inject('prevDay') as string
const current = inject('current') as Record<string, any>

const route = useRoute()

// life cycle
onBeforeRouteUpdate((to, from) => {
  console.log('params', to.params.id)
  loadEmit("upload:day", to.params.id)
})


onBeforeMount(() => {
  console.log('mount')
  loadEmit("upload:day")
})

</script>