$(document).ready(function () {
    // Your provided jQuery code goes here
    jQuery("document").ready(function() {
        jQuery("#auditScoreWrap").hide();
        jQuery("#formWrapOuter").hide();
        if (jQuery(".carousel-item.active").index() == 0) {
            jQuery('.back').addClass("disabled")
        }
        function checkScroll(dir) {
            let distTop = jQuery("#calcWrapDiv").offset().top - jQuery(window).scrollTop();
            if (distTop > 10) {
                debugger ;jQuery('html, body').animate({
                    scrollTop: jQuery("#calcWrapDiv").offset().top
                }, 1000);
                setTimeout(function() {
                    jQuery('#devOps_auditslider').carousel(dir)
                }, 1000)
            } else if (-10 > distTop) {
                debugger ;jQuery('html, body').animate({
                    scrollTop: jQuery("#calcWrapDiv").offset().top
                }, 1000);
                setTimeout(function() {
                    jQuery('#devOps_auditslider').carousel(dir)
                }, 1000)
            } else {
                jQuery('#devOps_auditslider').carousel(dir)
            }
        }
        jQuery('.back').click(function() {
            let prev = 'prev';
            checkScroll(prev);
            for (let j = 5; jQuery(".carousel-item.active").index() < j; j--) {
                jQuery(".progressbar ul li").eq(j - 1).removeClass("active");
                jQuery(".progressbar ul li").eq(j - 2).removeClass("completed")
            }
            if (jQuery(".carousel-item.active").index() == 1) {
                jQuery('.back').addClass("disabled")
            } else {
                jQuery('.back').removeClass("disabled")
            }
            if (jQuery(".carousel-item.active").index() == 4) {
                jQuery('.next').removeClass("hide");
                jQuery('.calculate').removeClass("show")
            }
        });
        jQuery('.next').click(function() {
            let next = 'next';
            checkScroll(next);
            for (let i = 0; jQuery(".carousel-item.active").index() >= i; i++) {
                jQuery(".progressbar ul li").eq(i + 1).addClass("active");
                jQuery(".progressbar ul li").eq(i).addClass("completed")
            }
            if (jQuery(".carousel-item.active").index() > -1) {
                jQuery('.back').removeClass("disabled")
            }
            if (jQuery(".carousel-item.active").index() == 3) {
                jQuery('.next').addClass("hide");
                jQuery('.calculate').addClass("show")
            }
        });
        jQuery('#devOps_auditslider').on('slide.bs.carousel', function() {
            if (jQuery(".carousel-item.active").index() > -1) {
                jQuery('.back').removeClass("disabled")
            }
        });
        jQuery(".calculate").click(function() {
            let auditScore = 0;
            jQuery("#formWrapOuter").show();
            let score = 0;
            for (let s = 0; jQuery(".inputWrap select").length > s; s++) {
                if (jQuery("select")[s].value != "-1") {
                    score += parseInt(jQuery("select")[s].value)
                }
            }
            auditScore = score / 35;
            debugger ;let res = jQuery("#auditScore .elementor-heading-title");
            res.html(auditScore.toFixed(2));
            jQuery('html, body').animate({
                scrollTop: jQuery("#formWrapOuter").offset().top - 50
            }, 1000);
            jQuery("input[name='devop_score']").val(auditScore.toFixed(2))
        })
    });
    function showResult() {
        jQuery("#formWrapOuter").hide();
        jQuery("#auditScoreWrap").show();
        jQuery('html, body').animate({
            scrollTop: jQuery("#auditScoreWrap").offset().top - 50
        }, 1000)
    }
    // Sample data for dynamically generating questions and answers
    const assessmentData = [
        {
            pillar: "pillar0",
            questions: [
                {
                    question: "Question 1",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                // Add more questions for pillar0
                {
                    question: "Question 2",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 3",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 4",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 5",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 6",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
            ],
        },
        {
            pillar: "pillar1",
            questions: [
                // Similarly, add 6 questions for pillar1
                {
                    question: "Question 1",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 2",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 3",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 4",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 5",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 6",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
            ],
        },
        {
            pillar: "pillar2",
            questions: [
                // Similarly, add 6 questions for pillar1
                {
                    question: "Question 1",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 2",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 3",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 4",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 5",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 6",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
            ],
        },
        {
            pillar: "pillar3",
            questions: [
                // Similarly, add 6 questions for pillar1
                {
                    question: "Question 1",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 2",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 3",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 4",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 5",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 6",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
            ],
        },
        {
            pillar: "pillar4",
            questions: [
                // Similarly, add 6 questions for pillar1
                {
                    question: "Question 1",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 2",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 3",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 4",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 5",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 6",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
            ],
        },
        {
            pillar: "pillar5",
            questions: [
                // Similarly, add 6 questions for pillar1
                {
                    question: "Question 1",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 2",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 3",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 4",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 5",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
                {
                    question: "Question 6",
                    answers: [
                        { value: 1, text: "Answer 1" },
                        { value: 2, text: "Answer 2" },
                        { value: 3, text: "Answer 3" },
                        { value: 4, text: "Answer 4" },
                        { value: 5, text: "Answer 5" },
                    ],
                },
            ],
        },
        // Repeat the same pattern for the remaining pillars (pillar2 to pillar5)
        // Add data for more pillars as needed
    ];

    function populateQuestions() {
        assessmentData.forEach((pillarData) => {
            const pillarElement = $("#" + pillarData.pillar);

            pillarData.questions.forEach((questionData, index) => {
                const questionElement = $("<div class='question' id='" + pillarData.pillar + "_q" + (index + 1) + "'>");
                questionElement.append("<h4>" + questionData.question + "</h4>");
                const answersElement = $("<div class='answers'>");
                questionData.answers.forEach((answer) => {
                    answersElement.append("<label><input type='radio' name='" + pillarData.pillar + "_q" + (index + 1) + "' value='" + answer.value + "'>" + answer.text + "</label>");
                });
                questionElement.append(answersElement);
                pillarElement.append(questionElement);
            });

            // Add a separator or other styling here
            pillarElement.append("<hr>");
        });
    }

    populateQuestions();

    // ...
});