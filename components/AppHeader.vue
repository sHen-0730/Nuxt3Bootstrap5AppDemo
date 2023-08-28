<template>
  <div class="container">
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
  </div>
</template>

   <script setup>
    const data = zaimu()
    </script>