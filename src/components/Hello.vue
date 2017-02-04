<template>
  <div class="hello">
    <h1 v-text="msg"></h1>
    <input class="text" v-model="newItem" @keyup.enter="addNewItem"/>
    <ul>
      <li v-for="item in items">
        <input class="checkbox" :checked="item.isDone" type="checkbox" @click="toggleDone(item)"/>
        <p v-text="item.label" :class="{done:item.isDone}"></p>
        <button class="del" @click="delItem(item)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import Store from "../store"
  import $ from "../jquery"

  export default {
    name: 'hello',
    data: function () {
      return {
        items: Store.fetch(),
        newItem: ''
      }
    },
    props: ['msg'],
    methods: {
      toggleDone: function (item) {
        item.isDone = !item.isDone;
        let dom = this.$el.querySelector(".checkbox");
        item.isDone ? $(dom).prop("checked", true) : $(dom).prop("checked", false);
      },
      addNewItem: function () {
        this.items.push({
          label: this.newItem,
          isDone: false
        });
        this.newItem = '';
      },
      delItem: function (delItem) {
        for (let k in this.items) {
          if (this.items[k] == delItem) {
            this.items.splice(k, 1);
          }
        }
      }
    },
    watch: {
      items: {
        handler: function (items) {
          Store.save(items);
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 20px 0;
    text-align: left;
    clear: both;
  }

  li input {
    margin: 0 15px 0 0;
    vertical-align: middle;
  }

  li p {
    width: 410px;
    vertical-align: middle;
    display: inline-block;
    margin: 0;
  }

  .done {
    text-decoration: line-through;
  }

  .hello {
    width: 500px;
    position: relative;
    left: 50%;
    margin-left: -250px;
  }

  .text {
    height: 25px;
    width: 492px;
    border-radius: 3px;
    border: 1px solid #999;
    padding: 3px;
    outline: none;
  }

  .del {
    border: 1px solid #999;
    border-radius: 3px;
    background: #fff;
    line-height: 20px;
  }
</style>
