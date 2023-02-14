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
    <img src="~/assets/images/kiyomizu.jpg" class="img-fluid">
    </div>
  </div>
  <div class="container mb-5">
    <div class="card mb-3 ">
          <div class="card-header">
              目次
          </div>
          <div class="card-body">
            <div class="card-text">
            <ul class="list-group list-group-flush">
              <li v-for="item in data.items" class="list-group-item">{{item.text}}</li>
            </ul>
            </div>
          </div>
    </div>
  </div>

    <div class="container md-5">
    <h2 class="border-bottom border-2 pb-2 my-3 border-success">{{data.section1}}</h2>
        <div class="container-fluid img-hidden">
    <img src="~/assets/images/sajyu_c.jpg" class="img-fluid mb-3">
    </div>
          <div class="row">
            <div class="col-sm">
              <p class="lh-lg" v-for = "ex1 in data.explanation1">{{ex1.text}}</p>
            </div>
          </div>
    </div>

    <div class="container md-5">
    <h2 class="border-bottom border-2 pb-2 my-3 border-success">{{data.section2}}</h2>
          <div class="row">
            <div class="col-sm">
            <div class="container-fluid img-hidden">
    <img src="~/assets/images/niou.jpg" class="img-fluid mb-3">
    </div>
              <p class="lh-lg" v-for = "ex2 in data.explanation2">{{ex2.text}}</p>
            </div>
          </div>
    </div>

    <div class="container md-5">
    <h2 class="border-bottom border-2 pb-2 my-3 border-success">{{data.section3}}</h2>
          <div class="row">
            <div class="col-sm">
                  <div class="container-fluid img-hidden">
    <img src="~/assets/images/aki.jpg" class="img-fluid mb-3">
            </div>
              <p class="lh-lg" v-for = "ex3 in data.explanation3">{{ex3.text}}</p>
            </div>
          </div>
    </div>

</template>
<script setup>
const data = useWeb()
</script>