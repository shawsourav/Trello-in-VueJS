<template>
  <div class="app">
    <draggable :list="getlist" :options="{group: 'list'}">
    <div  class="list" v-for="list in getlist">
        <div class="list_edit">
          <span class="glyphicon glyphicon-trash" aria-hidden="true" @click="deletelist(list.id)"></span>
        </div>
        <h5 style="text-align:center;" @click=""><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> {{list.listname}}</h5>
        <List :id="list.id"></List>
    </div>
      <div class="list"> <input type="text" class="list-add" placeholder="Type & then hit Enter to add a list" v-on:keyup.enter="addlist"/></div>
    </draggable>

    <button class="float-button" @click="showmodal=!showmodal">+</button>
    <Newcard v-if="showmodal"></Newcard>
    <Editcard v-if="editmodal" :cardid="editcardid" :listid="editcardlistid" :title="editcardtitle" :description="editcarddescription" :color="editcardcolor"></Editcard>
  </div>

</template>
<script>
  import {eventBus} from '../main'
  import {mapActions, mapGetters} from 'vuex'
  import draggable from 'vuedraggable'
  import List from './Lists.vue'
  import Newcard from './Newcard.vue'
  import Editcard from './Editcard.vue'
  export default{
    data: function () {
      return {
        showmodal: false,
        editmodal: false,
        editcardid: '',
        editcardtitle: '',
        editcarddescription: '',
        editcardcolor: '',
        editcardlistid: ''
      }
    },
    props: {
    },
    computed: {
      ...mapGetters([
        'getlist'
      ])
    },
    methods: {
      ...mapActions([
        'editlist',
        'deletelist',
        'addlist'
      ]),
      drop: (ev) => {
        console.log(ev)
      }
    },
    created () {
      eventBus.$on('closemodal', (data) => {
        this.showmodal = false
        this.editmodal = false
      })
      eventBus.$on('editmodal', (data) => {
        this.editmodal = true
        this.editcardid = data.cardid
        this.editcardtitle = data.title
        this.editcardcolor = data.color
        this.editcarddescription = data.description
        this.editcardlistid = data.listid
      })
    },
    components: {
      List,
      Newcard,
      Editcard,
      draggable
    }
  }
</script>
<style>
  .list {
    background-color: #f7f7f7;
    position: relative;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    height: 100%;
    width: 350px;
    padding: 0 20px;
    overflow: auto;
    border-radius: 4px;
    margin:10px;
    cursor: pointer;
    height: 600px;
    overflow-y: scroll;
  }
  .list:not(:last-child):after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 99%;
  }
  .list-add-task {
    border: 1px dashed #bbb;
    width: 80%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 3px;
  }
  .list-add {
    border: 1px dashed #bbb;
    width: 80%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 3px;
  }
  .list_edit{
    position: absolute;
    top:10px;
    right: 10px;
    opacity: 0;
    font-size:12px;
    cursor: pointer;
    transition: opacity .25s ease-in;
  }
  .list:hover .list_edit{
    opacity: 1;
  }
  .list_edit a{
    text-decoration: none;
    color: #999;
    font-size: 17px;
  }
  .float-button {
    position: absolute;
    height: 56px;
    width: 56px;
    z-index: 2;
    right: 20px;
    bottom: 20px;
    background: #D43A2F;
    color: white;
    border-radius: 100%;
    font-size: 34px;
    text-align: center;
    text-decoration: none;
    line-height: 50px;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
</style>
