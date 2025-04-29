const gameData = {
    easy: [
        {
            images: ["images/sun1.jpg", "images/sun2.jpg", "images/sun3.jpg", "images/sun4.jpg"],
            answer: "SUN",
            hint: "Shines bright in the sky"
        },
        {
            images: ["images/cute1.jpg", "images/cute2.jpg", "images/cute3.jpg", "images/cute4.jpg"],
            answer: "CUTE",
            hint: "adorable, me, celine"
        },
        {
            images: ["images/apple1.jpg", "images/apple2.jpg", "images/apple3.jpg", "images/apple4.jpg"],
            answer: "APPLE",
            hint: "crim student: ate pa print ate: a4? crim student: apple"
        },
        {
            images: ["images/yogurt1.jpg", "images/yogurt2.jpg", "images/yogurt3.jpg", "images/yogurt4.jpg"],
            answer: "YOGURT",
            hint: "Healthy dairy product"
        },
        {
            images: ["images/tree1.jpg", "images/tree2.jpg", "images/tree3.jpg", "images/tree4.jpg"],
            answer: "TREE",
            hint: "Grows in the forest"
        }
    ],
    hard: [
        {
            images: ["images/corrupt1.jpg", "images/corrupt2.jpg", "images/corrupt3.jpg", "images/corrupt4.jpg"],
            answer: "CORRUPT",
            hint: "government"
        },
        {
            images: ["images/pisay1.jpg", "images/pisay2.jpg", "images/pisay3.jpg", "images/pisay4.jpg"],
            answer: "PISAY",
            hint: "Philippine Science High School"
        },
        {
            images: ["images/hacker1.jpg", "images/hacker2.jpg", "images/hacker3.jpg", "images/hacker4.jpg"],
            answer: "HACKER",
            hint: "Computer security expert"
        },
        {
            images: ["images/jovani1.jpg", "images/jovani2.jpg", "images/jovani3.jpg", "images/jovani4.jpg"],
            answer: "JOVANI",
            hint: "A name that starts with J"
        },
        {
            images: ["images/kyleenorio1.jpg", "images/kyleenorio2.jpg", "images/kyleenorio3.jpg", "images/kyleenorio4.jpg"],
            answer: "KYLEENORIO",
            hint: "A unique last name"
        }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    const landingPage = document.getElementById('landing-page');
    const usernameContainer
