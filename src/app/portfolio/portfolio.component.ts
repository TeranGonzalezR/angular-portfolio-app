import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'GPT-3-Responsive-web-site-using-React',
      summary: "Construcción de una landing page moderna y responsiva basada en React.js, partiendo de un diseño Figma. El proyecto guía desde la codificación con componentes funcionales hasta el despliegue en servidores rápidos con dominio propio. Ideal para mejorar habilidades en diseño UI/UX, CSS, React y despliegue web profesional.",
      description: "Este proyecto consiste en la creación e implementación de un sitio web moderno, completamente responsivo, utilizando React.js como framework principal. A través de un enfoque didáctico, se enseña cómo transformar un diseño profesional realizado en Figma (específicamente el diseño GPT-3 de AR Shakir) en un sitio web funcional. El tutorial incluye buenas prácticas de desarrollo frontend, estructura de carpetas, uso de componentes reutilizables, estilización con CSS modular y despliegue profesional con dominio personalizado y certificado SSL, utilizando Hostinger como proveedor de hosting.",
      projectLink: 'https://github.com/ReneeeeeDev/GPT-3-Responsive-web-site-using-React-.git',
      tags: [Tag.GOLANG],
      pictures: ["../../assets/Gpt3A.png", "../../assets/Gpt3B.png","../../assets/Gpt3C.png"]
    },
    {
      id: 2,
      name: 'E-Commerce Basico usando Strapi y React',
      summary: "Desarrollo e implementación de una aplicación e-commerce full stack moderna con React, Next.js, Stripe y Sanity. Incluye carrito avanzado, pagos reales, CMS dinámico y diseño responsive. Ideal para aprender a construir tiendas online escalables y listas para producción.",
      description: "Este proyecto es una aplicación web Full Stack de comercio electrónico moderna y completamente funcional, desarrollada con React.js, Next.js, Stripe y Sanity CMS. A lo largo del desarrollo, se aplican buenas prácticas avanzadas en React, como el uso de hooks, refs, gestión de estado con Context API, y arquitectura de carpetas. En el lado del servidor, se aprovechan las capacidades de Next.js para renderizado estático y dinámico. Además, se realiza una integración completa con Stripe, permitiendo pagos reales, gestión de productos y del proceso de compra. También se utiliza Sanity como CMS para administrar dinámicamente el contenido y productos de la tienda sin necesidad de modificar el código, facilitando una experiencia escalable y profesional tanto para desarrolladores como para clientes.",
      projectLink: 'https://github.com/ReneeeeeDev/E-commerce-Strapi.git',
      tags: [Tag.HTML5, Tag.CSS3, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.POSTGRESQL, Tag.DOCKER, Tag.DOCKERCOMPOSE, Tag.GOLANG, Tag.ANGULAR, Tag.RABBITMQ, Tag.PYTHON],
      pictures: ["../../assets/strapiA.png", "../../assets/strapiB.png", "../../assets/strapiC.png", "../../assets/strapiD.png",]
    },
    {
      id: 3,
      name: 'Repo de algunas Herramientas de Pentesting',
      summary: 'Conjunto de herramientas pentesting para evaluación de seguridad y análisis, sin implementación de técnicas de evasión de antivirus, ideal para pruebas básicas y avanzadas.',
      description: 'Este repositorio alberga un conjunto de herramientas de pentesting utilizadas para la evaluación de seguridad y análisis de sistemas, sin incluir técnicas específicas para la evasión de antivirus. Las herramientas están diseñadas para facilitar tareas comunes como escaneo de vulnerabilidades, explotación, enumeración y recolección de información, proporcionando funcionalidades prácticas y eficientes para pruebas de seguridad. Este repositorio es adecuado para quienes buscan recursos pentesting confiables y fáciles de usar en entornos donde la evasión de AV no es un requisito.',
      projectLink: 'https://github.com/ReneeeeeDev/herramientas-pentesting.git',
      tags: [Tag.PYTHON, Tag.PYTEST, Tag.FASTAPI, Tag.PYDANTIC, Tag.POSTGRESQL, Tag.SQLITE, Tag.SQLALCHEMY, Tag.DOCKER, Tag.DOCKERCOMPOSE],
      pictures: ["../../assets/casino01.png", ]
    },
    {
      id: 4,
      name: 'Repo de algunas Herramientas de Pentesting preparadas para hacer bypass a Anti-Virus',
      summary: 'Colección de herramientas de pentesting con foco en evasión de antivirus, combinando desarrollos propios y modificaciones para mejorar la capacidad de bypass en entornos protegidos.',
      description: 'Este repositorio contiene una colección de herramientas de pentesting especializadas en la evasión de antivirus (AV). Incluye tanto herramientas propias desarrolladas desde cero como versiones modificadas y mejoradas de herramientas existentes para incrementar su capacidad de evitar la detección por sistemas de seguridad. Cada herramienta implementa diversas técnicas como ofuscación, modificación de payloads, empaquetado dinámico, entre otras, para asegurar que las pruebas de penetración puedan ejecutarse con mayor efectividad y realismo, simulando ataques sofisticados. Este repositorio es ideal para profesionales de ciberseguridad que necesitan herramientas avanzadas para evaluar la robustez de los antivirus y sistemas de defensa.',
      projectLink: 'https://github.com/ReneeeeeDev/pentesting-tools-AV-Bypass.git',
      tags: [Tag.PYTHON, Tag.PYTEST, Tag.FASTAPI, Tag.ANGULAR, Tag.BOOTSTRAP, Tag.CSS3, Tag.HTML5, Tag.DOCKER, Tag.DOCKERCOMPOSE, Tag.SQLITE],
      pictures: ["../../assets/pokedex_01.png", "../../assets/pokedex_02.png", ]
    },
    {
      id: 5,
      name: 'Power View preparado para hacer bypass a Anti-Virus',
      summary: 'Herramienta modificada de PowerView para evadir antivirus mediante técnicas de ofuscación y bypass, orientada a pruebas de penetración y auditorías de seguridad avanzadas.',
      description: 'Herramienta modificada de PowerView para evadir antivirus mediante técnicas de ofuscación y bypass, orientada a pruebas de penetración y auditorías de seguridad avanzadas.',
      projectLink: 'https://github.com/ReneeeeeDev/pentesting-tools-AV-Bypass/blob/main/PowerViewObfuscated.ps1',
      tags: [Tag.VUEJS, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP, Tag.JAVA, Tag.JPA, Tag.JDBC, Tag.JUNIT, Tag.MOCKITO, Tag.HIBERNATE, Tag.LOMBOK, Tag.SPRINGBOOT, Tag.SPRINGWEB],
      pictures: ["../../assets/PoweView.png", "../../assets/PoweViewObfuscated.png", "../../assets/PowerViewAVBypass.png",]
    },
    {
      id: 6,
      name: 'Portafolio hecho en Angular',
      summary: 'Una página web de portafolio dinámica y responsiva',
      description: 'Este portafolio es una aplicación web dinámica y responsiva desarrollada con Angular, que muestra mis habilidades y proyectos como desarrollador de software. El diseño y desarrollo de este portafolio tuvo como objetivo brindar una experiencia de usuario fluida en diferentes dispositivos, destacando diversos aspectos de mi trayectoria profesional. El portafolio cuenta con secciones de inicio, acerca de mí, educación, proyectos del portafolio e información de contacto. Sus características clave son el contenido dinámico, el diseño responsivo y una estética moderna.',
      projectLink: 'https://github.com/#######/angular-portfolio-app',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/portfolio_01.png", "../../assets/portfolio_02.png", "../../assets/portfolio_03.png", "../../assets/portfolio_05.png"]
    },
    {
      id: 7,
      name: 'App SIGSA - Front END',
      summary: "Aplicación web desarrollada con Angular y Angular Material para gestionar y visualizar la logística del transporte público, con una interfaz intuitiva que permite operaciones CRUD sobre buses, rutas, choferes y más.",
      description: "El frontend está construido con Angular y estilizado con Angular Material, ofreciendo una interfaz moderna, accesible y responsiva para la gestión logística del sistema de buses. Permite a los usuarios realizar de forma intuitiva todas las operaciones sobre rutas, buses, choferes, frecuencias y paradas, consumiendo la API desarrollada en Node.js. El diseño está centrado en la experiencia del usuario (UX), con dashboards, formularios y tablas dinámicas que simplifican la administración del sistema. Gracias a Angular Material, se garantiza una estética profesional y componentes reutilizables para una navegación fluida y amigable."
      ,projectLink: 'https://github.com/CriSant20/sigsa-app-fronted.git',
      tags: [Tag.PYTHON, Tag.FLASK, Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT, Tag.INSOMNIA, Tag.POSTGRESQL, Tag.SQLALCHEMY, Tag.SQL],
      pictures: ["../../assets/AF1.png", "../../assets/AF2.png", "../../assets/AF3.png"]
    },
        {
      id: 8,
      name: 'App SIGSA - Back END',
      summary: "Conjunto de herramientas pentesting para evaluación de seguridad y análisis, sin implementación de técnicas de evasión de antivirus, ideal para pruebas básicas y avanzadas.",
      description: "El backend del sistema está desarrollado en Node.js, diseñado para automatizar y gestionar de forma eficiente los procesos logísticos del transporte terrestre en Ecuador. Expone una API RESTful robusta que permite realizar operaciones CRUD completas sobre entidades clave como buses, rutas, paradas, frecuencias, choferes y turnos. La arquitectura está pensada para ser escalable, segura y fácil de mantener, utilizando frameworks y herramientas modernas de desarrollo backend (como Express.js y middlewares personalizados), integrando control de acceso y validación de datos. Este sistema es la columna vertebral del proyecto, permitiendo centralizar y optimizar la información del sistema de transporte público.",
      projectLink: 'https://github.com/CriSant20/sigsa-app-backend.git',
      tags: [Tag.PYTHON, Tag.FLASK, Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT, Tag.INSOMNIA, Tag.POSTGRESQL, Tag.SQLALCHEMY, Tag.SQL],
      pictures: ["../../assets/dou_01.png", "../../assets/dou_02.png", "../../assets/dou_03.png"]
    },
    {
      id: 8,
      name: 'Descargador de Musica HF con Python',
      description: 'Este proyecto consiste en un descargador automatizado de música, desarrollado en Python utilizando la biblioteca Selenium. El objetivo principal es permitir al usuario descargar canciones o listas de reproducción completas en alta calidad desde una plataforma de terceros, a partir de enlaces tomados directamente desde Spotify. El programa simula la interacción humana en el navegador: detecta y analiza automáticamente el contenido musical del sitio web de destino, accede a la fuente de descarga y guarda los archivos de forma local en el equipo. Todo el proceso se realiza con tan solo un clic sobre una canción o playlist, gracias al uso de WebDriver, lo que lo convierte en una solución práctica y eficiente para la automatización de descargas musicales.',
      summary: "Descargador de música en alta calidad automatizado con Selenium y Python, que permite bajar canciones o playlists desde Spotify con un solo clic, utilizando un navegador controlado por WebDriver.",
      projectLink: 'https://github.com/#######/simple-slot-machine-game',
      tags: [Tag.JAVASCRIPT, Tag.HTML5, Tag.CSS3],
      pictures: ["../../assets/SpotifyDownloaderAA.png", "../../assets/SpotifyDownloaderAB.png", "../../assets/SpotifyDownloaderA.png","../../assets/SpotifyDownloaderB.png"]
    },
    /* {
      id: 9,
      name: 'EduConnect API',
      summary: 'EduConnect Application is a RESTful API for educational management, handling students, teachers, courses, grades, subjects, and more. Developed in Java with Spring Boot and PostgreSQL, it provides CRUD operations and access control using JWToken.',
      description: "EduConnect is an educational management system designed to provide a RESTful API that simplifies the administration of educational institutions. Developed in Java using Spring Boot, the system facilitates the management of students, teachers, courses, grades, and other educational data. The API allows users to perform various operations such as creating, updating, retrieving, and deleting data stored in the PostgreSQL database, as well as authenticating users and controlling access to endpoints based on their roles and permissions. The project aims to adopt the Single Responsibility Principle (SRP), extensively described in the Object-Oriented Programming (OOP) paradigm by Robert C. Martin. This principle ensures that classes have only one responsibility. In the context of this project, SRP was implemented by structuring the codebase into distinct layers. Controller classes are tasked with receiving HTTP requests and delegating the processing to service classes, solely returning appropriate responses to the client. Service classes are responsible for implementing the business logic of the application, encapsulating operations such as validations, calculations, and data access through communication with repository classes. Repository classes provide methods to access and manipulate data in the database, sometimes creating specific methods within the JpaRepository extension. DTO (Data Transfer Object) classes handle the transportation of data between application layers, containing only attributes and access methods without any business logic. Interface classes define the contract with the service, specifying methods related to specific application functionality. This API also control routing access to users based on their role.",
      projectLink: 'https://github.com/#######/fmt-educonnect',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGJWT, Tag.SPRINGSECURITY, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.POSTMAN, Tag.JDBC, Tag.JPA, Tag.LOMBOK, Tag.RESTAPI, Tag.SQL],
      pictures: ["../../assets/ec_01.png", "../../assets/ec_02.png", "../../assets/ec_03.png"]
    },
    {
      id: 10,
      name: '12 Barcodes API',
      summary: 'The 12 Barcodes API is a user-friendly RESTful API designed to provide a simple and practical solution for generating barcodes in applications.',
      description: "This RESTful API serves as a playground to explore and master technologies from the Flask ecosystem and some software design. Embracing the Model-View-Controller (MVC) architecture and DRY principle, I strive for a clean, organized codebase that fosters maintainability and scalability - in the rare chance this project ever grows to something unexpected. To ensure clarity and ease of use, I've meticulously documented this project according to the OpenAPI standard with Swagger. One unique aspect of this project is its reliance on lightweight data processing, foregoing the need for a traditional database. To achieve this, I crafted a buffer to handle images so it deals with image data directly in memory, avoiding the need to write it down. This may impact latency since the images are served without the need for a retrieval move. No need for a persistent storage. This decision reflects my commitment to simplicity. You need a barcode image, you get it. You need a little bit of information for that type of barcode, you get it. ",
      projectLink: 'https://github.com/#######/the-12-barcodes-api',
      tags: [Tag.PYTHON, Tag.FLASK, Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT, Tag.POSTMAN],
      pictures: ["../../assets/12_01.png", "../../assets/12_02.png", "../../assets/12_03.png", "../../assets/12_04.png", "../../assets/12_05.png"]
    },
    {
      id: 11,
      name: 'Notelock API',
      summary: 'Notelock is a Restful API in Java that uses Spring Boot and JWT for authentication and security. Its endpoints are designed to manage resources such as notebooks and notes, with data persisted in a PostgreSQL database.',
      description: "Notelock is a robust RESTful API designed to manage notebooks and notes efficiently. Developed using Java with Spring Boot and JWT authentication, Notelock offers endpoints to handle various resources, including notebooks and notes, with data persistence in a PostgreSQL database. With Notelock, users can perform CRUD (Create, Read, Update, Delete) operations on notebooks and notes, facilitating the organization and management of their digital notes. The API prioritizes security and authentication, utilizing JWT tokens for secure user authentication. Built with scalability and reliability in mind, Notelock ensures seamless integration with other systems and applications. Its user-friendly interface and intuitive design make it ideal for developers seeking a reliable solution for managing digital notebooks and notes. Whether you're a developer looking to streamline note management in your applications or an organization in need of a robust note-taking solution, Notelock provides the tools and functionalities to meet your needs effectively.",
      projectLink: 'https://github.com/#######/notelock',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGJWT, Tag.SPRINGSECURITY, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.POSTMAN, Tag.JDBC, Tag.JPA, Tag.LOMBOK, Tag.RESTAPI, Tag.SQL],
      pictures: ["../../assets/n_01.png", "../../assets/n_02.png"]
    },
    {
      id: 12,
      name: 'Majority App',
      summary: 'Majority App is a web application built using the Dash framework in Python. It provides insights into the voting behavior of US legislators on various bills.',
      description: "Majority App is a web application created using Dash, a Python framework designed for building analytical web applications. The primary purpose of Majority App is to provide insights into the voting behavior of US legislators on various bills. This makes it a valuable tool for public affairs professionals and political analysts who seek detailed information about legislative activities. As a mock application developed for educational purposes, Majority App offers several features that facilitate the exploration of legislative data. It includes a tab navigation system that allows users to move between different sections, such as information about the application, details on various bills, and data on individual legislators. The 'About Us' tab provides an overview of the application's capabilities, outlining the tools and features available. The 'Bills' tab allows users to select a specific bill and view comprehensive details, including the primary sponsor and the tally of votes for and against the bill. Meanwhile, the 'Legislators' tab enables users to examine the voting behavior of individual legislators, offering insights into the number of bills they have supported or opposed.",
      projectLink: 'https://github.com/#######/majority-mock-app',
      tags: [Tag.PYTHON, Tag.DASH, Tag.PLOTLY],
      pictures: ["../../assets/ma_01.png", "../../assets/ma_02.png", "../../assets/ma_03.png"]
    },
    {
      id: 13,
      name: 'Tutor Mate API',
      summary: 'This project is a RESTful API developed in Java and Spring Boot to manage appointments between students and tutors. It uses JDK 17 and PostgreSQL database with the specified database schema.',
      description: "Tutor-Mate is a RESTful API developed in Java using Spring Boot, designed to manage appointments between students and tutors. It utilizes JDK 17 and PostgreSQL for database management with a specified schema. The API provides various endpoints to handle resources such as students, tutors, schedules, materials, and appointments. The API's endpoints allow users to perform CRUD operations, enabling the creation, reading, updating, and deletion of records. For instance, the /alunos endpoint manages student data, while the /tutores endpoint manages tutor data. Schedules can be managed via the /agendas endpoint, and educational materials are handled through the /materiais endpoint. The /agendamentos endpoint facilitates viewing and managing appointments specific to students or tutors. Built with a robust set of technologies, the Tutor-Mate API uses Java 17, Spring Boot for application development, Spring Boot Starter Data JPA for data persistence, Spring Boot Starter Web for web application development, and Spring Boot DevTools for enhanced productivity during development. PostgreSQL serves as the relational database, and Project Lombok helps reduce boilerplate code in Java. Maven is used as the dependency management and build automation tool.",
      projectLink: 'https://github.com/#######/fmt-tutor-mate',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.LOMBOK, Tag.RESTAPI, Tag.JPA, Tag.LOMBOK, Tag.SQL],
      pictures: ["../../assets/tm_01.png", "../../assets/tm_02.png", "../../assets/tm_03.png"]
    },
    {
      id: 14,
      name: "Scholargate",
      summary: 'Scholargate is an academic management system with dynamic user roles, built using Angular and Bootstrap for easy student, teacher, and class management.',
      description: "Scholargate is an academic management system developed to streamline tasks for administrators, teachers, and students. It allows administrators to register students, teachers, and classes, while teachers can enter grades, and students can view their academic performance. Built with Angular, Bootstrap, CSS, and localStorage, the system ensures a responsive, user-friendly interface and personalized content based on user roles. Scholargate was developed as part of the Fullstack course at SENAI/SC by Lab365, aiming to simplify educational management processes.",
      projectLink: 'https://github.com/#######/scholargate',
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.HTML5, Tag.TYPESCRIPT, Tag.CSS3],
      pictures: ["../../assets/sch_01.png", "../../assets/sch_02.png", "../../assets/sch_03.png"]
    },
    {
      id: 15,
      name: 'The Music Time Machine Project',
      summary: 'Choose a day in time and automatically create a Spotify playlist of the top songs playing in the world in that moment.',
      description: "This project involves creating a program that interacts with Spotify to transport users back in time musically by retrieving and playing songs from a specific date in the past. To run the Music Time Machine Project, you need Python installed on your computer, a Spotify account, and a Spotify app created through the Spotify Developer Dashboard. The app created in the Developer Dashboard will serve as the project’s base, providing necessary credentials like CLIENT_ID, CLIENT_SECRET, and REDIRECT_URI. These credentials are essential for authenticating and interacting with Spotify's API, and should be securely stored as environment variables in your operating system to protect them from unauthorized access. Once the setup is complete, users can input a specific date in the format YYYY-MM-DD (year-month-day) to use the application. The program will then fetch and play songs that were popular on Spotify on that date, effectively creating a musical time-travel experience. The project includes detailed instructions on how to create a Spotify app and obtain the necessary credentials, as well as how to set environment variables. Screenshots of the app running are also provided for reference. The Music Time Machine Project showcases an ability to integrate Python with external APIs, demonstrating skills in application development and secure credential management. The goal of the project is to provide a nostalgic musical journey for users, allowing them to relive the hits from a specific date in the past through Spotify.",
      projectLink: 'https://github.com/#######/music-time-machine-spotify',
      tags: [Tag.PYTHON, Tag.BEAUTIFULSOUP],
      pictures: ["../../assets/mt_01.png", "../../assets/mt_02.png", "../../assets/mt_03.png", "../../assets/mt_04.png"]
    },
    {
      id: 16,
      name: 'Library Manager API',
      summary: 'This project is a RESTful API for managing a simple library. It uses JDK 17 and PostgreSQL for the database with the specified database schema.',
      description: "The Library Manager API offers various endpoints to handle different entities within a library system, such as librarians, books, members, loans, and visitors. The API allows for creating, reading, updating, and deleting records for each of these entities, ensuring comprehensive management capabilities for the library. The database schema for the project was designed by myself and defined in such a way to allow for structured and organized data storage. The endpoints for managing librarians include operations to create new librarians, retrieve all or specific librarians, update their details, delete them, return their emails, and update their passwords. For loans, the API supports creating new loans, retrieving all or specific loans, updating loan details, and deleting loans. Book management endpoints enable operations to create, retrieve, update, and delete books, as well as list all book titles and authors. The member endpoints allow for the creation of new members, retrieval of all or specific members, updating member details, deleting members, listing member names, and phone numbers, and updating member phone numbers. Similarly, visitor endpoints cover creating new visitors, retrieving all or specific visitors, updating visitor details, and deleting visitors.",
      projectLink: 'https://github.com/#######/fmt-library-manager',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.INSOMNIA, Tag.LOMBOK, Tag.RESTAPI, Tag.JPA, Tag.LOMBOK, Tag.SQL],
      pictures: ["../../assets/lm_01.png", "../../assets/lm_02.png", "../../assets/lm_03.png"]
    },
    {
      id: 17,
      name: 'LabQuiz',
      summary: 'This project consists of an HTML/CSS form called LabQuiz, aimed at testing knowledge of HTML and CSS.',
      description: "LabQuiz is a project containing index.html (form structure), styles.css (styling), and README.md (project details). To use it, open index.html in a browser, fill out the form, and submit (styling only). The form's CSS includes text centering, custom colors, spacing, and border styling. This simple project helps practice HTML, CSS, and form design. It was developed as part of a practical exercise to practice frontend coding skills.",
      projectLink: 'https://github.com/#######/labquiz',
      tags: [Tag.HTML5, Tag.CSS3],
      pictures: ["../../assets/labquiz_01.png"]
    },
    {
      id: 18,
      name: 'Gradebook',
      summary: 'Gradebook is a simple web application for managing student registration, their grades, and subjects.',
      description: "This application manages student registration and subject tracking. Users can register students, navigate between sections (Register, Home, Subjects, Students), manage subjects and grades, and filter or remove students. It uses HTML for structure, CSS for styling, JavaScript for functionality, Bootstrap for responsiveness, localStorage for browser-based data storage, and the ViaCEP API for fetching addresses.",
      projectLink: 'https://github.com/#######/gradebook',
      tags: [Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT, Tag.BOOTSTRAP],
      pictures: ["../../assets/gradebook_01.png", "../../assets/gradebook_02.png", "../../assets/gradebook_03.png", "../../assets/gradebook_04.png"]
    },
    {
      id: 19,
      name: 'LabScore',
      summary: "LabScore is a simple but useful project for testing and practicing skills related to HTML, CSS, JavaScript, and design.",
      description: "LabScore is a small project focused on inputs and outputs to practice HTML5, CSS3, and JavaScript by creating an interactive web page. It allows users to enter grades and student names, calculate averages, display the multiplication table for a chosen number, answer a quiz with confirmations, calculate grades for a specific subject, and determine the highest number among four inputs. The interface is user-friendly and responsive, dynamically showing and hiding results using JavaScript.",
      projectLink: 'https://github.com/#######/labscore',
      tags: [Tag.HTML5, Tag.CSS3],
      pictures: ["../../assets/labscore_01.png"]
    }, */

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
