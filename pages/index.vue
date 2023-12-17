<script setup>
const recipes = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},] // fetched from the api
</script>

<template>
    <SectionHero></SectionHero>
    <SectionItems :recipes="recipes"></SectionItems>
</template>
  