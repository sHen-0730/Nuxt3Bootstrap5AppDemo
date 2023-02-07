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
            <div class="container-fluid img-hidden">
    <img src="~/assets/images/niou.jpg" class="img-fluid mb-3">
    </div>
              <p class="lh-lg">清水寺の入口にある重要文化財である仁王門。<br>
              正面に掲げられている額縁は、平安時代中期の書家として知られる藤原行成（ふじわらのゆきなり）が書いたと伝えられています。門の両脇には、鎌倉時代末期の金剛力士像がおかれており、
              像高３６５㎝で、京都では最大級の金剛力士像とされています。<br>
              観光での楽しみ方としては、清水の舞台から御所が見えないように建てられたといわれているので、清水の舞台に行った際には、仁王門を探して御所が見えるかを
              試してみてください。</p>
            </div>
          </div>
    </div>

    <div class="container md-5">
    <h2 class="border-bottom border-2 pb-2 my-3 border-success">季節ごとの景色</h2>
          <div class="row">
            <div class="col-sm">
                        <div class="container-fluid img-hidden">
    <img src="~/assets/images/aki.jpg" class="img-fluid mb-3">
    </div>
              <p class="lh-lg mb-4">清水寺境内の木々が赤く色づき始めるのは11月中旬ごろ。約1,000本の山紅葉や楓（かえで）の木々が赤く染まり、11月下旬から12月上旬にかけて紅葉の見頃を迎えます。
              この時期に合わせて、清水寺のライトアップと夜間特別拝観が実施されているので、紅葉の時期になったらぜひ訪れてみてください。</p>
            </div>
          </div>
    </div>

</template>
<script setup>
const data = useWeb()
</script>