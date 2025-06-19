# Svelte Architecture: A Layered Approach

## Overview

This repository demonstrates an architectural approach for Svelte, focusing on the separation of concerns. 
It provides an example of how to isolate distinct application layers:

1.  **Business Logic**
2.  **Network Interaction**
3.  **State Management**

## The application

This project is a simple "Country Finder" page that fetches data from the public REST Countries API. 
It allows users to find basic information about any country in the world.

## The four Layers

1.  **View Layer (`/components`)**: Responsible for displaying data and dispatching user actions.

2.  **Service Layer (`/services`)**: The "brain" of the application. It contains business-logic.

3.  **State Layer (`/stores`)**: A simple, reactive container for the application's state.

4.  **Network Layer (`/api`)**: Handles all external network communication.

## How to run

1.  Clone the repository:
    ```bash
    git clone https://github.com/KobbAsa/svelte-logic-split
    ```
2.  Navigate to the project directory:
    ```bash
    cd svelte-logic-split
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```