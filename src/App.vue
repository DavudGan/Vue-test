<script setup lang="ts">
import HeaderMenu from "./components/ui/header_menu/header_menu.vue";
import UserAvatar from "./components/ui/user_avatar/user_avatar.vue";
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

    <HeaderMenu class="header_menu" :nameMenu="menuText" />
    <UserAvatar
      :imgUser="'https://img.freepik.com/free-photo/girl-with-backpack-sunset-generative-al_169016-28612.jpg?t=st=1727773831~exp=1727777431~hmac=c056dd950dd6c8c69ef1c1caf183af7c586d7f94a06a91b37dc5664e5c7e8146&w=1380'"
      :altText="'UserAvatar'"
    />
  </div>
</template>
