<template>
  <div class="container">
    <div>
      <h4>
        <div class = "headline text-xs-center font-weight-bold">
          {{ isWorking ? workingtitle : restingtitle }}
          <span>{{getMinutes | leftpad}}</span>:<span>{{getSeconds | leftpad }}</span>
        </div>
      </h4>
      <v-layout justify-center>
        <v-btn
          color = "light-blue darken-4"
          class="white--text"
          :disabled = 'isStarted'
          @click="start">
          <v-icon>play_arrow</v-icon>
        </v-btn>
        <v-btn
          :disabled = '!isStarted || isPaused'
          @click="pause">
          <v-icon>pause</v-icon>
        </v-btn>
        <v-btn
          :disabled = '!isStarted && !isPaused'
          @click="stop">
          <v-icon>stop</v-icon>
        </v-btn>
      </v-layout>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

// const POMODORO_STATES = {
//   WORK: 'work',
//   REST: 'rest'
// }
//
// const STATES = {
//   STARTED: 'started',
//   STOPPED: 'stopped',
//   PAUSED: 'paused'
// }
//
// const WORKING_TIME_LENGTH_IN_MINUTES = 25
// const RESTING_TIME_LENGTH_IN_MINUTES = 5

export default{
  data () {
    return {
      workingtitle: 'Work!',
      restingtitle: 'Rest!'
    }
  },
  // data: function () {
  //   return {
  //     state: STATES.STOPPED,
  //     minute: WORKING_TIME_LENGTH_IN_MINUTES,
  //     second: 0,
  //     pomodoroState: POMODORO_STATES.WORK,
  //     timestamp: 0
  //   }
  // },
  computed: mapGetters([
    'getMinutes',
    'getSeconds',
    'isStarted',
    'isPaused',
    'isStopped',
    'isWorking']),
  // computed: {
  //   title: function () {
  //     return this.pomodoroState === POMODORO_STATES.WORK ? 'Work!' : 'Rest!'
  //   },
  //   min: function () {
  //     if (this.minute < 10) {
  //       return '0' + this.minute
  //     }
  //
  //     return this.minute
  //   },
  //   sec: function () {
  //     if (this.second < 10) {
  //       return '0' + this.second
  //     }
  //
  //     return this.second
  //   }
  // },
  methods: mapActions([
    'start',
    'stop',
    'pause'])
  // methods: {
  //   start: function () {
  //     this.state = STATES.STARTED
  //     this._tick()
  //     this.interval = setInterval(this._tick, 1000)
  //   },
  //   pause: function () {
  //     this.state = STATES.PAUSED
  //     clearInterval(this.interval)
  //   },
  //   stop: function () {
  //     this.state = STATES.STOPPED
  //     clearInterval(this.interval)
  //     this.pomodoroState = POMODORO_STATES.WORK
  //     this.minute = WORKING_TIME_LENGTH_IN_MINUTES
  //     this.second = 0
  //   },
  //   _tick: function () {
  //     // second가 0이 아니라면 값을 감소시킨다.
  //     if (this.second !== 0) {
  //       this.second--
  //       return
  //     }
  //     // second가 0이고 minute가 0이 아니라면
  //     // minute를 감소시키고 second를 59로 설정한다.
  //     if (this.minute !== 0) {
  //       this.minute--
  //       this.second = 59
  //       return
  //     }
  //     // second와 minute가 0이라면
  //     // 휴식시간과 업무시간을 토글한다
  //     this.pomodoroState = this.pomodoroState ===
  //     POMODORO_STATES.WORK ? POMODORO_STATES.REST : POMODORO_STATES.WORK
  //     if (this.pomodoroState === POMODORO_STATES.WORK) {
  //       this.minute = WORKING_TIME_LENGTH_IN_MINUTES
  //     } else {
  //       this.minute = RESTING_TIME_LENGTH_IN_MINUTES
  //     }
  //   }
  // }
}
</script>
