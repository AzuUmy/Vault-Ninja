<!-- app.vue -->
<script>

import sideBarView from './views/side-Bar-View.vue'
export default {
  components: {
    sideBarView,
  },
};
</script>

<template>
  <div id="app">
    <header>
      <sideBarView></sideBarView>
    </header>

    <main>
      <router-view />
    </main>

    <footer></footer>
  </div>
</template>