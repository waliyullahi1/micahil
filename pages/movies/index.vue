<template>
 <div class=" bg-gray-900 h-screen">
    <form @submit.prevent="searchemovies" class="container mx-auto py-20 py-3 flex gap-20 ">
        <input type="search" v-model="serche" class="w-full rounded-xl font-bold  ring-0 outline-0 bg-gray-70 bg-gray-800 text-white ">
        <ButtonsPrimary class="w-fit hover:bg-gray-300   " >search</ButtonsPrimary>
    </form>
    <div class="bg-gray-800  h-10 container mx-auto  rounded-xl"></div>

 </div>
</template>

<script>
export default {
    data() {
        return{
            serche:'',

        }
    },
    methods:{
        searchemovies(){
            
        }

    }
}
</script>

<style>

</style>