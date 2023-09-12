const questions = [
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
    question: "How many default environments are there in DXP?",
    options: ["a) 1", "b) 2", "c) 3", "d) 4"],
    answer: "c) 3",
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
    answer: "b) Digital Experience Platform.",
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
  {
    question:
      "What does the EpiCloud PowerShell module offer to simplify the usage of the Deployment API?",
    options: [
      "a) A graphical interface",
      "b) Code package deployment",
      "c) Cmdlets for managing modules and scripts",
      "d) Credentials for cmdlets",
    ],
    answer: "c) Cmdlets for managing modules and scripts",
  },
  {
    question: "What is the purpose of the Connect-EpiCloud cmdlet?",
    options: [
      "a) Starts a new deployment",
      "b) Fetches information about deployments",
      "c) Supplies the required credentials to other cmdlets",
      "d) Completes a deployment in the verification stage",
    ],
    answer: "c) Supplies the required credentials to other cmdlets",
  },
  {
    question:
      "Which PowerShell module is required to run the Add-EpiDeploymentPackage cmdlet?",
    options: [
      "a) Azure.Storage",
      "b) Az.Storage",
      "c) EpiCloud",
      "d) Deployment API",
    ],
    answer: "a) Azure.Storage",
  },
  {
    question: "How can you upload a code package to your DXP project?",
    options: [
      "a) Use Start-EpiDatabaseExport",
      "b) Use Get-EpiDeploymentPackageLocation to get the SAS link",
      "c) Use Import-Module EpiCloud",
      "d) Use Connect-EpiCloud with ClientKey, ClientSecret, and ProjectId.",
    ],
    answer: "b) Use Get-EpiDeploymentPackageLocation to get the SAS link",
  },
  {
    question:
      "To deploy a code package to the Preproduction environment, which cmdlet should you use?",
    options: [
      "a) Start-EpiDatabaseExport",
      "b) Start-EpiDeployment with -TargetEnvironment Preproduction",
      "c) Get-EpiDeployment",
      "d) Complete-EpiDeployment",
    ],
    answer: "b) Start-EpiDeployment with -TargetEnvironment Preproduction",
  },
  {
    question: "What is the purpose of Start-EpiDeployment -DirectDeploy?",
    options: [
      "a) It deploys code packages to the Integration environment",
      "b) It performs a swap during deployment",
      "c) It speeds up deployments by deploying directly to the target Web App",
      "d) It starts a database export",
    ],
    answer:
      "c) It speeds up deployments by deploying directly to the target Web App",
  },
  {
    question:
      "When using Start-EpiDeployment to deploy code from a source environment, what does -SourceApp specify?",
    options: [
      "a) The source environment",
      "b) The target environment",
      "c) The app type names CMS and Commerce",
      "d) The package to deploy",
    ],
    answer: "a) The source environment",
  },
  {
    question: "What is the purpose of Start-EpiDeployment -ZeroDowntimeMode?",
    options: [
      "a) To enable a maintenance page",
      "b) To specify the wait parameter",
      "c) To perform a swap",
      "d) To enable Zero Downtime Deployment",
    ],
    answer: "d) To enable Zero Downtime Deployment",
  },
  {
    question:
      "What command should you use to check the status of a specific deployment?",
    options: [
      "a) Get-EpiDeployment -Id <DeploymentId>",
      "b) Start-EpiDeployment -Id <DeploymentId>",
      "c) Complete-EpiDeployment -Id <DeploymentId>",
      "d) Reset-EpiDeployment -Id <DeploymentId>",
    ],
    answer: "a) Get-EpiDeployment -Id <DeploymentId>",
  },
  {
    question:
      "Which cmdlet should you use to complete a deployment that is in the verification stage?",
    options: [
      "a) Start-EpiDeployment",
      "b) Complete-EpiDeployment",
      "c) Reset-EpiDeployment",
      "d) Get-EpiDeployment",
    ],
    answer: "b) Complete-EpiDeployment",
  },
  {
    question:
      "What option can be used when resetting a deployment that used the UseMaintenancePage parameter?",
    options: [
      "a) RollbackDatabase",
      "b) ValidateBeforeSwap",
      "c) Complete",
      "d) Wait",
    ],
    answer: "b) ValidateBeforeSwap",
  },
  {
    question: "Which cmdlets in the module also support pipelining?",
    options: [
      "a) Start-EpiDatabaseExport and Get-EpiDeployment",
      "b) Complete-EpiDeployment and Reset-EpiDeployment",
      "c) Connect-EpiCloud and Import-Module EpiCloud",
      "d) Get-EpiDeployment and Complete-EpiDeployment",
    ],
    answer: "d) Get-EpiDeployment and Complete-EpiDeployment",
  },
  {
    question:
      "What command should you run to install the EpiCloud module from the PowerShell Gallery?",
    options: [
      "a) Import-Module -Name EpiCloud",
      "b) Install-Module -Name EpiCloud -Scope CurrentUser",
      "c) Get-Help Start-EpiDeployment -Full",
      "d) Connect-EpiCloud -ClientKey <ClientKey> -ClientSecret <ClientSecret> -ProjectId <ProjectId>",
    ],
    answer: "b) Install-Module -Name EpiCloud -Scope CurrentUser",
  },
  {
    question:
      "Which cmdlet is used to fetch information about ongoing or finished deployments?",
    options: [
      "a) Start-EpiDeployment",
      "b) Get-EpiDeploymentPackageLocation",
      "c) Get-EpiDeployment",
      "d) Add-EpiDeploymentPackage",
    ],
    answer: "c) Get-EpiDeployment",
  },
  {
    question:
      "What should you run to see additional logging information while using cmdlets?",
    options: [
      "a) -DirectDeploy",
      "b) -Verbose",
      "c) -ZeroDowntimeMode",
      "d) -IncludeBlob",
    ],
    answer: "b) -Verbose",
  },
  {
    question: "Which cmdlet is used to start a database export?",
    options: [
      "a) Start-EpiDatabaseExport",
      "b) Get-EpiDatabaseExport",
      "c) Complete-EpiDeployment",
      "d) Connect-EpiCloud",
    ],
    answer: "a) Start-EpiDatabaseExport",
  },
  {
    question:
      "What does the -IncludeBlob option do when used with the Start-EpiDeployment cmdlet?",
    options: [
      "a) Copies the DB from source to target environment",
      "b) Copies BLOBs from source to target environment",
      "c) Validates the reset progress before completing reset",
      "d) Enables a maintenance page during deployment",
    ],
    answer: "b) Copies BLOBs from source to target environment",
  },
  {
    question:
      "When would you use the -UseMaintenancePage parameter for deployment?",
    options: [
      "a) To enable Zero Downtime Deployment.",
      "b) To validate the reset progress before completing reset",
      "c) To speed up deployments by deploying directly to the target Web App",
      "d) To enable a maintenance page during the deployment if there are DB changes",
    ],
    answer:
      "d) To enable a maintenance page during the deployment if there are DB changes",
  },
  {
    question:
      "What is the primary purpose of the RollbackDatabase option when resetting a deployment?",
    options: [
      "a) To perform a swap during deployment",
      "b) To specify the wait parameter",
      "c) To enable a maintenance page during the deployment",
      "d) To restore the database if the UseMaintenancePage parameter was used for deployment",
    ],
    answer:
      "d) To restore the database if the UseMaintenancePage parameter was used for deployment",
  },
  {
    question:
      "Which cmdlets have a -Wait switch if you want the cmdlets to return after the action has finished?",
    options: [
      "a) Start-EpiDatabaseExport and Get-EpiDeployment",
      "b) Complete-EpiDeployment and Reset-EpiDeployment",
      "c) Connect-EpiCloud and Import-Module EpiCloud",
      "d) Get-EpiDeployment and Complete-EpiDeployment",
    ],
    answer: "b) Complete-EpiDeployment and Reset-EpiDeployment",
  },
  {
    question: "How can you get the output of a deployment as JSON?",
    options: [
      "a) Use Get-EpiDeployment followed by ConvertTo-Json",
      "b) Use Add-EpiDeploymentPackage followed by ConvertTo-Json",
      "c) Use Start-EpiDeployment -ShowWindow",
      "d) Use Start-EpiDatabaseExport -Wait",
    ],
    answer: "a) Use Get-EpiDeployment followed by ConvertTo-Json",
  },
  {
    question: "What does the ZeroDowntimeMode option accept as values?",
    options: [
      "a) ReadOnly and ReadWrite",
      "b) InProgress and Completed",
      "c) Integration and Development",
      "d) Preproduction and Production",
    ],
    answer: "a) ReadOnly and ReadWrite",
  },
  {
    question: "How do I create a new visitor group in Episerver 12?",
    options: [
      "a. Navigate to the 'Visitor Groups' tab, click 'Create New,' and follow the wizard",
      "b. Go to the 'Settings' menu, select 'Visitor Groups,' and click the 'Add New Group' button",
      "c. Access the 'Marketing' section, choose 'Visitor Groups,' and then click the 'New Group' option",
      "d. Click the 'Create Visitor Group' link on the homepage",
    ],
    answer:
      "a. Navigate to the 'Visitor Groups' tab, click 'Create New,' and follow the wizard",
  },
  {
    question: "What criteria can I use to define a visitor group?",
    options: [
      "a. Criteria for defining a visitor group can include location, device type, user profile properties, and custom rules you set up",
      "b. You can only define visitor groups based on user demographics",
      "c. Visitor group criteria are limited to user behavior on your website",
      "d. Visitor groups can only be based on age and gender",
    ],
    answer:
      "a. Criteria for defining a visitor group can include location, device type, user profile properties, and custom rules you set up",
  },
  {
    question:
      "Can I create visitor groups based on user behavior, such as page views or clicks?",
    options: [
      "a. No, visitor groups can only be created based on demographic information",
      "b. Yes, you can create visitor groups based on user behavior, including page views, clicks, and other interactions",
      "c. User behavior is not a valid criterion for defining visitor groups",
      "d. You can only create visitor groups based on device type",
    ],
    answer:
      "b. Yes, you can create visitor groups based on user behavior, including page views, clicks, and other interactions",
  },
  {
    question: "How can I assign a visitor to a specific visitor group?",
    options: [
      "a. Visitors must manually select their visitor group from a dropdown menu",
      "b. Visitors are automatically assigned to visitor groups when they meet the predefined criteria",
      "c. You need to send visitors an email to ask them to join a visitor group",
      "d. Visitors can only be assigned to visitor groups by the website administrator",
    ],
    answer:
      "b. Visitors are automatically assigned to visitor groups when they meet the predefined criteria",
  },
  {
    question:
      "Is it possible to set up time-based visitor groups that expire after a certain date?",
    options: [
      "a. No, visitor groups cannot have time-based settings",
      "b. Yes, you can establish time-based visitor groups with start and end dates, ensuring they expire when needed",
      "c. Time-based visitor groups are limited to specific hours of the day",
      "d. Time-based visitor groups can only be set up for the next 24 hours",
    ],
    answer:
      "b. Yes, you can establish time-based visitor groups with start and end dates, ensuring they expire when needed",
  },
  {
    question:
      "What is the process for editing or deleting an existing visitor group?",
    options: [
      "a. Editing or deleting an existing visitor group is not possible",
      "b. To edit or delete an existing visitor group, go to the 'Visitor Groups' section, select the group, and choose the appropriate action from the menu",
      "c. You can only edit visitor groups, but not delete them",
      "d. Contact Episerver support to edit or delete visitor groups",
    ],
    answer:
      "b. To edit or delete an existing visitor group, go to the 'Visitor Groups' section, select the group, and choose the appropriate action from the menu",
  },
  {
    question:
      "What is the purpose of using visitor groups in Episerver 12, and how can they benefit the website user experience?",
    options: [
      "a. To create aesthetic website designs",
      "b. To personalize content and tailor experiences",
      "c. To improve website security",
      "d. To increase website load times",
    ],
    answer: "b. To personalize content and tailor experiences",
  },
  {
    question:
      "Can you provide examples of practical use cases for visitor groups in e-commerce and marketing on an Episerver website?",
    options: [
      "a. Organizing website events",
      "b. Tracking website analytics",
      "c. Targeting specific user segments with personalized content",
      "d. Managing website hosting servers",
    ],
    answer: "c. Targeting specific user segments with personalized content",
  },
  {
    question:
      "How do visitor groups in Episerver 12 differ from earlier versions of the platform, and what advantages does the latest version offer?",
    options: [
      "a. They are no different from earlier versions",
      "b. They offer improved performance and security",
      "c. They provide fewer customization options",
      "d. They are not compatible with older browsers",
    ],
    answer: "b. They offer improved performance and security",
  },
  {
    question:
      "What is the basic process for creating and configuring a dynamic webpage that adapts based on the visitor's visitor group in Episerver 12?",
    options: [
      "a. Delete the existing webpage and start from scratch",
      "b. Use a pre-made template with no customization",
      "c. Configure personalized content based on visitor group criteria",
      "d. Ignore visitor groups and use a static webpage",
    ],
    answer: "c. Configure personalized content based on visitor group criteria",
  },
  {
    question:
      "Can you explain how you would use visitor groups to target different offers to visitors based on their geographic location?",
    options: [
      "a. By creating separate websites for each location",
      "b. By using personalized content blocks tied to visitor group criteria",
      "c. By displaying offers randomly to all visitors",
      "d. By disabling offers for all visitors",
    ],
    answer:
      "b. By using personalized content blocks tied to visitor group criteria",
  },
  {
    question:
      "What types of user data are collected to create and optimize visitor groups, and how can this information be effectively utilized?",
    options: [
      "a. No user data is collected for visitor groups",
      "b. User data may include IP addresses, email addresses, and phone numbers",
      "c. User data may include demographics, behavior, and custom properties",
      "d. User data is collected but cannot be used effectively",
    ],
    answer:
      "c. User data may include demographics, behavior, and custom properties",
  },
  {
    question:
      "Are there any best practices for managing and maintaining visitor groups over time to ensure their relevance and effectiveness?",
    options: [
      "a. There are no best practices for visitor group management",
      "b. Regularly review and update visitor group criteria",
      "c. Delete all visitor groups periodically",
      "d. Ignore visitor groups once they are set up",
    ],
    answer: "b. Regularly review and update visitor group criteria",
  },
  {
    question:
      "How does Episerver address privacy concerns and GDPR compliance when using visitor groups?",
    options: [
      "a. Episerver does not address GDPR compliance",
      "b. Episerver provides tools to handle privacy and GDPR compliance",
      "c. GDPR compliance is solely the responsibility of website visitors",
      "d. GDPR compliance is not relevant to visitor groups",
    ],
    answer: "b. Episerver provides tools to handle privacy and GDPR compliance",
  },
  {
    question:
      "How does the use of visitor groups impact the performance and server resources of an Episerver website, and what actions can be taken to optimize performance?",
    options: [
      "a. Visitor groups have no impact on website performance",
      "b. They can increase server load and impact performance",
      "c. Visitor groups always improve website performance",
      "d. Performance optimization is not possible",
    ],
    answer: "b. They can increase server load and impact performance",
  },
  {
    question:
      "What options and features are available for measuring and analyzing the results of visitor groups in Episerver 12 and using insights to enhance website performance and user experience?",
    options: [
      "a. There are no measurement or analysis options for visitor groups",
      "b. Analytics tools provide data on visitor group performance",
      "c. All analytics features are disabled when using visitor groups",
      "d. Insights from visitor groups cannot be used to improve the user experience",
    ],
    answer: "b. Analytics tools provide data on visitor group performance",
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
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption == null) {
    alert("Please select an answer.");
    return;
  }

  const selectedOptionIndex = parseInt(selectedOption.value);
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

    const questionCard = document.getElementById("questionCard");
    questionCard.remove();
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
    <li class="${isCorrect ? "correctAnswer" : "incorrectAnswer"}">
    Result: ${isCorrect ? "Correct" : "Incorrect"}
    </li>
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
