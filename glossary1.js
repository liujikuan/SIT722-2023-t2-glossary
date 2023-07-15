var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    const data = [
        ['ID', 'Term', 'Description', 'References'],
        ['1', 'waterfall methodology', ' linear approach to project management that requires each phase to be completed before moving on to the next', '[1]E. Corrales, “SDLC: What Is The Waterfall Model?,” Developer.com, Jun. 10, 2022. https://www.developer.com/project-management/sdlc-waterfall-model/'],
        ['2', 'Shift-left testing', 'testing software early in the development process', '[2]“Shift-left testing,” Wikipedia, Jun. 30, 2022. https://en.wikipedia.org/wiki/Shift-left_testing'],
        ['3', 'Agile', 'a type of software development methodology that focuses on the early delivery, continual improvement, and encourages flexible responses to change', '[3]H. Baashen, “Agile Methodology,” Medium, Jan. 26, 2021. https://blog.devgenius.io/agile-methodology-c9745645b4d'],
        ['4', 'DevOps', 'a software development approach that combines development (Dev) and operations (Ops) teams to enhance collaboration, automate processes, and deliver software more efficiently.', '[4] OpenAI. "what is DevOps? please give me a concise definition" OpenAI ChatGPT, 2023, chat.openai.com.'],
        ['5', 'production environment', 'operational environment where a software application or system is deployed and made available for end-users', '[5] OpenAI. "what is production environment in IT industry? please give me a concise definition" OpenAI ChatGPT, 2023, chat.openai.com.'],
        ['6', 'ITSM automation', 'the use of tools, technologies, and practices to automate and streamline various aspects of IT service management (ITSM) processes. ', '[6] OpenAI. "what is ITSM automation in IT industry? please give me a concise definition" OpenAI ChatGPT, 2023, chat.openai.com.'],
        ['7', 'Scrum', 'an agile project management system commonly used in software development', '[7]Wikipedia Contributors, “Scrum (software development),” Wikipedia, Apr. 16, 2019. https://en.wikipedia.org/wiki/Scrum_(software_development)'],
        ['8', 'Microservices', 'an architectural approach where a complex software application is broken down into smaller, independent, and loosely coupled services. Each service focuses on a specific business capability and can be developed, deployed, and scaled independently.', '[8] OpenAI. "what is Microservices in IT industry? please give me a concise definition" OpenAI ChatGPT, 2023, chat.openai.com.'],
        ['9', 'Deployment Pipeline', 'an automated sequence of steps or stages that software goes through from development to production. It is a continuous delivery mechanism that allows for the efficient and controlled release of software.', '[9] OpenAI. "what is Deployment Pipeline in IT industry? please give me a concise definition" OpenAI ChatGPT, 2023, chat.openai.com.'],
        ['10', 'Continuous Integration', 'a software development practice where developers frequently integrate their code changes into a shared repository. Each integration triggers an automated build process that compiles the code, runs automated tests, and detects integration issues or conflicts.', '[10] OpenAI. "what is Continuous Integration in IT industry? please give me a concise definition" OpenAI ChatGPT, 2023, chat.openai.com.']
    ];

    res.render('index', { data });
});

module.exports = router;