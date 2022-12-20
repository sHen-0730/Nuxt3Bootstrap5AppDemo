<template>
<nav class="navbar navbar-expand-sm navbar-dark p-4" style="background-color: #5F9EA0">
     <a class="navbar-brand" href="#">京都を巡る</a>
     <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
</nav>
  <div class="container my-5">
    <h1 class="border-bottom border-2 pb-2 my-3 border-success">清水寺</h1>
    <div class="container-fluid img-hidden">
    <img src="../image/kiyomizu.jpg" class="img-fluid">
    </div>
  </div>
  <div class="container mb-5">
    <div class="card mb-3 mx-auto">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{data.section1}}</h5>
            <div class="card-text">
              <ul>
                <li v-for="item in data.material">{{ item.text }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mb-5">
    <h2>{{data.section2}}</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div v-for = "rp in data.recipes" class="col border p-2">
        <div class="mb-2"><span class="badge bg-secondary">{{rp.id}}</span></div>
        <p>{{rp.text}}</p>
      </div>
    </div>
  </div>

  <div class="container mb-5">
    <div class="row gx-5">
      <div class="col-sm">
        <h3>{{data.section3}}</h3>

        <p v-for = "kp in data.point">{{kp.text}}</p>

      </div>
      <div class="col-sm">
        <h3>{{data.section4}}</h3>
        <p v-for = "bg in data.background">{{bg.text}}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const data = useRecipe()
</script>