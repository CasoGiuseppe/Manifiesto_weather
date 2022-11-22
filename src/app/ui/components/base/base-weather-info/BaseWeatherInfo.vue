<template>
  <article class="base-weather-info">
    <h3
      v-if="$slots['place']"
      class="base-weather-info__place">
      <slot name="place" />
      <span
        v-if="$slots['icon']"
        class="base-weather-info__icon"
      >
      <slot name="icon" />
      </span>
    </h3>
    <h2
      v-if="$slots['temperature']"
      class="base-weather-info__temperature"
    >
      <span class="base-weather-info__temperature-label"><slot name="temperature" /></span>
    </h2>
    <ul class="base-weather-info__more">
      <li v-if="$slots['date']">
        Forecast
        <span>
          <slot name="date" />
        </span>
      </li>
      <li v-if="$slots['min-max']">
        <slot name="min-max" />
      </li>
    </ul>
    <footer class="base-weather-info__user-payoff">
      <h3
        v-if="$slots['user-title']"
        class="base-weather-info__user-title"
      >
        <slot name="user-title" />
      </h3>
      <p
        v-if="$slots['user-message']"
        class="base-weather-info__user-message"
      >
        <slot name="user-message" />
      </p>
    </footer>
  </article>
</template>
<script setup lang="ts"></script>
<style lang="scss" src="./BaseWeatherInfo.scss" />