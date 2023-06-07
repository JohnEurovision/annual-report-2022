<template>
    <div>
        <p v-html="content"></p>
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

p {
    padding-bottom: 1.25rem
}
a {
    color: rgb(255 120 0 / 1);
    font-weight: 700;
}

</style>