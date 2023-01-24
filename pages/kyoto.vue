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
    <img src="~/assets/images/sanjyu.jpg" class="img-fluid mb-3">
    </div>
          <div class="row">
            <div class="col-sm">
              <p class="lh-lg">清水寺は西暦７７８年に創建され、残された記録だけでも９回の焼失があるという
              歴史ある建物です。境内には「清水の舞台から飛び降りる」の語源となった本堂や、 三重塔などの国宝、重要文化財が立ち並びます。 他にも、恋愛成就などのご利益があるとされる音羽の滝、
              胎内巡りで有名な随求堂などのパワースポットもご覧いただけます。</p>
            </div>
          </div>
    </div>

    <div class="container md-5">
    <h2 class="border-bottom border-2 pb-2 my-3 border-success">見どころ</h2>
          <div class="row">
            <div class="col-sm">
              <p class="lh-lg">清水寺は西暦７７８年に創建され、残された記録だけでも９回の焼失があるという
              歴史ある建物です。境内には「清水の舞台から飛び降りる」の語源となった本堂や、 三重塔などの国宝、重要文化財が立ち並びます。 他にも、恋愛成就などのご利益があるとされる音羽の滝、
              胎内巡りで有名な随求堂などのパワースポットもご覧いただけます。</p>
            </div>
          </div>
    </div>

    <div class="container md-5">
    <h2 class="border-bottom border-2 pb-2 my-3 border-success">季節ごとの景色</h2>
          <div class="row">
            <div class="col-sm">
              <p class="lh-lg">清水寺は西暦７７８年に創建され、残された記録だけでも９回の焼失があるという
              歴史ある建物です。境内には「清水の舞台から飛び降りる」の語源となった本堂や、 三重塔などの国宝、重要文化財が立ち並びます。 他にも、恋愛成就などのご利益があるとされる音羽の滝、
              胎内巡りで有名な随求堂などのパワースポットもご覧いただけます。</p>
            </div>
          </div>
    </div>

</template>
<script setup>
const data = useWeb()
</script>