const app =Vue.createApp({
  data() {
     return {
        link: "https://www.google.com",
        nizA: ['a','b','c'],
        niz1: [10,25,366],
        nizObjekata: [
            {
                name:'imeUser1',
                age:11,
            },
            {
                name:'imeUser2',
                age:12,
            },
            {
                name:'imeUser3',
                age:13,
            }
        ]

     }
  },
  methods: {

  }


});


app.mount('#app');