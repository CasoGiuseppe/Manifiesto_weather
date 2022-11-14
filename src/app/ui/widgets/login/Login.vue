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
        v-model:input-model="email.label"
        :is="email.state()"
      />
      <BaseInput
        :type="Types.PASSWORD"
        placeholder="Your password"
        v-model:input-model="pwd.label"
        :is="pwd.state()"
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
import { reactive, computed } from 'vue'
import BaseInput from "@/app/ui/components/base/base-input/BaseInput.vue"
import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"
import { Types } from '@/app/ui/components/base/base-input/types'
import { Is as IsButton } from '@/app/ui/components/base/base-button/types'
import { Is as IsInput } from '@/app/ui/components/base/base-input/types'
import { TvIcon } from '@heroicons/vue/24/solid'
import { emailValidator, fieldLengthValidator} from '@/app/shared/helpers/validators'
import { MIN_PWD_REQUIRED } from '@/app/shared/helpers/constants'

interface IReactive {
  label: string
  state: any
  error: boolean | undefined
}

// input models
const email:IReactive = reactive({
  label: '',
  state: () => {
    if(email.error === undefined) return []
    return email.error ? [IsInput.WRONG] : [IsInput.CORRECT]
  },
  error: computed(() => emailValidator(email.label)),
})

const pwd:IReactive = reactive({
  label: '',
  state: () => {
    if(pwd.error === undefined) return []
    return pwd.error ? [IsInput.WRONG] : [IsInput.CORRECT]
  },
  error: computed(() => fieldLengthValidator(pwd.label, MIN_PWD_REQUIRED))
})

// validations: all fields are filled with correct format
const fieldsEmptyState = computed(() => {
  const validator = [[email.label, pwd.label].some(value => value === ''), email.error, pwd.error]
  return validator.some((value: boolean | undefined) => value)
})

</script>
<style lang="scss" src="./Login.scss" />