<template>
<div class = "container"> 
  
    <nav class="navbar navbar-expand-sm navbar-dark p-3" style="background-color: #5183C3">
        <a class="navbar-brand" href="#">{{data.title}}</a>
        <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
    </nav>
    <div class="pt-3" aria-label="breadcrumb" style="background-color: #d3d3d3;">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NuxtLink to="#" class="text-dark text-decoration-none">日次処理</NuxtLink>
        </li>
      </ol>
    </div>
  <div class = "row">
  <div class = "col-sm-2">
  <div class="card my-5">
    <div class="card-header" style="background-color: #99cce1">{{data.section1}}</div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item mx-auto my-auto" v-for="bt in button">
      <button type="button" class="btn btn-light px-3 py-3 my-4">
        <NuxtLink to="#" class="text-dark text-decoration-none">複合仕訳入力</NuxtLink>
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