<template>
  <div class="default-layout">
    <header>
      <h1>My App</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; 2023 My App</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
});
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
