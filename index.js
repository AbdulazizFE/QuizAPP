const questions = [
  {
    question: "How many default environments are there in DXP?",
    options: ["a) 1", "b) 2", "c) 3", "d) 4"],
    answer: "c) 3",
  },
  {
    question: "What is the purpose of DXP?",
    options: [
      "a) Create digital experiences",
      "b) Manage only static files",
      "c) Generate API keys",
      "d) Integrate with external databases",
    ],
    answer: "a) Create digital experiences",
  },
  {
    question: "What is the function of Cloudflare Caching in DXP?",
    options: [
      "a) Store database backups",
      "b) Manage API calls",
      "c) Improve performance by caching static files",
      "d) Automate deployments",
    ],
    answer: "c) Improve performance by caching static files",
  },

  {
    question: "What are the available options for managing failover in DXP?",
    options: [
      "a) There are no failover options in DXP",
      "b) Contact Optimizely support to enable failover",
      "c) Activate failover by updating the website's configuration",
      "d) Failover is enabled by default in DXP",
    ],
    answer: "a) There are no failover options in DXP",
  },

  {
    question: "What is the recommended format for code packages in DXP?",
    options: ["a) .zip", "b) .rar", "c) .nupkg", "d) .exe"],
    answer: "c) .nupkg",
  },

  {
    question: "Which operating system is supported by DXP?",
    options: [
      "a) Linux only",
      "b) Windows Server 2019",
      "c) Windows Server 2012 R2",
      "d) Both Linux and Windows Server",
    ],
    answer: "d) Both Linux and Windows Server",
  },

  {
    question: "Which web browser is recommended for editing in DXP?",
    options: [
      "a) Firefox",
      "b) Internet Explorer",
      "c) Google Chrome",
      "d) Safari",
    ],
    answer: "c) Google Chrome",
  },

  {
    question: "What is DXP Dashboard used for?",
    options: [
      "a) Managing API keys",
      "b) Displaying information about website usage and availability",
      "c) Managing failover",
      "d) Performing code review checks",
    ],
    answer: "b) Displaying information about website usage and availability",
  },

  {
    question:
      "What options do you have for creating custom visitor groups in Optimizely CMS?",
    options: [
      "a) Custom visitor groups cannot be created",
      "b) Use only predefined visitor groups",
      "c) Create custom criteria for visitor groups",
      "d) Use a third-party plugin",
    ],
    answer: "c) Create custom criteria for visitor groups",
  },

  {
    question:
      "What is the purpose of Optimizely Search & Navigation within DXP?",
    options: [
      "a) Managing databases",
      "b) Enhancing website security",
      "c) Creating custom search experiences and filtering",
      "d) Optimizing load times for dynamic pages",
    ],
    answer: "c) Creating custom search experiences and filtering",
  },

  {
    question:
      "What is the primary goal of using DXP for managing digital experiences?",
    options: [
      "a) Increasing hardware resources",
      "b) Optimizing code deployment",
      "c) Enhancing and personalizing user experiences",
      "d) Reducing content storage costs",
    ],
    answer: "c) Enhancing and personalizing user experiences",
  },

  {
    question:
      "Which cloud service provider's infrastructure does DXP primarily rely on?",
    options: [
      "a) Amazon Web Services (AWS)",
      "b) Google Cloud Platform (GCP)",
      "c) Microsoft Azure",
      "d) Oracle Cloud",
    ],
    answer: "c) Microsoft Azure",
  },

  {
    question:
      "How does DXP handle the deployment process across different environments?",
    options: [
      "a) It relies on manual code deployment to each environment",
      "b) Code is automatically pushed from preproduction to production",
      "c) It uses machine learning to optimize deployments",
      "d) Deployment is not a feature of DXP",
    ],
    answer: "a) It relies on manual code deployment to each environment",
  },

  {
    question: "What role does Azure Blob Storage serve in DXP's architecture?",
    options: [
      "a) Storing API keys",
      "b) Hosting web applications",
      "c) Storing uploaded files, such as images and documents",
      "d) Managing website content",
    ],
    answer: "c) Storing uploaded files, such as images and documents",
  },

  {
    question:
      "In the context of DXP, what does 'zero downtime deployment' mean?",
    options: [
      "a) There is no deployment process in DXP",
      "b) Deployment occurs without any impact on website availability",
      "c) Deployment only happens during scheduled maintenance",
      "d) The website is temporarily taken offline during deployment",
    ],
    answer: "b) Deployment occurs without any impact on website availability",
  },

  {
    question: "How can you enable load balancing in DXP?",
    options: [
      "a) Contacting a cloud provider",
      "b) Manually configuring server settings",
      "c) Using third-party load balancing software",
      "d) It is not possible to enable load balancing in DXP",
    ],
    answer: "c) Using third-party load balancing software",
  },

  {
    question: "What is the primary role of configuration files in DXP?",
    options: [
      "a) Managing user authentication",
      "b) Configuring data options programmatically",
      "c) Storing website content",
      "d) Handling database backups",
    ],
    answer: "c) Storing website content",
  },

  {
    question:
      "Which section of the DXP Management Portal allows you to manage access rights, languages, and scheduled jobs?",
    options: [
      "a) Deployment",
      "b) Personalization",
      "c) Admin view",
      "d) DXP Dashboard",
    ],
    answer: "c) Admin view",
  },

  {
    question:
      "In Optimizely CMS within DXP, what is the purpose of visitor groups?",
    options: [
      "a) Managing server infrastructure",
      "b) Creating and optimizing personalized content",
      "c) Generating API keys",
      "d) Monitoring website traffic",
    ],
    answer: "b) Creating and optimizing personalized content",
  },

  {
    question:
      "What are some common functionalities provided by Optimizely CMS plugins in DXP?",
    options: [
      "a) Content management, A/B testing, and sitemap generation",
      "b) Server security and firewall management",
      "c) Network monitoring and optimization",
      "d) Automated backup and recovery",
    ],
    answer: "a) Content management, A/B testing, and sitemap generation",
  },

  {
    question: "What does DXP stand for?",
    options: [
      "a) Data Exchange Platform",
      "b) Digital Experience Platform",
      "c) Dynamic XML Processor",
      "d) Database Extension Protocol",
    ],
    answer: "b) Digital Experience Platform",
  },

  {
    question: "What does DXP stand for?",
    options: [
      "a) Data Exchange Platform",
      "b) Digital Experience Platform",
      "c) Dynamic XML Processor",
      "d) Database Extension Protocol",
    ],
    answer: "b) Digital Experience Platform",
  },
  {
    question: "What does DXP stand for?",
    options: [
      "a) Data Exchange Platform",
      "b) Digital Experience Platform",
      "c) Dynamic XML Processor",
      "d) Database Extension Protocol",
    ],
    answer: "b) Digital Experience Platform.",
  },
  {
    question: "How many default Azure environments are included in DXP?",
    options: ["a) 1", "b) 2", "c) 3", "d) 4"],
    answer: "c) 3",
  },
  {
    question:
      "In DXP, what is the primary responsibility of a developer regarding infrastructure?",
    options: [
      "a) Managing servers",
      "b) Pushing code packages",
      "c) Handling database backups",
      "d) Configuring network settings",
    ],
    answer: "b) Pushing code packages",
  },
  {
    question: "Which service is used for caching static files in DXP?",
    options: [
      "a) Azure Cache",
      "b) Cloudflare Caching",
      "c) Content Delivery Network (CDN)",
      "d) Blob Storage",
    ],
    answer: "c) Content Delivery Network (CDN)",
  },
  {
    question: "What does 'failover' mean in the context of DXP?",
    options: [
      "a) A coding error",
      "b) A backup and recovery process",
      "c) A feature to replicate the site to another data center",
      "d) A type of search and navigation functionality",
    ],
    answer: "c) A feature to replicate the site to another data center",
  },
  {
    question: "How often are transaction logs backed up in DXP?",
    options: ["a) Hourly", "b) Every 5 minutes", "c) Daily", "d) Weekly"],
    answer: "a) Hourly",
  },
  {
    question: "What is the primary purpose of the Deployment API in DXP?",
    options: [
      "a) Managing user accounts",
      "b) Deploying code packages to environments",
      "c) Monitoring website traffic",
      "d) Generating API keys",
    ],
    answer: "b) Deploying code packages to environments",
  },
  {
    question:
      "Which deployment option in DXP involves warming up the site and is ideal for the production environment?",
    options: [
      "a) Direct deploy",
      "b) Zero downtime deployment",
      "c) Code package format",
      "d) Self-service deployment",
    ],
    answer: "b) Zero downtime deployment",
  },
  {
    question:
      "Which web server options are compatible with DXP for hosting ASP.NET Core applications?",
    options: [
      "a) Only Microsoft IIS",
      "b) Any ASP.NET Core compatible hosting option",
      "c) Apache",
      "d) Nginx",
    ],
    answer: "b) Any ASP.NET Core compatible hosting option",
  },
  {
    question: "What is the recommended web browser for editing in DXP?",
    options: [
      "a) Firefox",
      "b) Internet Explorer",
      "c) Google Chrome",
      "d) Microsoft Edge",
    ],
    answer: "c) Google Chrome",
  },
  {
    question:
      "Which section in DXP Management Portal allows you to create deployment API credential keys?",
    options: [
      "a) Deployment",
      "b) Content copying",
      "c) Database export",
      "d) Log stream",
    ],
    answer: "a) Deployment",
  },
  {
    question:
      "What does Optimizely Search & Navigation primarily enable you to do within DXP?",
    options: [
      "a) Manage user accounts",
      "b) Create custom search experiences and filtering",
      "c) Backup and restore databases",
      "d) Monitor server logs",
    ],
    answer: "b) Create custom search experiences and filtering",
  },

  {
    question:
      "What are the primary benefits of using a Digital Experience Platform (DXP)?",
    options: [
      "a) Enhanced website security",
      "b) Improved user experience, personalization, and content management",
      "c) Reduced server maintenance costs",
      "d) Compatibility with legacy systems",
    ],
    answer:
      "b) Improved user experience, personalization, and content management",
  },
  {
    question:
      "Which cloud-based services are commonly utilized within DXP's infrastructure?",
    options: [
      "a) Social media integrations",
      "b) Content delivery networks (CDNs)",
      "c) On-premises servers",
      "d) Virtual reality platforms",
    ],
    answer: "a) Social media integrations\nb) Content delivery networks (CDNs)",
  },

  {
    question:
      "How does DXP handle the deployment process across different environments?",
    options: [
      "a) It uses a continuous integration/continuous deployment (CI/CD) pipeline",
      "b) Developers manually push code to each environment one at a time",
      "c) Deployment is not supported in DXP",
      "d) It automatically deploys code to all environments simultaneously",
    ],
    answer:
      "a) It uses a continuous integration/continuous deployment (CI/CD) pipeline",
  },

  {
    question: "What role does Azure Blobs play in DXP's infrastructure?",
    options: [
      "a) Storing backup data",
      "b) Managing API keys",
      "c) Storing uploaded files, such as images and documents",
      "d) Handling database queries",
    ],
    answer: "c) Storing uploaded files, such as images and documents",
  },

  {
    question:
      "In the context of DXP, what does 'read-only mode' mean during failover?",
    options: [
      "a) Users can only view website content but cannot interact with it",
      "b) The site is temporarily taken offline for maintenance",
      "c) Users can edit and update content, but new data cannot be added",
      "d) The site can only be accessed by administrators",
    ],
    answer:
      "a) Users can only view website content but cannot interact with it",
  },

  {
    question: "How can you enable load balancing in DXP?",
    options: [
      "a) By using third-party load balancing software",
      "b) By manually adjusting the server settings",
      "c) By configuring remote events",
      "d) By contacting the hosting provider",
    ],
    answer: "a) By using third-party load balancing software",
  },
  {
    question: "What is the purpose of configuration files in DXP?",
    options: [
      "a) To configure data options programmatically",
      "b) To store user passwords securely",
      "c) To create backup copies of databases",
      "d) To store website content",
    ],
    answer: "a) To configure data options programmatically",
  },

  {
    question:
      "Which section of the DXP Management Portal allows you to manage access rights and scheduled jobs?",
    options: [
      "a) Admin view",
      "b) Deployment",
      "c) Personalization",
      "d) DXP Dashboard",
    ],
    answer: "a) Admin view",
  },
  {
    question:
      "What is the role of visitor groups in Optimizely CMS within DXP?",
    options: [
      "a) Creating and optimizing digital experiences for different user segments",
      "b) Managing user access to the CMS",
      "c) Managing database replication",
      "d) Generating API keys",
    ],
    answer:
      "a) Creating and optimizing digital experiences for different user segments",
  },
  {
    question: "What are some common features of Optimizely CMS plugins in DXP?",
    options: [
      "a) Content management, A/B testing, and sitemap generation",
      "b) Managing server infrastructure",
      "c) Providing cybersecurity services",
      "d) Monitoring website traffic",
    ],
    answer: "a) Content management, A/B testing, and sitemap generation",
  },

];

