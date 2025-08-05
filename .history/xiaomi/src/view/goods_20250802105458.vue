<script setup>
import phone1 from '../assets/img/phone1.png'


</script>

<template>
    <div class="base_div">
        <div class="main_div">
            <img :src="phone1" alt="">
        </div>
    </div>

</template>

<style scoped>
.base_div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.main_div{
    width: 80%;
    display: flex;
}
</style>
