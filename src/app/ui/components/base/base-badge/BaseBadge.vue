<template>
  <article
    :class="[
      'base-badge',
      cssCustomElementTypes
    ]"
    :style="cssCustomVariables"
    :data-id="id"
  >
    <header class="base-badge__header">
      <h3
        v-if="$slots['title']"
        class="base-badge__title"
      >
        <slot name="title" />
      </h3>
      <p
        v-if="$slots['payoff']"
        class="base-badge__payoff"
      >
        <slot name="payoff" />
      </p>
    </header>
    <slot name="content" />
    <footer
      v-if="$slots['footer']"
      class="base-badge__footer"
    >
      <slot name="footer" />
    </footer>
  </article>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { Is } from './types';

export interface IBadge {
  id: string,
  is: Is[],
  maxWidth?: string
}

const props = withDefaults(defineProps<IBadge>(), {
  id: 'test',
  is: () => [],
  maxWidth: '100%'
})

const cssCustomElementTypes = computed(() => {
  return props.is.length > 0 ? props.is.map((type) => `base-badge--is-${type}`) : []
})

const cssCustomVariables = computed(() => {
  return {
    '--max-width': props.maxWidth
  }
})

</script>
<style lang="scss" src="./BaseBadge.scss" />