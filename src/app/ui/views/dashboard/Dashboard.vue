<template>
  <section class="dashboard">
    <article class="dashboard--is-no-logged">
      <p class="dashboard__highlight">
        Welcome to our Weather dashboard
        <RouterLink :to="{name: 'sign'}" class="link link--is-simple">Sign in </RouterLink>
      </p>
    </article>
  </section>
</template>
<style lang="scss" src="./Dashboard.scss" />