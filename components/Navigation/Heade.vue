<template>
 <div>
  <div class="  fixed z-50  top-0 left-0 w-full   ">
    <nav class="flex justify-between container mx-auto py-6 bg-transparent items-center text-white ">
        <div class="font-bold text-xl" > <img src="@/assets/images/micakin.svg"  class="w-32" alt=""></div>
        <ul class=" md:flex   hidden gap-5">
            <li class="cursor-pointer"> <NuxtLink to="/about">About us</NuxtLink></li>
            <li class="cursor-pointer"> <NuxtLink to="/works">Our Case Studies</NuxtLink></li>
            <li class="cursor-pointer"> <NuxtLink to="/Services">Services</NuxtLink>  </li>
            <li  class="cursor-pointer"> <NuxtLink to="/Services">Discuss with us</NuxtLink> </li>
        </ul>
    </nav>
  </div>
  

 </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
