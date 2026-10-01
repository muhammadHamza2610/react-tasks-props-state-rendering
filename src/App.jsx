import React from 'react';
import ProductCard from './components/ProductCard';
import LikeButton from './components/LikeButton';
import './App.css';

function App() {
  const students = [
    { id: 1, name: "Ali", score: 75 },
    { id: 2, name: "Ahmed", score: 42 },
    { id: 3, name: "Sara", score: 88 },
    { id: 4, name: "Usman", score: 35 }
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Basics Project</h1>
      </header>
      
      <main className="app-main">
        {/* Task 1: Reusable Component with Props */}
        <section className="task-section">
          <h2>Product Cards</h2>
          <div className="product-list">
            <ProductCard 
              title="Laptop Pro" 
              price="1299" 
              category="Electronics" 
            />
            <ProductCard 
              title="Wireless Headphones" 
              price="199" 
              category="Accessories" 
            />
          </div>
        </section>

        {/* Task 2: State & Event Handling using useState */}
        <section className="task-section">
          <h2>Interactive Like Button</h2>
          <LikeButton />
        </section>

        {/* Task 3: List Rendering & Conditional Rendering */}
        <section className="task-section">
          <h2>Students List</h2>
          <div className="students-list">
            {students.map((student) => (
              <div key={student.id} className="student-card">
                <span className="student-name">{student.name}</span>
                <span className="student-score">
                  Score: {student.score} - 
                  <span className={student.score >= 50 ? "pass" : "fail"}>
                    {student.score >= 50 ? " Pass" : " Fail"}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
