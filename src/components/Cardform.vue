<template>
  <div>
    <div v-if="cardid" class="card big">
      <div v-for="card in getcards">
        <div v-if="card.id === cardid">
          {{setnewdata(card)}}
          <span class="close" @click="closemodal">&times;</span>
          <form v-on:submit.prevent>
            <input type='text' :placeholder="title" required='true' autoFocus='true' v-model="title"/>
            <textarea :placeholder="card.description" required='true' v-model="description"></textarea>
            <label htmlFor="status">List</label>
            <select v-model="listid">
              <option v-for="list in getlist" :disabledvalue="['listid==list.id'? 'list.id':'' ]":value="list.id">{{list.listname}}</option>
            </select>
            <br />
            <label htmlFor="color">Color</label>
            <input id="color" value="" onChange="" type="color" v-model="color"/>
            <div class='actions'>
            <button class="button" type="submit" @click="editcard({cardid, listid, title, description, color})">Edit card</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else class="card big">
      <span class="close" @click="closemodal">&times;</span>
      <form v-on:submit.prevent>
        <input type='text' placeholder="Title" required='true' autoFocus='true' v-model="newcard.title"/>
        <textarea placeholder="Description" required='true' v-model="newcard.description"></textarea>
        <label htmlFor="status">List</label>
        <select v-model="newcard.listid">
          <option disabled value="">Please select one</option>
          <option v-for="list in getlist" :value="list.id">{{list.listname}}</option>
        </select>
        <br />
        <label htmlFor="color">Color</label>
        <input id="color" value="" onChange="" type="color" defaultValue="#ff0000" v-model="newcard.color"/>
        <div class='actions'>
          <button class="button" type="submit" @click="addcard(newcard)">Create new card</button>
        </div>
      </form>
    </div>
    <div class="overlay">
    </div>
  </div>
</template>
<script>
 import {eventBus} from '../main'
 import {mapActions, mapGetters} from 'vuex'
 export default{
   data: function () {
     return {
       id: this.cardid,
       title: this.title,
       description: this.description,
       color: this.color,
       listid: this.listid,
       tasks: [],
       newcard: {
         id: Date.now(),
         title: 'Title for new card',
         description: 'Write brief description about the card',
         color: '#41b883',
         listid: 2,
         tasks: []
       }
     }
   },
   props: {
     cardid: Number,
     listid: Number,
     title: String,
     description: String,
     color: String
   },
   computed: {
     ...mapGetters([
       'getlist',
       'getcards'
     ])
   },
   methods: {
     ...mapActions([
       'addcard',
       'editcard'
     ]),
     closemodal: () => {
       eventBus.$emit('closemodal', false)
     },
     setnewdata: (card) => {
       this.id = card.id
       this.title = card.title
       this.description = card.description
       this.color = card.color
       this.listid = card.listid
     }
   }
 }
</script>
<style>
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0; left: 0; bottom: 0; right: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .card.big {
    position: absolute;
    width: 550px;
    height: 300px;
    margin: auto;
    padding: 15px;
    top: 0; left: 0; bottom: 100px; right: 0;
    z-index: 3;
  }
  .card.big input[type=text], textarea {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width : 100%;
    margin: 3px 0;
    font-size: 16px;
    border: 1px dotted;
  }
  .card.big input[type=text] {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
  }
  .card.big input[type=text]:focus,
  .card.big textarea:focus {
    outline: dashed thin #999;
    outline-offset: 2px;
  }
  .card.big label {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 3px 0 7px 3px;
    color: #a7a7a7;
    display: inline-block;
    width: 60px;
  }
  .actions {
    margin-top: 10px;
    text-align: right;
  }
  .card.big button {
    font-size:14px;
    padding: 8px;
    //background-color: #41b883;
    border-radius: 5px;
    color: #fff;
  }
  .button {
    background: #E27575;
    border: none;
    padding: 10px 25px 10px 25px;
    color: #FFF;
    box-shadow: 1px 1px 5px #B6B6B6;
    border-radius: 3px;
    cursor: pointer;
  }
  .basic-grey .button:hover {
    background: #CF7A7A
  }
  .close {
    color: red;
    float: right;
    font-size: 20px;
    font-weight: bold;
  }
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
