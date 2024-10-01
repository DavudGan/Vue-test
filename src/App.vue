<script setup lang="ts">
import Header_Menu from "./components/UI/header_menu/Header_Menu.vue";
import "./App.css";

let id = 0;
const menuText = [
  { id: id++, text: "Home" },
  { id: id++, text: "Episodes" },
  { id: id++, text: "About" },
  { id: id++, text: "Contact" },
];
</script>

<template>
  <div class="header">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>

    <Header_Menu class="header_menu" :nameMenu="menuText" />
  </div>
</template>
