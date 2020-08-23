<template>
  <div class="scoreBoardContainer">
        <score-board />
  </div>
</template>

<script>
import ScoreBoard from '@/components/Scoreboard'
// @ is an alias to /src
export default {
  name: 'ScoreBoard',
  components: {
    scoreBoard: ScoreBoard
  },
  data() {
    return {
      boards: [{}]
    }    
  },
  methods: {
  }

}
</script>
