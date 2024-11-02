
let procrastinationScore = 0;
let countdown;
let soundEnabled = true;


const tips = [
    "Take a nap, you've earned it... somehow.",
    "Why work when you can scroll through memes?",
    "Just one more episode... or two.",
    "Maybe tomorrow you'll feel more motivated!",
    "Reward yourself with a snack break... now!",
    "That project isn’t due until tomorrow... right?",
    "Stretch out a bit. Maybe a quick 30-minute yoga session?",
    "Your future self will totally handle this!",
    "Check your phone! Who knows what you missed in the last 5 minutes?",
    "Step away for a little walk. Clear your head... indefinitely.",
    "Start after one more cup of tea. Or two.",
    "Think of this as a mental health break!",
    "Consider all the things you could do later... like work.",
    "Catch up on your notifications; they'll wait for you to respond.",
    "Take a deep breath... and slowly scroll social media.",
    "Treat yourself to a tiny break. Maybe an hour.",
    "Check if your emails have miraculously disappeared.",
    "You’ve done so much today... okay, maybe tomorrow?",
    "It’s better to start fresh tomorrow morning!",
    "Take a moment to stretch... like, all afternoon.",
    "No one ever said work has to be done today.",
    "One more snack break to fuel up your motivation.",
    "The task will still be there tomorrow. Why rush?",
    "Relax, sometimes doing nothing is a task in itself.",
    "You work better under pressure, so just wait for it!",
    "Treat yourself to some internet rabbit holes.",
    "Check the news. Who knows what’s happening out there?",
    "A break might be all you need... maybe a long one.",
    "Try organizing your workspace. That counts, right?",
    "Refresh the fridge, maybe it’s hiding something new.",
    "Look up ‘procrastination tips’ to procrastinate even more.",
    "You’re just recharging your creativity. All day.",
    "Do some ‘research’ on cat videos. It’s therapeutic.",
    "Reflect on your goals. Think deeply... and do nothing.",
    "Daydreaming is productive... at least, it could be.",
    "Read some motivational quotes... tomorrow.",
    "Rest now; who knows what tomorrow will bring?",
    "There’s a reason it’s called a ‘deadline’... tomorrow.",
    "Organize your music library. That’s important too.",
    "Procrastinate a bit; you’re saving your energy.",
    "The weekend is perfect for catching up on work... or not.",
    "Why rush success when you can pace it out... slowly.",
    "Refresh your inbox – maybe something exciting will appear.",
    "You’ll be twice as productive if you wait until tomorrow.",
    "Visualize success... that counts as progress, right?",
    "Take a break now; you’ll be super productive... later.",
    "Sometimes it’s better to just sit back and contemplate.",
    "Be gentle with yourself... and go watch TV.",
    "Remember: small breaks keep you healthy.",
    "Consider writing a to-do list... and leave it for later.",
    "Just ‘five more minutes’ – classic.",
    "Why do now what you can put off until tomorrow?",
    "Time flies... but there’s always tomorrow!",
    "Listen to music. It’ll inspire you... eventually.",
    "You’ve earned a rest. Start fresh... next week.",
    "Treat yourself to a mental vacation.",
    "Take it easy. Rome wasn’t built in a day.",
    "Watch one tutorial on productivity, then call it a day.",
    "Think about all the work you’ll do – later.",
    "Reward yourself for thinking about working.",
    "Maybe next time will be more productive.",
    "Why ruin today’s calm with work?",
    "Consider the future... and do nothing about it.",
    "Take another break, and then maybe another.",
    "Reflect on life... while doing absolutely nothing.",
    "Just one more quick phone check.",
    "You deserve a little scroll time.",
    "The task will wait. Time for a power nap!",
    "Imagine doing your work perfectly... one day.",
    "Dream big – but only dream, for now.",
    "Think about organizing your thoughts... later.",
    "It’s okay, tomorrow is a fresh start.",
    "You’ll be brilliant tomorrow... just wait!",
    "Enjoy the calm before you start... eventually.",
    "You can always start in five more minutes.",
    "Procrastination is just pacing yourself.",
    "Another cup of coffee and you’ll be ready.",
    "Reward yourself for all the ‘thinking’ you did.",
    "Maybe tomorrow will feel more productive.",
    "Just a small break... maybe an hour or two.",
    "Take a little rest; you’ll work harder tomorrow.",
    "The task will be easier after some relaxation.",
    "It’s not procrastination, it’s prioritization.",
    "Start fresh tomorrow, brighter and stronger.",
    "Work will always be there; no rush!",
    "You’ve been thinking about it – that counts!",
    "Settle into the idea of doing it tomorrow.",
    "Procrastination isn’t a bad thing... right?",
    "Take a moment to reflect on your decision to relax.",
    "Make plans for tomorrow, and relax today.",
    "Take a mini-vacation from responsibility.",
    "They say creative ideas come from rest!",
    "Tomorrow will be so much more productive.",
    "Recharge today so you’re ready tomorrow!",
    "Good ideas need time to simmer... forever.",
    "Postpone it – maybe it’ll fix itself.",
    "Treat yourself for thinking about doing it.",
    "It’s okay to pause... indefinitely.",
    "Kick back, relax, and contemplate starting soon.",
    "Productivity waits for no one, except you!",
    "Just one more break for good measure.",
    "Close your eyes and imagine productivity."
];

