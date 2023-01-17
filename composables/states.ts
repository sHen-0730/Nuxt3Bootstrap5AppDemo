export const useRecipe = () => useState('recipe', () => {
    return {
      title: "美味しさNo.1！KFC風フライドチキン",
      description:
        "KFC人気レシピ1位！数あるKFCレシピ─どれも何か一味足りない気が。試行錯誤の末の主人も絶賛☆再現率の高いレシピです☆",
        section1:"材料",
        material: [
        { text: "鶏肉(お好きな部位)　２〜３枚位" },
        { text: "☆牛乳　1/2カップ" },
        { text: "☆卵　１個" },
        { text: "☆にんにくチューブ　２センチ位" },
        { text: "★薄力粉　１カップ" },
        { text: "★オールスパイス　小さじ１弱" },
        { text: "★顆粒コンソメ　大さじ1/2" },
        { text: "★塩　大さじ1/2" },
        { text: "あれば★パプリカパウダー　小さじ１" },
      ],
        section2:"作り方",
        recipes: [
          { id: "1", 
          text: "☆をボウルに混ぜ合わせておく。" },
          { id: "2", 
          text: "別のボウルに★を全て混ぜ合わせておく。" },
          {
            id: "3",
            text:
              "肉の厚みがある部分を切り開き、厚みを一定にする。鶏肉１枚を２～３等分の大きめに切る。"
          },
          {
            id: "4",
            text: "１のボウルに鶏肉を浸す。(時間があれば20分以上浸す。)"
          },
          {
            id: "5",
            text:
              "２のボウルに鶏肉を入れて粉類をまんべんなくまぶし、別の容器に並べていく。粉が余るようでしたら、二度付けをお勧めします！"
          },
          {
            id: "6",
            text:
              "卵液→粉→卵液→粉と二度付けする事で、カリっと感がアップ＋味もしっかり付きます！写真の我が家のは二度付けしています。"
          },
          {
            id: "7",
            text:
              "油を160度に温める。(温めるのはこのタイミングで大丈夫です。待ってる間に衣が鶏肉になじみます。)"
          },
          {
            id: "8",
            text:
              "160度で５分以上、様子を見ながら、火が通ったら、一度上げて、今度は180～200度でカリっと仕上げ、完成です☆"
          },
          {
            id: "9",
            text:
              "鶏肉の1枚はサイズにばらつきがある為、2～3枚という記載に変更しました。"
          }
        ],
        section3:"コツ・ポイント",
        point: [
          {
            text:
              "揚げる際鍋底での焦げ防止に衣が軽く揚がるまで菜箸等で時々浮かせて下さい"
          },
          { text: "好みで粉類に粗びき黒胡椒小さじ1/2を足しても◎" },
          {
            text:
              "にんにくチューブ２センチはガーリックパウダー小さじ１に変えて粉類と混ぜても美味しいです。"
          },
          { text: "パプリカパウダーは無くても可" }
        ],
        section4:"このレシピの生い立ち",
        background: [
          {
            text:
              "今まで作ったKFCレシピは、卵液や粉もかなり余るし、何よりも何かひと味足りない……と思って、やっとKFC味にたどり着きました！"
          },
          { text: "どの家庭にもあるような材料で☆" },
          {
            text:
              "牛乳と卵液、粉類も必要量のみになっているので無駄が無く経済的です☆"
          }
        ],
    }
  })

  export const useWeb = () => useState('kyoto', () => {
    return {
      title: "美味しさNo.1！KFC風フライドチキン",
      description:
        "KFC人気レシピ1位！数あるKFCレシピ─どれも何か一味足りない気が。試行錯誤の末の主人も絶賛☆再現率の高いレシピです☆",
        contents:"目次",
        material: [
        { text: "鶏肉(お好きな部位)　２〜３枚位" },
        { text: "☆牛乳　1/2カップ" },
        { text: "☆卵　１個" },
        { text: "☆にんにくチューブ　２センチ位" },
        { text: "★薄力粉　１カップ" },
        { text: "★オールスパイス　小さじ１弱" },
        { text: "★顆粒コンソメ　大さじ1/2" },
        { text: "★塩　大さじ1/2" },
        { text: "あれば★パプリカパウダー　小さじ１" },
      ],
        section2:"作り方",
        recipes: [
          { id: "1", 
          text: "☆をボウルに混ぜ合わせておく。" },
          { id: "2", 
          text: "別のボウルに★を全て混ぜ合わせておく。" },
          {
            id: "3",
            text:
              "肉の厚みがある部分を切り開き、厚みを一定にする。鶏肉１枚を２～３等分の大きめに切る。"
          },
          {
            id: "4",
            text: "１のボウルに鶏肉を浸す。(時間があれば20分以上浸す。)"
          },
          {
            id: "5",
            text:
              "２のボウルに鶏肉を入れて粉類をまんべんなくまぶし、別の容器に並べていく。粉が余るようでしたら、二度付けをお勧めします！"
          },
          {
            id: "6",
            text:
              "卵液→粉→卵液→粉と二度付けする事で、カリっと感がアップ＋味もしっかり付きます！写真の我が家のは二度付けしています。"
          },
          {
            id: "7",
            text:
              "油を160度に温める。(温めるのはこのタイミングで大丈夫です。待ってる間に衣が鶏肉になじみます。)"
          },
          {
            id: "8",
            text:
              "160度で５分以上、様子を見ながら、火が通ったら、一度上げて、今度は180～200度でカリっと仕上げ、完成です☆"
          },
          {
            id: "9",
            text:
              "鶏肉の1枚はサイズにばらつきがある為、2～3枚という記載に変更しました。"
          }
        ],
        section3:"コツ・ポイント",
        point: [
          {
            text:
              "揚げる際鍋底での焦げ防止に衣が軽く揚がるまで菜箸等で時々浮かせて下さい"
          },
          { text: "好みで粉類に粗びき黒胡椒小さじ1/2を足しても◎" },
          {
            text:
              "にんにくチューブ２センチはガーリックパウダー小さじ１に変えて粉類と混ぜても美味しいです。"
          },
          { text: "パプリカパウダーは無くても可" }
        ],
        section4:"このレシピの生い立ち",
        background: [
          {
            text:
              "今まで作ったKFCレシピは、卵液や粉もかなり余るし、何よりも何かひと味足りない……と思って、やっとKFC味にたどり着きました！"
          },
          { text: "どの家庭にもあるような材料で☆" },
          {
            text:
              "牛乳と卵液、粉類も必要量のみになっているので無駄が無く経済的です☆"
          }
        ],
    }
  })