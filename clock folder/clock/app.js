(() => {
	const flipper = (node, currentTime, nextTime) => {
	  let isFlipping = false;
	  const duration = 600;
	  const flipNode = node;
	  const frontNode = node.querySelector('.front');
	  const backNode = node.querySelector('.back');
	  const setFrontTime = (time) => {
		frontNode.dataset.number = time;
	  };
	  const setBackTime = (time) => {
		backNode.dataset.number = time;
	  };
	  const flipDown = (currentTime, nextTime) => {
		if (isFlipping) return false;
		isFlipping = true;
		setFrontTime(currentTime);
		setBackTime(nextTime);
		flipNode.classList.add('running');
		setTimeout(() => {
		  flipNode.classList.remove('running');
		  isFlipping = false;
		  setFrontTime(nextTime);
		}, duration);
	  };
	  return { flipDown };
	};
	const getTimeFromDate = (date) => {
	  return date.toTimeString().slice(0, 8).split(':').join('');
	};
	const flips = document.querySelectorAll('.flip');
	const now = new Date();
	const nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
	const nextTimeStr = getTimeFromDate(now);
	const flippers = Array.from(flips).map((flip, i) => {
	  return new flipper(flip, nowTimeStr[i], nextTimeStr[i]);
	});
	setInterval(() => {
	  const now = new Date();
	  const nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
	  const nextTimeStr = getTimeFromDate(now);
	  for (let i = 0; i < flippers.length; i++) {
		if (nowTimeStr[i] === nextTimeStr[i]) {
		  continue;
		}
		flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
	  }
	}, 1000);
  
	const timeDisplay = document.querySelector('#timeDisplay');
	const startBtn = document.querySelector('#startBtn');
	const pauseBtn = document.querySelector('#pauseBtn');
	const resetBtn = document.querySelector('#resetBtn');
	let startTime = 0;
	let elapsedTime = 0;
	let paused = true;
	let intervalId;
	let hrs = 0;
	let mins = 0;
	let secs = 0;
  
	function updateTime() {
	  elapsedTime = Date.now() - startTime;
	  secs = Math.floor((elapsedTime / 1000) % 60);
	  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
	  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
	  secs = pad(secs);
	  mins = pad(mins);
	  hrs = pad(hrs);
	  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
	}
  
	const pad = (unit) => {
	  return ('0' + unit).slice(-2);
	};
  
	startBtn.addEventListener('click', () => {
	  if (paused) {
		paused = false;
		startTime = Date.now() - elapsedTime;
		intervalId = setInterval(updateTime, 1000);
	  }
	});
  
	pauseBtn.addEventListener('click', () => {
	  if (!paused) {
		paused = true;
		elapsedTime = Date.now() - startTime;
		clearInterval(intervalId);
	  }
	});
  
	resetBtn.addEventListener('click', () => {
	  paused = true;
	  clearInterval(intervalId);
	  startTime = 0;
	  elapsedTime = 0;
	  hrs = 0;
	  mins = 0;
	  secs = 0;
	  timeDisplay.textContent = '00:00:00';
	});
  })();
  