const moodTips = {
    lazy: [
        "Just relax, you deserve it!",
        "Why rush? Take it easy.",
        "Put your feet up and unwind.",
        "Today is for chilling, not doing!",
        "Life’s too short to rush. Enjoy the moment!",
        "Kick back, relax, and let the world go by.",
        "Let yourself lounge a little longer.",
        "Why move when you can be cozy right here?"
    ],
    overwhelmed: [
        "Take a deep breath and let future-you handle it.",
        "One thing at a time – or maybe nothing at all for now!",
        "Don’t worry, tomorrow has your back.",
        "Pause and let the chaos settle around you.",
        "Close your eyes and let today drift by.",
        "Step away; future you can tackle it better.",
        "Just breathe. Tasks can wait.",
        "Overthinking it won’t help – take a mental break!"
    ],
    ambitious: [
        "Channel that energy... tomorrow.",
        "Save those big ideas for a fresh start tomorrow!",
        "Plot, plan, and postpone greatness for another day!",
        "Big dreams can wait till tomorrow’s fresh start.",
        "Keep that ambition simmering – today, just daydream.",
        "Set the groundwork... mentally. Rest is productive too!",
        "Motivation is awesome! Save it for a brighter tomorrow.",
        "Rest up now to conquer later."
    ],
    bored: [
        "Check out a funny video or two... or ten.",
        "Scroll endlessly – who knows what you might find?",
        "Open a random Wikipedia article and see where it leads!",
        "Explore the depths of the internet, because why not?",
        "Play a quick game... just for a while.",
        "Take a detour into the world of memes.",
        "Get lost in an interesting documentary... or cat videos.",
        "Find out what your favorite celeb is up to!"
    ],
    creative: [
        "Imagine new projects... but don’t start them yet.",
        "Sketch out ideas in your mind and save them for later!",
        "Think about it – planning counts as progress!",
        "Let your creativity brew slowly, without lifting a finger.",
        "Dream big! Today is for inspiration, not execution.",
        "Scribble some ideas down... action can wait.",
        "Build castles in the air; tomorrow is for building them on the ground.",
        "Brainstorm wildly, but let the action sit till later."
    ],
    tired: [
        "Rest up, you'll tackle everything tomorrow!",
        "You’ve done enough just by existing today.",
        "Sleep now, conquer later.",
        "There’s no rush – recharge at your own pace.",
        "Close your eyes, let today drift away.",
        "Curl up, relax, and let the world spin without you.",
        "Take a nap; it’s the universe’s way of saying, ‘not today!’",
        "Recharge those batteries and let tomorrow handle itself."
    ],
    distracted: [
        "Oh, look! Something shiny!",
        "Take a break; who can focus for that long anyway?",
        "Follow that rabbit hole and see where it leads.",
        "Maybe you need another quick distraction – it’s okay!",
        "Let your mind wander freely. No obligations today!",
        "Embrace the distractions; they’re calling for a reason!",
        "Maybe that notification was important... better check.",
        "Why not follow your thoughts where they lead?"
    ],
    stressed: [
        "Take a deep breath; the world can wait.",
        "Step back; nothing has to be done right now.",
        "Put it all aside – tomorrow’s a new day.",
        "Give yourself permission to pause.",
        "Nothing is as urgent as peace of mind.",
        "Step away, breathe deeply, and let things unfold.",
        "Future you can handle the stress better!",
        "Take the weight off – everything else can wait."
    ]
   
};

