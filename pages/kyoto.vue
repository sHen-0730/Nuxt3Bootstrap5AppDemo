<template>
  <div class="container my-5">
    <h1>京都紹介</h1>
    <div class="alert alert-primary" role="alert">{{ data.description }}</div>
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