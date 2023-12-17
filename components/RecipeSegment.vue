<script setup>
const props = defineProps({
    recipeSegment: {
        type: Array,
        required: true,
    },
});
const { recipeSegment } = props;

</script>

<template>
    <div class="w-fit grid gap-2">
        <CommonCard v-for="recipe in recipeSegment"></CommonCard>
    </div>
</template>