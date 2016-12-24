<style scoped>
  .btn {
    appearance: none;
    background: transparent;
    border: 1px solid black;
    cursor: pointer;
    font-size: 100px;
  }

  .btn + .btn {
    margin-left: 100px;
  }
</style>

<template>
  <div>
    <button type="button" class="btn" v-on:click="photo">Photo</button>
    <button type="button" class="btn">Gif</button>
  </div>
</template>

<script>
  import { ipcRenderer } from 'electron';

  export default {
    name: 'home-page',
    methods: {
      photo: function () {
        console.log(this.$electron);
        console.log(ipcRenderer.sendSync('synchronous-message', 'ping'));
      }
    }
  }
</script>