const encouragements = [
    "Why not take a little break?",
    "Keep procrastinating, you're doing great!",
    "Think of all the fun you could be having right now!",
    "A small break never hurt anyone!",
    "You deserve this downtime!",
    "Remember, tomorrow is a new day to be productive.",
    "Why do today what you can put off until tomorrow?",
    "Enjoy this moment of leisure; you’ve earned it!",
    "You can't rush creativity, so take your time.",
    "Embrace the art of doing nothing!",
    "Take a moment to relax and recharge!",
    "Nothing bad comes from a little procrastination.",
    "Let your mind wander; it might surprise you!",
    "You’re on the path of relaxation excellence!",
    "Take it easy! The world can wait.",
    "You're practicing the fine art of self-care.",
    "A relaxed mind is a creative mind!",
    "Today is for fun, tomorrow is for work!",
    "Go ahead, indulge in your distraction!",
    "Remember, balance is key; a break is essential.",
    "Your brain will thank you for this break!",
    "The work will still be there when you’re ready!",
    "Procrastination is just planning in disguise!",
    "Kick back and enjoy your time off; it's important!",
    "Every great idea needs time to brew. Take a break!",
    "Focus on yourself for a while; you deserve it!",
    "Take this time to find your inner zen.",
    "Why rush when you can relax and enjoy the moment?",
    "Procrastinate today, and excel tomorrow!",
    "Do nothing – it's a valid choice!",
    "You’re becoming a pro at taking breaks!",
    "Why not explore a new hobby? Maybe later!",
    "Breathe deeply, and enjoy this moment of calm.",
    "Just because it’s on the list doesn’t mean it has to be done now!",
    "Every procrastination session is a step towards genius!",
    "Celebrate your right to be unproductive today!",
    "Give yourself permission to do absolutely nothing!",
    "Your future self will appreciate the rest you're taking!",
    "Let’s be real: breaks are necessary for success!",
    "Tomorrow, you can conquer the world; today, just relax!"
];


document.addEventListener('DOMContentLoaded', function() {
    createScoreBoard();
    createSoundToggle();
    initializeStarRating();
    showRandomTip();
    showEncouragement();
    
   
    setInterval(showEncouragement, Math.floor(Math.random() * 10000) + 5000);
});

// Score Board Functions
function createScoreBoard() {
    const scoreBoard = document.createElement('div');
    scoreBoard.className = 'score-board';
    scoreBoard.innerHTML = `
        <div class="score-display">
            <h3>Procrastination Points</h3>
            <div class="current-score">0</div>
        </div>
        <div class="high-scores">
            <h4>Hall of Fame</h4>
            <div class="high-scores-list"></div>
        </div>
    `;
    document.querySelector('.container').insertBefore(scoreBoard, document.querySelector('.container').firstChild);
    updateHighScores();
}

