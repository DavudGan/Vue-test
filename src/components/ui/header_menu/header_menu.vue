<script setup lang="ts">
import "./Header_Menu.css";

defineProps<{
  nameMenu: { id: number; text: string, [key: string]: any}[];
}>();

</script>

<template>
  <nav>
    <ul class="text">
      <li v-for="menu in nameMenu" :key="menu.id">
        <button>{{ menu.text }}</button>
      </li>
    </ul>
  </nav>

</template>
