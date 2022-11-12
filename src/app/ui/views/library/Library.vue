<template>
  <section class="library">
    <h1 class="library__title">Library</h1>
    <!-- category: components: buttons -->
    <article class="library__category">
      <h2 class="library__title">Base Components: <span>Buttons</span></h2>
      <ul class="library__table">
        <li data-label="is default"><BaseButton id="simple">default</BaseButton></li>
        <li data-label="is disabled"><BaseButton id="disabled" disabled>disabled</BaseButton></li>
        <li data-label="is secondary"><BaseButton id="secondary" :is="['secondary']">secondary</BaseButton></li>
        <li data-label="is secondary and disabled"><BaseButton id="secondary" :is="['secondary']" disabled>secondary</BaseButton></li>
        <li data-label="is secondary with icon"><BaseButton id="secondary-icon" :is="['secondary', 'icon']"><Cog6ToothIcon/>secondary</BaseButton></li>
        <li data-label="is small"><BaseButton id="small" :is="['small']">small</BaseButton></li>
        <li data-label="is squared with icon"><BaseButton id="squared" :is="['squared']"><Cog6ToothIcon/></BaseButton></li>
        <li data-label="is squared small with icon"><BaseButton id="squared-small" :is="['squared', 'small']"><Cog6ToothIcon/></BaseButton></li>
        <li data-label="is rounded with icon"><BaseButton id="rounded" :is="['rounded']"><Cog6ToothIcon/></BaseButton></li>
        <li data-label="is rounded with icon and transparent" class="library__table--is-negative"><BaseButton id="rounded" :is="['rounded', 'transparent']"><Cog6ToothIcon/></BaseButton></li>
      </ul>
    </article>

    <!-- category: components: input field -->
    <article class="library__category">
      <h2 class="library__title">Base Components: <span>Input field</span></h2>
      <ul class="library__table">
        <li data-label="is default"><BaseInput/></li>
        <li data-label="is disabled"><BaseInput disabled/></li>
        <li data-label="has default value"><BaseInput v-model:inputModel="message"/></li>
        <li data-label="is wrong"><BaseInput v-model:inputModel="message" :is="['wrong']"/></li>
        <li data-label="is wrong"><BaseInput v-model:inputModel="message" :is="['correct']"/></li>
      </ul>
    </article>

     <!-- category: widgets -->
     <article class="library__category">
      <h2 class="library__title">Widgets</h2>
      <ul class="library__table">
        <li>1</li>
        <li>2</li>
      </ul>
    </article>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"
import BaseInput from "@/app/ui/components/base/base-input/BaseInput.vue"
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'

const message = ref('default input value')
</script>
<style lang="scss" src="./Library.scss" />