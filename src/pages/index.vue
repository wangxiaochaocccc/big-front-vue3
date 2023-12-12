<template>
    <div class='p-4'>
        <p>{{msg}}</p>
        <p>{{x}}</p>
        <p>{{y}}</p>
    </div>
    <hello-world></hello-world>
    <user-com/>
</template>

<script setup>
const msg = ref('Hello World!')
const { x, y } = useMouse()
</script>
<style lang='scss' scoped>

</style>