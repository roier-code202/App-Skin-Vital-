<template>
  <div id="app">
    <router-view />
    <MobileNav />
  </div>
</template>

<script>
import MobileNav from '@/components/MobileNav.vue';

export default {
  name: 'App',
  components: { MobileNav },
};
</script>