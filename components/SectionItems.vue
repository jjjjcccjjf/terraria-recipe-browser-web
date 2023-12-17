<script setup>
const props = defineProps({
    recipes: {
        type: Array,
        required: true,
    },
});
const { recipes } = props;

// manupilate the array here.
// for now we'll use a fake one

const recipeSegments = [
    [{}, {}, {},],
    [{}, {}, {},],
    [{}, {}, {},],
    [{}, {}, {},],
]
// this array should always be four items
// then we'll lay it out on a grid of section items
</script>

<template>
    <section
        class="grid grid-cols-1 md:grid-cols-2 gap-y-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center md:py-16 lg:py-8  w-fit gap-2 mx-auto">
        <!-- 2xl:grid-cols-5 -->
        <RecipeSegment :recipeSegment="recipeSegment" :key="index" v-for="(recipeSegment, index) in recipeSegments">
        </RecipeSegment>
    </section>
</template>