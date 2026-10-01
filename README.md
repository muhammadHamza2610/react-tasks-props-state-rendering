# React Basics Project

This is a beginner-friendly React project that demonstrates fundamental concepts including reusable components with props, state management using `useState`, and list/conditional rendering.

## Technologies Used
- React.js
- Vite
- CSS

## Tasks Implemented

### Task 1: Reusable Component with Props
A `ProductCard` component was created to accept `title`, `price`, and `category` as props. It is reused in the main App to display two distinct products cleanly styled using CSS.

### Task 2: State & Event Handling using useState
An interactive `LikeButton` component is included. It leverages the `useState` hook to keep track of likes starting from `0`. Clicking the 'Like' button increments the counter dynamically without a page refresh.

### Task 3: List Rendering & Conditional Rendering
An array of student objects is dynamically rendered using the `.map()` method. Each item has a unique React `key`. The student's score is conditionally checked:
- Scores >= 50 display **Pass** in green text.
- Scores < 50 display **Fail** in red text.

## How to Install Dependencies
1. Ensure you have Node.js installed.
2. Clone this repository or download the project.
3. Open your terminal and navigate to the project directory.
4. Run the following command:
   ```bash
   npm install
   ```

## How to Run the Project
1. In your terminal, run:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173` (or the URL provided in the terminal).

## GitHub Repository Information
- Project Repository: `react-tasks-props-state-rendering`
- Branch: `main`
