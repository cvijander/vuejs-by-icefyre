<script>
import Card from './components/Card.vue';

export default {
  name: "App",
  components: {Card},
  data() {
    return {
      name: "dejan",
      age: 29,
      cards: [
        {
          id: 1,
          title: "Kartica 1",
          text: "Tekst 1" 
        },
        {
          id: 2,
          title: "Kartica 2",
          text: "Tekst 2" 
        },
        {
          id: 3,
          title: "Kartica 3",
          text:"Tekst 3" 
        }
      ]
      
      // isShow: false,
      // loremText: 'lorem dolor ipsuim ..',
      // someHtml : '<h1>Ovo je naslov</h1>',
      // books: [
      //   {
      //     id: 1,
      //     name: 'dejan'
      //   },
      //   {
      //     id: 2,
      //     name: 'pera'
      //   },
      //   {
      //     id: 3,
      //     name: 'dejan'
      //   }
      // ]
      
    };
  },
};
</script>

<template>
 <!-- <div > 
    <p v-text="loremText"></p>
    <p v-html="someHtml"></p>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{book.id  }}
        {{book.name}}
      </li>
    </ul>    
  </div> -->
   <div v-for="card in cards" :key="card.id">
      <Card :id="card.id" :title="card.title" :text="card.text"/> 
    </div> 
</template>
