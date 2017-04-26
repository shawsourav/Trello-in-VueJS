<template>
  <div>
    <draggable :list="myList" :options="options" @change="change" :move="checkMove" :start="startDrag" @end="endDrag">
    <div v-for="(card,index) in myList">
      <cards class="card" :listid="id" :cardid="card.id"  :title="card.title" :description="card.description" :color="card.color" :tasks="card.tasks" v-if="card.listid === id"></cards>
   </div>
    </draggable>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import { store } from '../store/store'
  import draggable from 'vuedraggable'
  import cards from './Cards.vue'
  export default {
    props: {
      id: Number
    },
    data: function () {
      return {
        options: {
          group: 'cards',
          animation: 250,
          handle: '.card_title',
          ghostClass: 'ghost',
          chosenClass: 'chosen'
        }
      }
    },
    computed: {
      ...mapGetters([
        'getcards'
      ]),
      myList: {
        get () {
          return store.state.cards.cardlist
        },
        set (value) {
        }
      }
    },
    methods: {
      ...mapActions([
        'editlist',
        'deletelist'
      ]),
      startDrag: function (evt) {
        console.log(evt)
      },
      checkMove: function (evt) {
        if ((evt.draggedContext.element.listid !== evt.relatedContext.element.listid) || (evt.relatedContext.element.listid === 'undefined')) {
          evt.draggedContext.element.listid = evt.relatedContext.element.listid
        }
        return false
      },
      endDrag: function (evt) {
        console.log(evt)
      },
      change: (ev) => {
        console.log(ev)
      },
      drag: (ev) => {
        console.log('hello')
      }
    },
    components: {
      cards,
      draggable
    }
  }
</script>
<style>
  .card {
    position: relative;
    z-index: 1;
    background: #fff;
    width: 98%;
    padding: 10px 10px 10px 15px;
    margin: 0 0 10px 0;
    overflow: auto;
    border: 1px solid #e5e5df;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
    text-align: left;
  }
  .ghost{
    opacity: 0.5
  }
  .chosen {
    background-color: #f7f7f7;
  }
</style>
