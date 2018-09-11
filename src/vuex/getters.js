export default {
  // 리스트 부분
  getLists: state => state.items,
  getTitle: state => state.title,

  // 타이머 부분
  isStarted: state => state.started,
  isPaused: state => state.paused,
  isStopped: state => state.stopped,
  isWorking: state => state.isWorking,
  getMinutes: state => Math.floor(state.counter / 60),
  getSeconds: state => state.counter % 60,
  getTimestamp: state => state.timestamp
}
