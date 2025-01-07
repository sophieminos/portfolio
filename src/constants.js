import {ref} from "vue";

// projects
const projects= ref([
    {
        id: 1,
        title: 'PHP invoicing software',
        description: 'During my apprenticeship I had the mission to program the invoicing software of my company. Because of the confidentiality, I won\'t share any screens or demonstrations, but only main features.',
        img: 'php-invoicing-software-project.png',
        tag: 'work',
        skills: [
            { name: 'php', img: 'php-logo.png' },
            { name: 'html', img: 'html-logo.png' },
            { name: 'css', img: 'css-logo.png' },
            { name: 'bootstrap', img: 'bootstrap-logo.png' },
            { name: 'javascript', img: 'js-logo.png' },
            { name: 'jQuery', img: 'jquery-logo.png' },
            { name: 'json', img: 'json-logo.png' },
            { name: 'SQL', img: 'oracle-logo.png' }
        ],
        video: '',
        features: [
            { name: 'New module in WordPress', description: 'Adding a new module to a WordPress website.'},
            { name: 'Time and materials payment', description: 'In this case, an interface is available to input time of work (timesheets). For holidays, API of the French government is used.' },
            { name: 'E-signature', description: 'Programming a personalized interface to make e-signatures using Yousign API for timesheets, expenses, invoices, ...'},
            { name: 'Fixed price payment', description: 'The software offers also the possibility to pay each due date of the payment schedule.' },
            { name: 'Expenses', description: 'Expenses can be input in another interface.' },
            { name: 'Invoices generation', description: 'Invoices are generated, based on a timesheet or due date and/or expenses.' },
            { name: 'Bank linking', description: 'All inflows and outflows of money to and from the bank are synchronized in the software with the other amounts to facilitate payment matching. Qonto API is used. Invoices can achieve a \'paid\' status using this feature.' },
        ],
        gallery: []
    },
    {
        id: 2,
        title: 'PHP brochure website',
        description: 'This website is aimed at the business of a bookbinder. We need simple features such as galleries, categories and contact. The complexity of this website is in the design because it needs to be sophisticated based on the represented job.',
        img: 'php-brochure-website-project.png',
        tag: 'perso',
        skills: [
            { name: 'php', img: 'php-logo.png' },
            { name: 'html', img: 'html-logo.png' },
            { name: 'css', img: 'css-logo.png' },
            { name: 'javascript', img: 'js-logo.png' },
            { name: 'json', img: 'json-logo.png' },
            { name: 'xml', img: 'xml-logo.png' },
            { name: 'SQL (MariaDB)', img: 'oracle-logo.png' },
            { name: 'figma', img: 'figma-logo.png' }
        ],
        video: 'https://drive.google.com/file/d/1nWTlFCjei0OGqtXAY1XSkATXyHobN5q_',
        features: [
            { name: 'Classes in PHP', description: 'With PHP Object Oriented Programming (OOP), I structured my website in classes in order to create reusable elements.' },
            { name: 'Personalized icons', description: 'I drew all icons on my iPad because the bookbinder job is not common and the website needed stylised icons.' },
            { name: 'Admin interface', description: 'An admin interface permits to edit exposed books, categories, their state, password, ...' },
            { name: 'Personalized css', description: 'No CSS framework used. I created the carousels, all responsive screens, ...' },
            { name: 'Responsive website', description: 'The website adapts itself to the orientation of the screen and to the different dimensions of each kind of device.' },
        ],
        gallery: []
    },
    {
        id: 3,
        title: 'Azure distributed databases',
        description: 'A school project is aimed at the practice of distributed databases. It\'s about ecommerce of regional products sold to retailers. To secure sensitive data and to anticipate mass visits by retailers at certain occasion such as East or Christmas, databases can be fragmented in several databases.',
        img: 'azure-ddb-project.png',
        tag: 'school',
        skills: [
            { name: 'SQL with Azure', img: 'azure-logo.png' },
            { name: 'Conceptual Data Model (CDM)', img: 'CDM.png' },
            { name: 'Logical Data Model (LDM)', img: 'LDM.png' },
        ],
        video: '',
        features: [
            { name: 'Hybrid fragmentation', description: 'Horizontal and vertical fragmentation' },
            { name: 'Security', description: 'Some tables are vertically fragmented in order to secure them' },
        ],
        gallery: [
            { src: 'azure-ddb-project-detail-1.png', legend: 'Scheme of the fragmentation' },
        ]
    },
    {
        id: 4,
        title: 'Web api with cloud monitoring',
        description: 'A school project',
        img: 'devops-project.png',
        tag: 'school',
        skills: [
            { name: 'Docker', img: 'docker-logo.png' },
            { name: 'Minikube', img: 'minikube-logo.png' },
            { name: 'Kubernetes', img: 'kubernetes-logo.png' },
            { name: 'Grafana', img: 'grafana-logo.png' },
            { name: 'Prometheus', img: 'prometheus-logo.png' },
            { name: 'Loki', img: 'loki-logo.png' },
        ],
        video: '',
        features: [
            { name: 'Pipeline', description: 'A pipeline is executed to deploy the webapi from a Docker image (and after with "pack") and Kubernetes deployment files' },
            { name: 'Namespaces', description: 'To separate development and production deployments. Development is in NodePort mode and Production is in ClusterIP mode for safety reasons.' },
            { name: 'Port-forwarding', description: 'To access the production webapi from outside the cluster' },
            { name: 'Alerts', description: 'Alerts using Prometheus in Grafana' },
            { name: 'Logs', description: 'Request to extract relevant informations from logs using Loki in Grafana' },
        ],
        gallery: [
            
        ]
    },
    {
        id: 5,
        title: 'Django ecommerce website',
        description: 'This website is aimed at the business of an illustrator. It includes a lot of features such as purchases, slideshow, blog, a rich admin and customer interface and others.',
        img: 'django-ecommerce-project.png',
        tag: 'perso',
        skills: [
            { name: 'django (python)', img: 'django-logo.png' },
            { name: 'html', img: 'html-logo.png' },
            { name: 'css', img: 'css-logo.png' },
            { name: 'jquery', img: 'jquery-logo.png' },
            { name: 'javascript', img: 'js-logo.png' },
            { name: 'json', img: 'json-logo.png' },
            { name: 'figma', img: 'figma-logo.png' }
        ],
        video: 'https://drive.google.com/file/d/1pstu3wP-8ujPGDNt0iYsfxcL2Y0Smnws',
        features: [
            { name: 'Users accounts', description: 'Admin and customers' },
            { name: 'Purchases', description: 'Purchases can be made with PayPal or card (Paypal API). For that, we also have a cart and some additional features such as discounts and warnings for price changes.' },
            { name: 'Package tracking', description: 'We can track packages (LaPoste API) in the admin and customers sections in a personalized interface.' },
            { name: 'Gallery of items', description: 'We can see items with a name, a price and category tags.' },
            { name: 'Slideshow of items', description: 'We can see items without their attributes in a slideshow, in order to only present the artworks.' },
            { name: 'Zoom on items', description: 'In the items details, we can zoom on the image.' },
            { name: 'Blog', description: 'A blog is included. In the admin section, we have an interface to edit articles.' },
            { name: 'Statistics', description: 'In the admin section, we can see charts for the new customers and their attributes, sales, ....' },
            { name: 'Emails', description: 'Personalized emails are sent when order status change.' },
            { name: 'Responsive website', description: 'The website adapts itself to the orientation of the screen and to the different dimensions of each kind of device.' },
        ],
        gallery: []
    },
    {
        id: 6,
        title: 'IOS flashcards app',
        description: 'A flashcards app to review efficiently vocabulary. I programmed and used it while I was in Toronto to improve my English.',
        img: 'ios-project.png',
        tag: 'perso',
        skills: [
            { name: 'swiftui', img: 'swiftui-logo.png' },
            { name: 'json', img: 'json-logo.png' },
            { name: 'xml', img: 'xml-logo.png' }
        ],
        video: '',
        features: [
            { name: 'Flashcards quiz', description: 'The interface adapts itself to portrait and landscape modes. We can review only unknown questions, bad or good answers. According to their state, cards become white, red or green.' },
            { name: 'File loading', description: 'We can load files and attach them to a theme.' },
            { name: 'File export', description: 'We can export themes in JSON format.' },
            { name: 'Theme settings', description: 'Settings of each theme such as main color and reset can be changed' },
            { name: 'Theme / cards editing', description: 'We can edit a theme and edit its cards' },
            { name: 'App settings', description: 'Settings of the app such as main color and sound effects can be changed' },
            { name: 'Sound effects', description: 'A sound for success and another for failure while reviewing the cards.' },
            { name: 'Home screen', description: 'We can swipe an item to delete, export or edit it' },
            { name: 'Confirmations', description: 'Before a critical action such as deleting or resetting, we have a popup to confirm it.' },
            { name: 'List of all cards', description: 'We can view all the cards, filter them based on their status and make a research.' },
        ],
        gallery: [
            { src: 'ios-project-detail-1.png', legend: 'Theme editing' },
            { src: 'ios-project-detail-2.png', legend: 'Card editing' },
            { src: 'ios-project-detail-3.png', legend: 'File loading before data insertion' },
            { src: 'ios-project-detail-4.png', legend: 'File loading after data insertion' },
            { src: 'ios-project-detail-5.png', legend: 'App settings' },
            { src: 'ios-project-detail-6.png', legend: 'Flashcards review' },
            { src: 'ios-project-detail-7.png', legend: 'List of all cards' },
            { src: 'ios-project-detail-8.png', legend: 'Filtered list of all cards' },
            { src: 'ios-project-detail-10.png', legend: 'Theme settings' },
            { src: 'ios-project-detail-9.png', legend: 'Flashcards quiz for landscape mode' },
            { src: 'ios-project-detail-11.png', legend: 'List of all themes' }
        ]
    }
]);

const studies = ref([
{ id: 1, date: '2022-2025', title: 'Engineering degree, Software Engineering', school: 'EFREI PARIS', description: 'Three years engineering program in apprenticeship. Software development and Information Systems curriculum.' },
{ id: 2, date: '2020-2022', title: 'Bachelor degree, Computer Science', school: 'Paris Institute of Technology (Paris Cité university)', description: 'Computer science and software development, combined with a generalist background. Advanced skills in concurrency and reflexivity in java.'},
{ id: 3, date: '2016-2019', title: 'High school diploma in sciences', school: 'Lycée Henri Avril – Lamballe (France)'}
]);

const experiences = ref([
    { id: 1, date: 'Sept 2022-now', title: 'Full-Stack Developer (apprenticeship)', company: 'WIZIN (France)', description: 'Creating a billing software with timesheet management and administration. Proficiency in PHP and SQL for the back-end, HTML, CSS and jQuery for the front-end' },
    { id: 2, date: 'April-June 2022', title: 'Web Integrator (internship)', company: 'DIGITAL HOUSE GROUP (France)', description: 'After technological monitoring and modeling, customization of a WordPress theme in HTML, CSS and Javascript'},
]);

export {projects, studies, experiences }