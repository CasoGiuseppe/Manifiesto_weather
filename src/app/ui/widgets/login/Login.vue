<template>
  <form class="login" onsubmit="return false;">
    <section class="login__header">
      <h2
        v-if="$slots['title']"
        class="login__title">
        <slot name="title"/>
      </h2>
      <p
        v-if="$slots['message']"
        class="login__message"
      >
        <slot name="message"/>
      </p>
    </section>

    <fieldset class="login__fields">
      <BaseInput
        placeholder="Write your enamil"
        v-model:input-model="email"
        :is="isCorrectEmail"
      />
      <BaseInput
        :type="Types.PASSWORD"
        placeholder="Your password"
        v-model:input-model="pwd"
      />
    </fieldset>

    <footer class="login__actions">
      <BaseButton
        id="email"
        :is="[IsButton.DEFAULT]"
        :disabled="fieldsEmptyState"
      >
        Login
      </BaseButton>
      <BaseButton
        id="pwd"
        :is="[IsButton.SECONDARY, IsButton.ICON]"
        :disabled="fieldsEmptyState"
      >
        <TvIcon/>Google
    </BaseButton>
    </footer>
  </form>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInput from "@/app/ui/components/base/base-input/BaseInput.vue"
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"
import { Types } from '@/app/ui/components/base/base-input/types'
import { Is as IsButton } from '@/app/ui/components/base/base-button/types'
import { Is as IsInput } from '@/app/ui/components/base/base-input/types'
import { TvIcon } from '@heroicons/vue/24/solid'
import { emailValidator} from '@/app/shared/helpers/validators'

// input models
const email = ref('')
const pwd = ref('')

// validations: buttons disabled state
const fieldsEmptyState = computed(() => {
  return [email.value, pwd.value].some(value => value === '')
})

// validations: email correct format
const isCorrectEmail = computed(() => {
  if (email.value === '') return []
  return emailValidator(email.value) ? [IsInput.WRONG] : [IsInput.CORRECT]
})
</script>
<style lang="scss" src="./Login.scss" />