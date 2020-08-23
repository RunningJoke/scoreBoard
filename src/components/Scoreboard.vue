<template>
  <div class="scoreBoard">
      <button @click="addRow()">+</button>

      <div v-for="(board,idx) in scoreRows" :key="'boardrow-'+idx">
        <score-row v-model="scoreRows[idx]" />
        <div @click="removeRow(idx)">-</div>
      </div>

  </div>
</template>

<style lang="scss" scoped>
.scoreBoard {

  max-height: 100vh;
  overflow: auto;

  & > button {
    padding: 1em;
  }
}
</style>

<script>
import ScoreRow from '@/components/_scoreRow'
// @ is an alias to /src
export default {
  name: 'ScoreBoard',
  components: {
    scoreRow: ScoreRow
  },
  data() {
    return {
      scoreRows:[]
    }    
  },
  methods: {
    addRow: function() {
      let item = {left: 0, right: 0}
      this.$set(this.scoreRows,this.scoreRows.length,item)
    },
    removeRow: function(idx) {
      this.scoreRows.splice(idx,1)
    }
  }

}
</script>
