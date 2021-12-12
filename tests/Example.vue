<template>
    <div>{{ msg }}</div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello Vue Test utils!'
        }
    },
    mounted() {
        console.log(this.msg)
    }
}
</script>