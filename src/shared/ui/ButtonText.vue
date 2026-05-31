<script setup lang="ts">
const props = defineProps(['title'])
</script>

<template>
    <div class="txt-btn">{{ title }}</div>
</template>

<style scoped>
    .txt-btn{
        background-color: #408a718c;
        border-radius: 5px;
        color: #b0e4cc8e;
        padding: 5px;
        cursor: pointer;
        font-size:large;
        font-weight: 500;
    }
    .txt-btn:hover{
        background-color: #b0e4cc70;
        color: #09141375;
    }
</style>