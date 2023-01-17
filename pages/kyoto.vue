<template>
<nav class="navbar navbar-expand-sm navbar-dark p-4" style="background-color: #5F9EA0">
     <a class="navbar-brand" href="#">京都を巡る</a>
     <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
</nav>
  <div class="container my-5">
    <h1 class="border-bottom border-2 pb-2 my-3 border-success">{{data.title}}</h1>
    <div class="container-fluid img-hidden">
    <img src="../images/kiyomizu.jpg" class="img-fluid">
    </div>
  </div>
  <div class="container mb-5">
    <div class="card mb-3 ">
          <div class="card-header">
              目次
          </div>
          <div class="card-body">
            <div class="card-text">
            <ol class="list-group list-group-flush">
              <li class="list-group-item">清水寺について</li>
              <li class="list-group-item">見どころ</li>
       <li class="list-group-item">周辺スポット</li>
  </ol>
            </div>
          </div>
    </div>
  </div>
</template>
<script setup>
const data = useWeb()
</script>