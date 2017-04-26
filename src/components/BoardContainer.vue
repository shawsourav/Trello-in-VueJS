<template>
  <div class="hello">
    <Board class="board"></Board>
  </div>
</template>

<script>
  import Board from './Board.vue'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Trello Board using Vue JS'
      }
    },
    methods: {
    },
    components: {
      Board
    }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
  padding-left:500px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.board{}

</style>
