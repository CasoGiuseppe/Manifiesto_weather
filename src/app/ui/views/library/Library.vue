<template>
  <section class="library">
    <h1 class="library__title">Library</h1>
    <!-- category: components: buttons -->
    <article class="library__category">
      <h2 class="library__title">Base Components: <span>Buttons</span></h2>
      <ul class="library__table">
        <li data-label="is default"><BaseButton id="default" :is="[IsButton.DEFAULT]">default</BaseButton></li>
        <li data-label="is disabled"><BaseButton id="disabled" :is="[IsButton.DEFAULT]" disabled>disabled</BaseButton></li>
        <li data-label="has max width"><BaseButton id="disabled" :is="[IsButton.DEFAULT]" max-width="200px">max width: 200px</BaseButton></li>
        <li data-label="is secondary"><BaseButton id="secondary" :is="[IsButton.SECONDARY]">secondary</BaseButton></li>
        <li data-label="is secondary and disabled"><BaseButton id="secondary" :is="[IsButton.SECONDARY]" disabled>secondary</BaseButton></li>
        <li data-label="is secondary with icon"><BaseButton id="secondary-icon" :is="[IsButton.SECONDARY, IsButton.ICON]"><Cog6ToothIcon/>secondary</BaseButton></li>
        <li data-label="is small"><BaseButton id="small" :is="[IsButton.SMALL]">small</BaseButton></li>
        <li data-label="is squared with icon"><BaseButton id="squared" :is="[IsButton.SQUARED]"><Cog6ToothIcon/></BaseButton></li>
        <li data-label="is squared small with icon"><BaseButton id="squared-small" :is="[IsButton.SQUARED, IsButton.SMALL]"><Cog6ToothIcon/></BaseButton></li>
        <li data-label="is rounded with icon"><BaseButton id="rounded" :is="[IsButton.ROUNDED]"><Cog6ToothIcon/></BaseButton></li>
        <li data-label="is rounded with icon and transparent" class="library--is-negative"><BaseButton id="rounded" :is="[IsButton.ROUNDED, IsButton.TRANSPARENT]"><Cog6ToothIcon/></BaseButton></li>
      </ul>
    </article>

    <!-- category: components: input field -->
    <article class="library__category">
      <h2 class="library__title">Base Components: <span>Input field</span></h2>
      <ul class="library__table">
        <li data-label="is default"><BaseInput :placeholder="placeholder"/></li>
        <li data-label="is disabled"><BaseInput disabled :placeholder="placeholder"/></li>
        <li data-label="has max width"><BaseInput max-width="200px" :placeholder="placeholder"/></li>
        <li data-label="has default value"><BaseInput v-model:inputModel="message" :placeholder="placeholder"/></li>
        <li data-label="is wrong"><BaseInput v-model:inputModel="wrong" :is="[IsInput.WRONG]" :placeholder="placeholder"/></li>
        <li data-label="is correct"><BaseInput v-model:inputModel="correct" :is="[IsInput.CORRECT]" :placeholder="placeholder"/></li>
      </ul>
    </article>

    <!-- category: components: select -->
    <article class="library__category">
      <h2 class="library__title">Base Components: <span>Select</span></h2>
      <ul class="library__table">
        <li data-label="is default">
          <BaseSelect :options="options">
            <template #options="{ option: { label } }">
              {{ label }}
            </template>
          </BaseSelect>
        </li>
        <li data-label="is disabled">
          <BaseSelect disabled :options="options">
            <template #options="{ option: { label } }">
                {{ label }}
              </template>
          </BaseSelect>
        </li>
      </ul>
    </article>

    <!-- category: components: badge -->
    <article class="library__category">
      <h2 class="library__title">Base Components: <span>Badge</span></h2>
      <ul class="library__table">
        <li data-label="is default">
          <BaseBadge>
            
          </BaseBadge>
        </li>
      </ul>
    </article>

     <!-- category: widgets -->
     <article class="library__category">
      <h2 class="library__title">Widgets: <span>Login</span></h2>
      <ul class="library__table">
        <li class="library--is-negative library--is-max">
          <Login>
            <template #title>title</template>
            <template #message>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</template>
          </Login>
        </li>
        <li class="library--is-max">2</li>
        <li class="library--is-max">3</li>
        <li class="library--is-max">4</li>
      </ul>
    </article>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"
import BaseInput from "@/app/ui/components/base/base-input/BaseInput.vue"
import BaseSelect from "@/app/ui/components/base/base-select/BaseSelect.vue"
import BaseBadge from "@/app/ui/components/base/base-badge/BaseBadge.vue"
import Login from "@/app/ui/widgets/login/Login.vue"
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'
import { Is as IsButton } from '@/app/ui/components/base/base-button/types'
import { Is as IsInput } from '@/app/ui/components/base/base-input/types'

const placeholder = ref('Write your custom input')
const message = ref('default input value')
const wrong = ref('wrong input')
const correct = ref('correct input')

const options = [
  {value: '1', label: 'option 1'},
  {value: '2', label: 'option 2'},
  {value: '3', label: 'option 3'}
]
</script>
<style lang="scss" src="./Library.scss" />