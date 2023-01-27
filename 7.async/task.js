"use strict"

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    // if (this.alarmCollection.some(item => item.time === time)) {
    //   throw console.warn('Уже присутствует звонок на это же время');
    // }
    this.alarmCollection.push({
      callback,
      time,
      canCall: true
    })
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }

  getCurrentFormattedTime() {
    const date = new Date();
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  start() {
    if (this.intervalId) {
      return;
    }
    const alarmCheck = () => this.alarmCollection.forEach(item => {
      if (item.time === this.getCurrentFormattedTime() && item.canCall) {
        item.canCall = false;
        item.callback();
      }
    });
    
    console.log(alarmCheck);
    this.intervalId = setInterval(alarmCheck, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(item => item.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

const clock = new AlarmClock();

// clock.addClock("16:45", f => f);
// clock.addClock("16:45", f => f);
// clock.addClock("16:45", f => f);
// console.log(clock.alarmCollection.length);

// clock.clearAlarms();
// console.log(clock.alarmCollection.length);

clock.addClock("16:45", f => f);
clock.addClock("16:46", f => f);
clock.removeClock("16:45");
console.log(clock.alarmCollection.length);
console.log(clock.alarmCollection);