<!-- app.vue -->
<script>

import sideBarView from './views/side-Bar-View.vue'
import searchBarView from './views/Search-bar.vue'
export default {
  components: {
    sideBarView,
    searchBarView,
  },
};
</script>

<template>
  <div id="app">
    <header>
      <sideBarView></sideBarView>
    </header>

    <main>
      <searchBarView></searchBarView>
      <router-view />
    </main>

    <footer></footer>
  </div>
</template>