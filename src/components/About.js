import React from "react";

export default function About(props) {
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#0b2537' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#042743',
  };

  return (
    <div className="container my-3">
      <h2 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        About Us
      </h2>
      <div className="accordion" id="accordionExample">
        {/* Accordion Item #1 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Background & Education
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              My name is <strong>Jagriti Kanwar</strong>, currently pursuing a B.Tech in Mechanical Engineering at the Indian Institute of Technology, Patna (2022-2026). Alongside my core studies, I have actively developed skills in web development, programming, and data analysis through various projects and self-driven learning. I completed my schooling from Prayas Balika Awasiya Vidhyalaya, Raipur, with strong academic performance.
            </div>
          </div>
        </div>

        {/* Accordion Item #2 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Skill set
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              I have strong foundation in technologies including HTML, CSS, and JavaScript, complemented by programming expertise in C++, C, and Python. My toolset extends to VSCode, React, GitHub, Jupyter Notebook, Power BI, and MySQL, enabling me to design interactive web applications and data-driven dashboards. I am also skilled in data manipulation and visualization using libraries like pandas, NumPy, matplotlib, and seaborn.
            </div>
          </div>
        </div>

        {/* Accordion Item #3 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Career goals
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              My goal is to build a successful career as a full-stack web developer, combining my programming skills with data analysis to create impactful, user-friendly applications. I aim to join a forward-thinking tech company, where I can collaborate on innovative projects, continuously improve my skills, and contribute effectively to the development community.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
