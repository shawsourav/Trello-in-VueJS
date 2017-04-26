<template>
  <cardform :cardid="cardid" :listid="listid" :title="title" :description="description" :color="color"></cardform>
</template>
<script>
  import cardform from './Cardform.vue'
  export default{
    props: {
      cardid: Number,
      listid: Number,
      title: String,
      description: String,
      color: String
    },
    components: {
      cardform
    }
  }
</script>
<style></style>
