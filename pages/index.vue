<template>
<div class = "container"> 
  <div class = "row">
  <div class = "col-sm-2">
  <div class="card my-5">
    <div class="card-header" style="background-color: #99cce1">{{data.section1}}</div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item mx-auto my-auto" v-for="bt in button">
      <button type="button" class="btn btn-light px-3 py-3 my-4">
        <NuxtLink to="recipe" class="text-dark text-decoration-none">複合仕訳</NuxtLink>
      </button>
    </li>
    <li class="list-group-item mx-auto my-auto">
      <button type="button" class="btn btn-light px-4 py-3 my-4">
      <NuxtLink to="recipe" class="text-dark text-decoration-none">元帳入力</NuxtLink>
      </button>
    </li>
    <li class="list-group-item mx-auto my-auto">
      <button type="button" class="btn btn-light px-4 py-3 my-4">
      <NuxtLink to="#" class="text-dark text-decoration-none">通帳入力</NuxtLink>
      </button>
    </li>
  </ul>
    </div>
  </div>


  <div class = "col-sm-10">
    <div class="card my-5">
    <div class="card-header" style="background-color: #a3d592">{{data.section2}}</div>
    <div class="card-body">
      <div class = "row">
        <ul class="list-group list-group-flush">
          <div class = "col">
    <li class="list-group-item mx-auto my-auto">
      <button type="button" class="btn btn-light px-3 py-3 my-4">
        <NuxtLink to="jounal/index" class="text-dark text-decoration-none">複合仕訳入力</NuxtLink>
      </button>
    </li>
    <li class="list-group-item mx-auto my-auto">
      <button type="button" class="btn btn-light px-4 py-3 my-4">
      <NuxtLink to="#" class="text-dark text-decoration-none">元帳入力</NuxtLink>
      </button>
    </li>
    <li class="list-group-item mx-auto my-auto">
      <button type="button" class="btn btn-light px-4 py-3 my-4">
      <NuxtLink to="#" class="text-dark text-decoration-none">通帳入力</NuxtLink>
      </button>
    </li>
  </div>
  <div class="col"></div>
  </ul>
      </div>
    </div>
  </div>
  </div> 
 </div>   
</div>

</template>
   <script setup>
    const data = zaimu()
    </script>