# REST Countries

This project is an application for searching and displaying information about countries using the public API from [REST Countries](https://restcountries.com/). It was developed as part of a challenge on [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca), aimed at improving my skills in Angular, including handling HTTP requests, error management, routing, and the use of services and interceptors.

## Live Preview

You can view a live preview of this project [here](https://rest-countries-navy-theta.vercel.app/).

## Project Overview

- **Technologies Used:** Angular, TypeScript, HTML, Tailwind CSS.
- **API Used:** [REST Countries](https://restcountries.com/).

## Key Features

1. **Country Search and Display:**

   - Users can search for countries by name and view details such as capital, population, language, currency, and more.
   - Implementation of filtering by region.

2. **User Interface:**

   - Clean and responsive design using Tailwind CSS for styling.
   - **Responsive Design:** The application is fully responsive, ensuring a smooth user experience across different devices and screen sizes.
   - **Dark Mode:** Ability to toggle between light and dark modes based on user preferences.

3. **Routing and Navigation:**

   - Implementation of Angular routing to navigate between the country list view and detailed country pages.
   - Improved understanding of route parameters and how to manage navigation state in Angular.

4. **API Handling and Observables:**

   - Use of Angular to make HTTP requests to the REST Countries API.
   - Data flow management using `BehaviorSubject` and `async` pipes.
   - Application-wide error handling using an error service and an HTTP interceptor.

5. **Enhanced User Experience:**

   - Implementation of loaders while awaiting API responses.
   - User-friendly error notifications in case of request failures.

## Purpose

This project serves as a practical exercise in Angular development, focusing on building a frontend application that interacts with a RESTful API. It demonstrates the ability to handle HTTP requests, manage observables, implement routing, and ensure a smooth user experience. Additionally, this project reinforces my understanding of **Tailwind CSS**, especially in implementing **dark mode** and other responsive design features, as well as deepening my knowledge of Angular **routes** and **interceptors**.
