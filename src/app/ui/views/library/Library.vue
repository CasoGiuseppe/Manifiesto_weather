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
        <li data-label="direction column and max width" class="library--is-max">
          <BaseBadge id="column" :is="[IsBadge.COLUMN]" max-width="400px">
            <template #title>title</template>
            <template #payoff>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </template>
            <template #content><ChartBarIcon style="fill: white" /></template>
            <template #footer>
              <RouterLink :to="{}" class="link link--is-small">
                <DocumentDuplicateIcon />compare
              </RouterLink>
            </template>
          </BaseBadge>
        </li>
        <li data-label="direction row" class="library--is-max">
          <BaseBadge id="row" :is="[IsBadge.ROW]">
            <template #title>title</template>
            <template #payoff>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </template>
            <template #content><ChartBarIcon style="fill: white" /></template>
            <template #footer>
              <RouterLink :to="{}" class="link link--is-small">
                <DocumentDuplicateIcon />compare
              </RouterLink>
            </template>
          </BaseBadge>
        </li>
      </ul>
    </article>

    <!-- category: components: Weather Info -->
    <article class="library__category">
      <h2 class="library__title">Base Components: <span>Weather info</span></h2>
      <ul class="library__table">
        <li class="library--is-max library--is-negative">
          <BaseWeatherInfoVue>
            <template #place>Madrid<span>/Spain</span></template>
            <template #temperature>19<CloudIcon /></template>
            <template #date>04.11.2022</template>
            <template #min-max><EyeDropperIcon />15° - 19°</template>
            <template #user-title>don't forget the umbrella</template>
            <template #user-message>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            </template>
          </BaseWeatherInfoVue>
        </li>
      </ul>
    </article>

     <!-- category: components: table -->
     <article class="library__category">
      <h2 class="library__title">Base Components: <span>Table</span></h2>
      <ul class="library__table">
        <li
          class="library--is-max"
          data-label="direction column"
        >
          <BaseTable
            current="2"
            :head="table.head"
            :body="table.body"
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
                @send-click="tableEvent"
              >
                {{ component?.label}}
              </component>
            </template>
          </BaseTable>
        </li>
        <li
          class="library--is-max"
          data-label="direction row"
        >
          <BaseTable
            current="2"
            :head="table.head"
            :body="table.body"
            :is="[IsTable.ROW]"
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
                @send-click="tableEvent"
              >
                {{ component?.label}}
              </component>
            </template>
          </BaseTable>
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
      </ul>
    </article>
  </section>
</template>
<script setup lang="ts">
import { defineAsyncComponent, ref, reactive, shallowRef } from 'vue'
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"
import BaseInput from "@/app/ui/components/base/base-input/BaseInput.vue"
import BaseSelect from "@/app/ui/components/base/base-select/BaseSelect.vue"
import BaseBadge from "@/app/ui/components/base/base-badge/BaseBadge.vue"
import BaseWeatherInfoVue from '@/app/ui/components/base/base-weather-info/BaseWeatherInfo.vue'
import BaseTable from "@/app/ui/components/base/base-table/BaseTable.vue"

import Login from "@/app/ui/widgets/login/Login.vue"
import { Cog6ToothIcon, ChartBarIcon, DocumentDuplicateIcon, CloudIcon, EyeDropperIcon } from '@heroicons/vue/24/solid'
import { Is as IsButton } from '@/app/ui/components/base/base-button/types'
import { Is as IsInput } from '@/app/ui/components/base/base-input/types'
import { Is as IsBadge } from '@/app/ui/components/base/base-badge/types'
import { Is as IsTable } from '@/app/ui/components/base/base-table/types'

const placeholder = ref('Write your custom input')
const message = ref('default input value')
const wrong = ref('wrong input')
const correct = ref('correct input')

const options = [
  {value: '1', label: 'option 1'},
  {value: '2', label: 'option 2'},
  {value: '3', label: 'option 3'}
]

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

const tableEvent = ((id: string) => console.log(id))


</script>
<style lang="scss" src="./Library.scss" />