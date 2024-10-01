<script setup lang="ts">
import "./user_avatar.css";

defineProps<{
  imgUser: string;
  altText: string;
}>();
</script>

<template>
  <a href="#" target="_blank" class="user-avatar">
    <img :src="imgUser" :alt="altText" class="avatar" />
  </a>
</template>
