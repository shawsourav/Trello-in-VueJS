<template>
  <div>
    <div v-bind:style = "sideColor"/>
    <div class="card_edit">
      <span class="glyphicon glyphicon-flag" aria-hidden="true" @click=""></span>
      {{taskscompleted}}/{{tasks.length}} &nbsp;| &nbsp;
      <span class="glyphicon glyphicon-pencil" aria-hidden="true" @click="editmodal({listid, cardid, title, description, color})"></span>
      &nbsp;| &nbsp;
      <span class="glyphicon glyphicon-trash" aria-hidden="true" @click="deletecard(cardid)"></span>
    </div>
    <div  v-bind:class = "[showDetails ? 'card_title-is-open': '', 'card_title']" @click="showDetails=!showDetails">{{title}}
      &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
    <div v-if="showDetails">
    <div class="card_description">{{description}}</div>
    <div class="checklist">
    <checklists :cardid="cardid" :tasks="tasks"></checklists>
    </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {eventBus} from '../main'
  import checklists from './Checklists.vue'
  export default {
    props: {
      listid: Number,
      cardid: Number,
      title: String,
      description: String,
      color: String,
      tasks: Array
    },
    data: function () {
      return {
        showDetails: true,
        taskscompleted: 0,
        sideColor: {
          position: 'absolute',
          zIndex: -1,
          top: 0,
          bottom: 0,
          left: 0,
          width: '2px',
          backgroundColor: this.color
        }
      }
    },
    methods: {
      ...mapActions([
        'editcard',
        'deletecard'
      ]),
      editmodal: (carddata) => {
        eventBus.$emit('editmodal', carddata)
      },
      counttasksdone: function () {
        var completedtasks = 0
        for (var i = 0; i < this.tasks.length; i++) {
          if (this.tasks[i].done === true) {
            completedtasks++
          }
          return completedtasks
        }
      }
    },
    created () {
      eventBus.$on('deletetask', (data) => {
        for (var i = 0; i < this.tasks.length; i++) {
          if ((this.tasks[i].id === data.taskid) & (this.cardid === data.cardid)) {
            this.tasks.splice(i, 1)
            break
          }
        }
      })
      eventBus.$on('toggletask', (data) => {
        for (var i = 0; i < this.tasks.length; i++) {
          if ((this.tasks[i].id === data.taskid) & (this.cardid === data.cardid)) {
            this.tasks[i].done = data.status
            var completedtasks = 0
            for (var j = 0; j < this.tasks.length; j++) {
              if (this.tasks[j].done === true) {
                completedtasks++
              }
            }
            this.taskscompleted = completedtasks
          }
        }
      })
      this.taskscompleted = this.counttasksdone()
    },
    components: {
      checklists
    }
  }

</script>
<style scoped>
  .card_title {
    font-weight: bold;
    border-bottom: solid 5px transparent;
    cursor: move;
    font-size:14px;
  }
  .card_title:before {
    display: inline-block;
    width: 1em;
    content: '▸';
    cursor: pointer;
  }
  .card_title-is-open:before {
    content: '▾';
  }
  .card_description{
    font-weight:500;
    font-size:12px;
  }
  .card_edit{
    position: absolute;
    top:10px;
    right: 10px;
    opacity: 0.2;
    font-size:12px;
    cursor: pointer;
    transition: opacity .25s ease-in;
  }
  .card:hover .card_edit{
    opacity: 1;
  }
  .card_edit a{
    text-decoration: none;
    color: #999;
    font-size: 17px;
  }
</style>
