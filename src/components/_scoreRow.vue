<template>
  <div class="scoreRow">
      <div class="scoreLeft">
        <div @click="changeVal('left',1)">{{ scoreLeft }}</div>
        <button @click="changeVal('left',-1)">-</button>
      </div>
      <span>:</span>
      <div class="scoreRight">
        <div @click="changeVal('right',1)">{{ scoreRight }}</div>
        <button @click="changeVal('right',-1)">-</button>
      </div>
  </div>
</template>
<style lang="scss">
    .scoreRow {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        .scoreLeft, .scoreRight {
            flex-grow: 1;
            font-size: 3em;

            & > button {
                padding: 1em;
            }
        }

    }   


</style>

<script>
export default {
    name: "scoreRow",
    props: {
        value: Object
    },
    data() {
        return {
        }
    },
    computed: {
        scoreLeft: function(vm) {
            return vm.value.left || 0
        },
        scoreRight: function(vm) {
            return vm.value.right || 0
        }
    },
    methods: {
        changeVal: function(name, change) {
            let toChange = this.value
            if(toChange[name] && toChange[name] !== 0) {
                toChange[name] = (toChange[name] + change)
            } else {
                 toChange[name] = change
            }
            this.$emit('input', toChange)
        }
    }
}
</script>