function updateHighScores() {
    const highScores = [
        { name: "Ultimate Procrastinator", score: 1000 },
        { name: "Professional Time-Waster", score: 750 },
        { name: "Casual Avoider", score: 500 }
    ];
    
    const allScores = [...highScores, { name: "Your Score", score: procrastinationScore }]
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    
    const scoresList = document.querySelector('.high-scores-list');
    scoresList.innerHTML = allScores.map(score => `
        <div class="high-score-entry ${score.name === 'Your Score' ? 'current-user' : ''}">
            <span class="score-name">${score.name}</span>
            <span class="score-value">${score.score}</span>
        </div>
    `).join('');
}

function addPoints(amount, reason) {
    procrastinationScore += amount;
    updateScoreDisplay();
    showPointsAlert(amount, reason);
}

function updateScoreDisplay() {
    document.querySelector('.current-score').textContent = procrastinationScore;
    updateHighScores();
}

function updateHighScores() {
    const highScores = [
        { name: "Ultimate Procrastinator", score: 1000 },
        { name: "Professional Time-Waster", score: 750 },
        { name: "Casual Avoider", score: 500 }
    ];
    const scoresList = document.querySelector('.high-scores-list');
    const allScores = [...highScores, { name: "Your Score", score: procrastinationScore }]
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    
    scoresList.innerHTML = allScores.map(score => `
        <div class="high-score-entry ${score.name === 'Your Score' ? 'current-user' : ''}">
            <span class="score-name">${score.name}</span>
            <span class="score-value">${score.score}</span>
        </div>
    `).join('');
}


// Tip Functions
function showRandomTip() {
    playSound('click');
    const tip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("procrastination-tip").innerText = tip;
    resetRating();
    addPoints(25, "New procrastination tip!");
}

function showMoodTip() {
    const mood = document.getElementById("mood").value;
    const moodTipArray = moodTips[mood];
    const randomTip = moodTipArray[Math.floor(Math.random() * moodTipArray.length)];
    document.getElementById("procrastination-tip").innerText = randomTip;
    addPoints(30, `Embracing your ${mood} mood!`);

}


function initializeStarRating() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            playSound('click');
            const rating = parseInt(this.getAttribute('data-value'));
            document.getElementById("rating-feedback").innerText = `You rated this tip: ${rating} star(s)!`;
            
            resetRating();
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('selected');
            }
            
            addPoints(rating * 10, "Rating a procrastination tip!");
        });
    });
}

function resetRating() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => star.classList.remove('selected'));
    document.getElementById("rating-feedback").innerText = '';
}

// Countdown Functions
function startCountdown() {
    playSound('click');
    clearInterval(countdown);
    let timeLeft = 10;
    updateProgress(timeLeft);
    
    countdown = setInterval(() => {
        timeLeft--;
        updateProgress(timeLeft);
        
        if (timeLeft <= 0) {
            playSound('achievement');
            timeLeft = Math.floor(Math.random() * 10) + 5;
            document.querySelector('.progress-bar').classList.add('pulse');
            addPoints(50, "Successfully delayed the countdown!");
        } else {
            document.querySelector('.progress-bar').classList.remove('pulse');
        }
    }, 1000);
}

function updateProgress(timeLeft) {
    const width = (timeLeft / 10) * 100;
    document.querySelector('.progress-bar').style.width = `${width}%`;
}

// Sound Functions
function createSoundToggle() {
    const soundButton = document.createElement('button');
    soundButton.className = 'sound-toggle';
    soundButton.innerHTML = '🔊';
    soundButton.onclick = () => {
        soundEnabled = !soundEnabled;
        soundButton.innerHTML = soundEnabled ? '🔊' : '🔈';
    };
    document.body.appendChild(soundButton);
}

function playSound(type) {
    if (!soundEnabled) return;
    
    const sound = document.getElementById(`${type}-sound`);
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
}

// Alert Functions
function showEncouragement() {
    const msg = encouragements[Math.floor(Math.random() * encouragements.length)];
    let modal = document.createElement("div");
    modal.className = "modal";
    modal.innerText = msg;
    document.body.appendChild(modal);
    modal.style.display = "block";
    setTimeout(() => modal.style.display = "none", 3000);
}

setInterval(showEncouragement, Math.floor(Math.random() * 10000) + 5000);
