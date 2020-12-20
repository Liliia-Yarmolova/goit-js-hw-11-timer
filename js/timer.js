
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this._selector = selector;
        this._targetDate = targetDate;
    
        // this.init();
        
    }

    init() {
    if (Date.now() < this._targetDate) {
      let timerId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = this._targetDate - currentTime;
        this.getTimeComponents(deltaTime);
      }, 1000);
    } else {
      clearInterval(timerId);
    }
  }
     

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        const timer1 = document.querySelector(`${this._selector}`);
        const dataDays = timer1.querySelector('[data-value="days"]');
        const dataHours = timer1.querySelector('[data-value="hours"]');
        const dataMinutes = timer1.querySelector('[data-value="mins"]');
        const dataSeconds = timer1.querySelector('[data-value="secs"]');
        dataDays.textContent = days;
        dataHours.textContent = hours;
        dataMinutes.textContent = mins;
        dataSeconds.textContent = secs;
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
} 


const downDate = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2020"),
});

downDate.init();


