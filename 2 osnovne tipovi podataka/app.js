const app = Vue.createApp({
   data() {
    return {
      name : 'moje ime',
      number: 8,
      booleanTrue :false
    }
   },
   methods :{
    numberPlus()
    {
        this.number++
    },
    numberMinus(){
        this.number--
    },
    notBooleanTrue (){
        this.booleanTrue =!this.booleanTrue;
    }

   }
});


app.mount('#app');