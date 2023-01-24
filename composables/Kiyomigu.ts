export const useWeb = () => useState('kyoto', () => {
    return {
      title: "清水寺",
        contents:"目次",
        items: [
        {text:"清水寺について"},
        {text:"見どころ"},
        {text:"周辺の観光スポット"},
      ],
      section1:"清水寺について",
    }
  })