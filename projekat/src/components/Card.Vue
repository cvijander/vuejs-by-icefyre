<template>
    <div id="card">
        <p>{{ id }}</p>
        <p>{{ title }}</p>
        <p>{{ text }}</p>
    </div>
</template>

<script>
   export default {
    props: ['id','title','text'],
     data() {
        return {
            
        }
     }
   }

</script>


<style >
 #card {
    border: 1px solid black;
    margin: 10px;
  }
</style>