<template>
<div class = "container"> 
<nav class="navbar navbar-expand-sm navbar-dark p-3" style="background-color: #5183C3">
     <a class="navbar-brand" href="#">円簿会計</a>
     <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
</nav>

  <div class = "row">
  <div class = "col-sm-2">
  <div class="card my-5">
    <div class="card-header" style="background-color: #99cce1">各種入力</div>
    <ul class="list-group list-group-flush ">
    <li class="list-group-item mx-auto my-auto">
      <button type="button" class="btn btn-light px-3 py-3 my-4">
        <NuxtLink to="#" class="text-dark">複合仕訳入力</NuxtLink>
      </button>
    </li>
    <li class="list-group-item mx-auto my-auto">
      <button type="button" class="btn btn-light px-4 py-3 my-4">
      <NuxtLink to="#"  class="text-dark">元帳入力</NuxtLink>
      </button>
    </li>
    <li class="list-group-item mx-auto my-auto">
      <button type="button" class="btn btn-light px-4 py-3 my-4">
      <NuxtLink to="#"  class="text-dark">通帳入力</NuxtLink>
      </button>
    </li>
  </ul>
    </div>
  </div>
  <div class = "col-sm-10">
    <div class="card my-5">
    <div class="card-header" style="background-color: #a3d592">各種出力</div>
        <div class="card-body">
          <div class="row mx-4">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
          <p class="card-text"></p>
        </div>
    </div>
  </div> 
  </div>
  
</div>

</template>
