<template>
    <div>
        <p class="text-blue font-semibold" v-html="content"></p>
    </div>
</template>

<script>
export default {
props: {
    content: {
    type: String,
    required: true
    }
}
}
</script>

<style>

</style>