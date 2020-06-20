<template>
  <div class="container">
    <input
      type="text"
      class="select_input"
      v-model="city"
      autocomplete="off"
      placeholder="请输入城市名"
      @focus="focus"
      @blur="blur"
    />
    <div class="search_select" ref="search_select">
      <ul class="select_ul">
        <li v-for="item in search(city)" :key="item.id">{{item.word}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'ghzselect',
  data() {
    return {
      city: ""
    };
  },
  props: [
    'list'
  ],
  methods: {
    focus() {
      this.$refs.search_select.style.display = "block";
    },
    blur() {
      this.$refs.search_select.style.display = "none";
    },
    search(city){
        var newlist = [];
                    this.list.forEach(item => {
                        if (item.word.indexOf(city) != -1) {
                            newlist.push(item);
                        }
                    })
                    return newlist;
    }
  }
};
</script>
<style lang="scss">
.container {
  .select_input {
    width: 150px;
    height: 25px;
  }
  .search_select {
    width: 150px;
    height: 150px;
    display: none;
    overflow: auto;
    .select_ul {
      list-style: none;
      background-color: rgb(218, 213, 213);
      padding: 0;
      margin: 0;
      border: 1px solid rgb(197, 195, 195);
      li {
        width: 100%;
        height: 25px;
        line-height: 25px;
        padding-left: 5px;
        box-sizing: border-box;
        // border: 1px solid #f40;
      }
    }
  }
}
</style>