let currentQuestion = 0;
let score = 0;

function loadQuestion(index) {
  const question = questions[index];
  const questionElement = document.getElementById("question");
  const optionsList = document.getElementById("options");

  questionElement.textContent = `${index + 1}. ${question.question}`;
  optionsList.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const optionItem = document.createElement("li");
    optionItem.innerHTML = `
      <label>
        <input type="radio" name="answer" value="${optionIndex}">
        ${option}
      </label>
    `;
    optionsList.appendChild(optionItem);
  });
}

function checkAnswer() {
  const selectedOptionIndex = parseInt(
    document.querySelector('input[name="answer"]:checked').value
  );

  if (selectedOptionIndex == null) {
    alert("Please select an answer.");
    return;
  }

  const userAnswer = questions[currentQuestion].options[selectedOptionIndex];
  const correctAnswer = questions[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion(currentQuestion);
  } else {
    displayResult();
  }
}

function displayResult() {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = ""; // Clear any previous content
  const scoreResult = document.createElement("p");
  scoreResult.textContent = `Total Score: ${score} out of ${questions.length}`;
  resultElement.appendChild(scoreResult);
  questions.forEach((question, index) => {
    const selectedOptionInput = document.querySelector(
      `input[name="answer"]:checked`
    );

    const questionResult = document.createElement("div");
    const selectedOptionIndex = parseInt(selectedOptionInput.value);
    const userAnswer = question.options[selectedOptionIndex];
    const correctAnswer = question.answer;
    const isCorrect = userAnswer === correctAnswer;

    questionResult.className = "row row-cols-1 row-cols-md-1 g-4";
    questionResult.innerHTML = `

    
    <div class="col mb-2">
    <div class="card">
    <ul class="ulanswer">
        
    <li class="question ">Question ${index + 1}: ${question.question}</li>

    <li class="userAnswer">Your Answer: ${userAnswer}</li>
    <li class="correctAnswer">Correct Answer: ${correctAnswer}</li>
    <li class="${isCorrect ? "correctAnswer" : "incorrectAnswer"}" >Result: ${
      isCorrect ? "Correct" : "Incorrect"
    }</li>
    </ul>
    </div>
    
    </div>
 

    `;
    resultElement.appendChild(questionResult);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  loadQuestion(currentQuestion);

  const submitButton = document.getElementById("start-button");
  submitButton.addEventListener("click", checkAnswer);
});
