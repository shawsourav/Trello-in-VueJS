<template>
  <div>
      <ul>
        <li class="checklist_task" v-for="task in tasks"> <input type="checkbox" v-model="task.done" v-on:change="toggletask({cardid: cardid, taskid: task.id, status: task.done})"/>
        {{task.name}}
          <a href="#" class="checklist_task--remove" @click="deletetask({cardid: cardid, taskid: task.id})"></a>
        </li>
      </ul>
    <input type="text" class="checklist-add-task" placeholder="Type then hit Enter to add a task" v-on:keyup.enter="submittask(this.event)"/>
    </div>
  </div>
</template>
<script>
  import {eventBus} from '../main'
  export default{
    props: {
      cardid: Number,
      tasks: Array,
      addTask: Function,
      deleteTask: Function,
      toggleTask: Function
    },
    methods: {
      submittask: function (event) {
        var value = event.target.value
        console.log(value)
        var newtask = {
          id: Math.random(),
          name: '',
          done: false
        }
        newtask.name = value
        this.tasks.push(newtask)
      },
      toggletask: function (data) {
        eventBus.$emit('toggletask', data)
      },
      deletetask: (data) => {
        eventBus.$emit('deletetask', data)
      }
    }
  }
</script>
<style scoped>
  ul{
    list-style: none;
    font-size: 12px;
    padding:0px;
  }
  .checklist_task:first-child {
    margin-top: 10px;
    padding-top: 10px;
    border-top: dashed 1px #ddd;
  }
  .checklist_task--remove:after{
    display: inline-block;
    color: #c75a5a;
    font-weight: lighter;
    content: "✖";
  }
  .checklist-add-task {
    border: 1px dashed #bbb;
    width: 98%;
    padding: 5px;
    margin-top: 5px;
    border-radius: 3px;
  }
</style>
