$(document).ready(function () {

    /* =========================
       PASSWORD
    ========================= */

    const correctPassword = "25082004";


    /* =========================
       PARTICLES
    ========================= */

    const symbols = [
        "🌸",
        "✦",
        "🎀",
        "🌷"
    ];

    for (let i = 0; i < 30; i++) {

        const particle = $("<span></span>");

        particle
            .addClass("particle")
            .text(
                symbols[
                    Math.floor(
                        Math.random() * symbols.length
                    )
                ]
            );

        particle.css({
            left: Math.random() * 100 + "%",
            fontSize: Math.random() * 18 + 12 + "px",
            animationDuration: Math.random() * 8 + 7 + "s",
            animationDelay: Math.random() * 5 + "s"
        });

        $(".particles").append(particle);
    }


    /* =========================
       START SURPRISE
    ========================= */

    $("#startSurprise").click(function () {

        changeScreen(
            "#opening",
            "#questions"
        );

    });


    /* =========================
       QUESTIONS
    ========================= */

    const questions = [

        {
            question:
                "Okay birthday girl... first tell me 😌🎂",

            hint:
                "This website is officially testing our friendship 😂",

            answers: [

                {
                    text: "I'm ready 😎",
                    type: "correct"
                },

                {
                    text: "I'm scared already 😭",
                    type: "correct"
                }

            ]
        },


        {
            question:
                "Do you remember how innocent we used to be? 🥹",

            hint:
                "Please don't look at our old photos... evidence exists 😂📸",

            answers: [

                {
                    text: "We were angels 😇",
                    type: "correct"
                },

                {
                    text: "I refuse to comment 😂",
                    type: "correct"
                }

            ]
        },


        {
            question:
                "What were we mostly doing during our childhood? 👀",

            hint:
                "Choose carefully... history is watching 😂",

            answers: [

                {
                    text: "Studying seriously 📚😌",
                    type: "wrong"
                },

                {
                    text: "Talking, laughing & creating chaos 😂",
                    type: "correct"
                }

            ]
        },


        {
            question:
                "Our first proper fight in 8th class was probably about... 😭",

            hint:
                "Are you sure you remember? 😂",

            answers: [

                {
                    text: "Yes 😂",
                    type: "correct"
                },

                {
                    text: "No 😌",
                    type: "correct"
                }

            ]
        },


        {
            question:
                "Honestly... how did our friendship survive all these years? 😂",

            hint:
                "Considering our random fights and dramatic moments 😭",

            answers: [

                {
                    text: "Pure luck 😂",
                    type: "correct"
                },

                {
                    text: "Because we're both amazing 😌✨",
                    type: "correct"
                }

            ]
        },


        {
            question:
                "If someone saw our old conversations... 💀",

            hint:
                "We might need to disappear immediately 😂",

            answers: [

                {
                    text: "They would be confused 😭",
                    type: "correct"
                },

                {
                    text: "They would understand everything 😌",
                    type: "wrong"
                }

            ]
        },


        {
            question:
                "What is our friendship basically made of? 🎀",

            hint:
                "Scientific research has been conducted 😂🔬",

            answers: [

                {
                    text: "50% memories 📸",
                    type: "correct"
                },

                {
                    text: "30% stupid fights 😂",
                    type: "correct"
                },

                {
                    text: "20% pure chaos 🎉",
                    type: "correct"
                }

            ]
        },


        {
            question:
                "Okay... now a serious question 🥹🌸",

            hint:
                "Don't worry, this one has no wrong answer 🤍",

            answers: [

                {
                    text: "I'm listening 👀",
                    type: "correct"
                }

            ]
        },


        {
            question:
                "Did you ever realise that we literally grew up together? 🥹",

            hint:
                "From worrying about homework to discussing life goals... 🌷",

            answers: [

                {
                    text: "Stop making me emotional 😭🤍",
                    type: "correct"
                },

                {
                    text: "We're still kids 😂",
                    type: "correct"
                }

            ]
        },


        {
            question:
                "Who would have thought those two kids would become this old? 😭",

            hint:
                "Excuse me... when did we become responsible people? 😂",

            answers: [

                {
                    text: "I still don't accept it 😭",
                    type: "correct"
                },

                {
                    text: "I'm still mentally in school 😂",
                    type: "correct"
                }

            ]
        },


        {
            question:
                "One thing that hasn't changed after all these years? 🥹",

            hint:
                "Think carefully... 👀",

            answers: [

                {
                    text: "Our friendship 🤍",
                    type: "correct"
                },

                {
                    text: "Our stupidity 😂",
                    type: "correct"
                }

            ]
        },


        {
            question:
                "Final question... are you ready to unlock your birthday surprise? 🎁✨",

            hint:
                "Warning: excessive memories and emotions ahead 🥹🎀",

            answers: [

                {
                    text: "YESSS! Open it 🎉",
                    type: "correct"
                },

                {
                    text: "I'm emotionally prepared 😭",
                    type: "correct"
                }

            ]
        }

    ];


    let currentQuestion = 0;


    function loadQuestion() {

        const q = questions[currentQuestion];

        $("#questionText")
            .hide()
            .text(q.question)
            .fadeIn(400);

        $("#questionHint")
            .hide()
            .text(q.hint)
            .fadeIn(400);

        $(".answers")
            .hide()
            .empty();


        q.answers.forEach(function (answer) {

            const button = $("<button></button>")
                .addClass("answer-btn")
                .text(answer.text)
                .attr(
                    "data-type",
                    answer.type
                );

            $(".answers").append(button);

        });


        $(".answers").fadeIn(400);


        $(".progress span")
            .removeClass("active")
            .each(function (index) {

                if (index <= currentQuestion) {
                    $(this).addClass("active");
                }

            });

    }


    /* =========================
       ANSWER CLICK
    ========================= */

    $(document).on(
        "click",
        ".answer-btn",
        function () {

            const type = $(this).data("type");


            if (type === "wrong") {

                const messages = [

                    "Nope nope nope 😭",
                    "Nice try 😂",
                    "That answer wasn't invited 😭",
                    "Are you sureee? 👀",
                    "Try again birthday girl 🎀"

                ];


                $(this)
                    .text(
                        messages[
                            Math.floor(
                                Math.random() * messages.length
                            )
                        ]
                    )
                    .addClass("shake");


                setTimeout(() => {

                    $(this)
                        .removeClass("shake");

                }, 500);


                return;
            }


            currentQuestion++;


            if (currentQuestion < questions.length) {

                loadQuestion();

            }

            else {

                changeScreen(
                    "#questions",
                    "#passwordScreen"
                );

            }

        }
    );


    /* =========================
       PASSWORD
    ========================= */

    $("#unlockBtn").click(function () {

        const password = $("#password").val();


        if (password === correctPassword) {

            $("#passwordError").text("");

            changeScreen(
                "#passwordScreen",
                "#giftScreen"
            );

        }

        else {

            $("#passwordError")
                .text(
                    "Oops! That's not the secret 😭🎀"
                );


            $(".lock-circle")
                .addClass("shake");


            setTimeout(function () {

                $(".lock-circle")
                    .removeClass("shake");

            }, 500);

        }

    });


    $("#password").keypress(function (e) {

        if (e.which === 13) {
            $("#unlockBtn").click();
        }

    });


    /* =========================
       GIFT
    ========================= */

    $("#giftBox").click(function () {

        $(this)
            .addClass("open");

        createConfetti();


        setTimeout(function () {

            changeScreen(
                "#giftScreen",
                "#cakeScreen"
            );

        }, 1500);

    });


    /* =========================
       BLOW CANDLES
    ========================= */

    $("#blowBtn").click(function () {

        $(".flame").each(function (index) {

            $(this)
                .delay(index * 150)
                .animate({
                    opacity: 0,
                    height: 0,
                    width: 0
                }, 500);

        });


        $("#blowBtn").fadeOut();


        $("#wishText")
            .fadeOut(300, function () {

                $(this)
                    .html(
                        "YAYYY! 🎉🎀<br><br>" +
                        "Your wish is now a little secret... 🤫✨<br>" +
                        "Maybe the universe is already listening 🌸"
                    )
                    .fadeIn(500);

            });


        createConfetti();


        setTimeout(function () {

            changeScreen(
                "#cakeScreen",
                "#wishScreen"
            );

        }, 2500);

    });


    /* =========================
       LETTER START
    ========================= */

    $("#letterStart").click(function () {

        changeScreen(
            "#wishScreen",
            "#envelopeScreen"
        );

    });


    /* =========================
       OPEN ENVELOPE
    ========================= */

    $("#envelope").click(function () {

        $(this).addClass("open");


        setTimeout(function () {

            changeScreen(
                "#envelopeScreen",
                "#letterScreen"
            );

        }, 1800);

    });


    /* =========================
       OPEN MEMORIES
    ========================= */

    $("#memoriesBtn").click(function () {

        changeScreen(
            "#letterScreen",
            "#memoryScreen"
        );

        currentMemory = 0;

        loadMemory();

    });


    /* =========================
       MEMORY DATA
    ========================= */

    const memories = [

        {
            type: "video",

            src: "images/memory1.mp4",

            text:
                "From Class 3rd to Class 12th, and still the same smile. " +
                "We started as little kids sharing crayons and ended school sharing dreams. " +
                "This was our first photo together, but not our last memory. " +
                "My childhood, my best friend forever. 🌸"
        },


        {
            type: "image",

            src: "images/memory2.jpeg",

            text:
                "We really thought we were just taking a normal picture... " +
                "little did we know, we were collecting memories that would become priceless someday. 🤍✨"
        },


        {
            type: "video",

            src: "images/memory3.mp4",

            text:
                "Just a small video... " +
                "but somehow it holds a thousand feelings, laughs, " +
                "and memories we can relive again and again. 🎥✨"
        },


        {
            type: "image",

            src: "images/memory4.jpeg",

            text:
                "Looking at all these pictures made me realise something... " +
                "we didn't just collect photos, we collected little pieces of our lives together. 🤍 " +
                "And no matter how much time passes, I'll always be grateful that you were part of my childhood, " +
                "my memories, and so many of my happiest moments. 🌷✨"
        }

    ];


    let currentMemory = 0;


    /* =========================
       LOAD MEMORY
    ========================= */

    function loadMemory() {

        const memory = memories[currentMemory];


        $("#memoryCard").fadeOut(250, function () {

            const video = $("#memoryVideo")[0];


            /* Stop previous video */

            if (video) {

                video.pause();
                video.currentTime = 0;

            }


            /* =========================
               IMAGE MEMORY
            ========================= */

            if (memory.type === "image") {

                $("#memoryVideo")
                    .hide()
                    .removeAttr("src");

                $("#memoryImage")
                    .attr(
                        "src",
                        memory.src
                    )
                    .show();

            }


            /* =========================
               VIDEO MEMORY
            ========================= */

            else if (memory.type === "video") {

                $("#memoryImage")
                    .hide();

                $("#memoryVideo")
                    .attr(
                        "src",
                        memory.src
                    )
                    .show();

                if (video) {
                    video.load();
                }

            }


            /* =========================
               MEMORY NUMBER
            ========================= */

            $("#memoryNumber")
                .text(
                    "Memory " +
                    (currentMemory + 1)
                );


            /* =========================
               MEMORY TEXT
            ========================= */

            $("#memoryText")
                .text(
                    memory.text
                );


            /* Show memory card */

            $("#memoryCard")
                .fadeIn(500);

        });


        /* =========================
           PREVIOUS BUTTON
        ========================= */

        if (currentMemory === 0) {

            $("#prevMemory")
                .css(
                    "visibility",
                    "hidden"
                );

        }

        else {

            $("#prevMemory")
                .css(
                    "visibility",
                    "visible"
                );

        }


        /* =========================
           NEXT BUTTON
        ========================= */

        if (
            currentMemory ===
            memories.length - 1
        ) {

            $("#nextMemory")
                .text(
                    "Final Surprise 🎉"
                );

        }

        else {

            $("#nextMemory")
                .text(
                    "Next Memory ✨"
                );

        }

    }


    /* =========================
       VIDEO FULLSCREEN
    ========================= */

    $("#memoryVideo").on("click", function () {

        const video = this;


        /*
           If browser supports native fullscreen,
           use it.
        */

        if (video.requestFullscreen) {

            video.requestFullscreen();

        }

        else if (video.webkitRequestFullscreen) {

            video.webkitRequestFullscreen();

        }

        else if (video.msRequestFullscreen) {

            video.msRequestFullscreen();

        }

    });


    /*
       When fullscreen closes,
       video remains on the SAME memory.
    */

    document.addEventListener(
        "fullscreenchange",
        function () {

            if (!document.fullscreenElement) {

                $("#memoryVideo")
                    .show();

            }

        }
    );


    /*
       Safari / iPhone fullscreen support
    */

    document.addEventListener(
        "webkitfullscreenchange",
        function () {

            if (!document.webkitFullscreenElement) {

                $("#memoryVideo")
                    .show();

            }

        }
    );


    /* =========================
       NEXT MEMORY
    ========================= */

    $("#nextMemory").click(function () {

        if (
            currentMemory <
            memories.length - 1
        ) {

            currentMemory++;

            loadMemory();

        }

        else {

            changeScreen(
                "#memoryScreen",
                "#finalScreen"
            );


            setTimeout(function () {

                createConfetti();

            }, 700);

        }

    });


    /* =========================
       PREVIOUS MEMORY
    ========================= */

    $("#prevMemory").click(function () {

        if (currentMemory > 0) {

            currentMemory--;

            loadMemory();

        }

    });


    /* =========================
       FINAL BACK
    ========================= */

    $("#finalBack").click(function () {

        changeScreen(
            "#finalScreen",
            "#memoryScreen"
        );

    });


    /* =========================
       RESTART
    ========================= */

    $("#restartBtn").click(function () {

        currentQuestion = 0;
        currentMemory = 0;


        loadQuestion();
        loadMemory();


        $(".flame").css({

            opacity: 1,
            width: "18px",
            height: "28px"

        });


        $("#blowBtn").show();


        $("#wishText").html(

            "Close your eyes for a moment, " +
            "make your wish... " +
            "and blow the candles ✨"

        );


        $("#giftBox")
            .removeClass("open");


        $("#envelope")
            .removeClass("open");


        $("#password")
            .val("");


        changeScreen(
            "#finalScreen",
            "#opening"
        );

    });


    /* =========================
       SCREEN TRANSITION
    ========================= */

    function changeScreen(current, next) {

        $(current).fadeOut(700, function () {

            $(current)
                .removeClass("active");


            $(next)
                .addClass("active")
                .hide()
                .fadeIn(900);


            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }


    /* =========================
       CONFETTI
    ========================= */

    function createConfetti() {

        const items = [

            "🌸",
            "🎀",
            "✨",
            "🎉",
            "🌷",
            "✦"

        ];


        for (
            let i = 0;
            i < 70;
            i++
        ) {

            const confetti =
                $("<span></span>")
                    .addClass("confetti")
                    .text(
                        items[
                            Math.floor(
                                Math.random() *
                                items.length
                            )
                        ]
                    );


            confetti.css({

                left:
                    Math.random() *
                    100 +
                    "vw",

                top:
                    "-50px",

                fontSize:
                    Math.random() *
                    20 +
                    15 +
                    "px",

                zIndex: 9999

            });


            $("body")
                .append(confetti);


            confetti.animate({

                top:
                    "110vh",

                left:
                    Math.random() *
                    100 +
                    "vw",

                opacity: 0

            },

            2500 +
            Math.random() * 2000,

            function () {

                $(this)
                    .remove();

            });

        }

    }


    /* =========================
       INITIAL LOAD
    ========================= */

    loadQuestion();
    loadMemory();

});
/* =========================================
   CUSTOM LETTER VIDEO PLAYER
========================================= */

$(document).ready(function () {

    const video = document.getElementById("letterVideo");

    const playBtn =
        document.getElementById("videoPlayBtn");

    const progress =
        document.getElementById("videoProgress");

    const timeDisplay =
        document.getElementById("videoTime");

    const muteBtn =
        document.getElementById("videoMuteBtn");

    const fullscreenBtn =
        document.getElementById("videoFullscreenBtn");


    /* Stop if video doesn't exist */

    if (!video) {
        return;
    }


    /* =========================
       FORMAT TIME
    ========================= */

    function formatTime(seconds) {

        if (isNaN(seconds)) {
            return "0:00";
        }

        const minutes =
            Math.floor(seconds / 60);

        const secondsPart =
            Math.floor(seconds % 60)
                .toString()
                .padStart(2, "0");

        return minutes + ":" + secondsPart;
    }


    /* =========================
       VIDEO LOADED
    ========================= */

    video.addEventListener(
        "loadedmetadata",
        function () {

            timeDisplay.textContent =
                "0:00 / " +
                formatTime(video.duration);

        }
    );


    /* =========================
       PLAY / PAUSE
    ========================= */

    playBtn.addEventListener(
        "click",
        function () {

            if (video.paused) {

                video.play();

            } else {

                video.pause();

            }

        }
    );


    /* =========================
       VIDEO PLAY
    ========================= */

    video.addEventListener(
        "play",
        function () {

            playBtn.textContent = "❚❚";

        }
    );


    /* =========================
       VIDEO PAUSE
    ========================= */

    video.addEventListener(
        "pause",
        function () {

            playBtn.textContent = "▶";

        }
    );


    /* =========================
       UPDATE PROGRESS
    ========================= */

    video.addEventListener(
        "timeupdate",
        function () {

            if (!video.duration) {
                return;
            }

            const percentage =
                (video.currentTime /
                video.duration) * 100;


            progress.value =
                percentage;


            timeDisplay.textContent =
                formatTime(video.currentTime) +
                " / " +
                formatTime(video.duration);

        }
    );


    /* =========================
       SEEK VIDEO
    ========================= */

    progress.addEventListener(
        "input",
        function () {

            if (!video.duration) {
                return;
            }

            video.currentTime =
                (progress.value / 100) *
                video.duration;

        }
    );


    /* =========================
       MUTE / UNMUTE
    ========================= */

    muteBtn.addEventListener(
        "click",
        function () {

            video.muted =
                !video.muted;


            if (video.muted) {

                muteBtn.textContent =
                    "🔇";

            } else {

                muteBtn.textContent =
                    "🔊";

            }

        }
    );


    /* =========================
       FULLSCREEN
    ========================= */

    fullscreenBtn.addEventListener(
        "click",
        function () {

            const container =
                document.querySelector(
                    ".custom-video"
                );


            if (!document.fullscreenElement) {

                if (
                    container.requestFullscreen
                ) {

                    container.requestFullscreen();

                } else if (
                    video.webkitEnterFullscreen
                ) {

                    video.webkitEnterFullscreen();

                }

            } else {

                if (
                    document.exitFullscreen
                ) {

                    document.exitFullscreen();

                }

            }

        }
    );


    /* =========================
       VIDEO ENDED
    ========================= */

    video.addEventListener(
        "ended",
        function () {

            playBtn.textContent = "▶";

            progress.value = 100;

        }
    );

});
