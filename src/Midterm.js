import React, { useState } from "react";
import CategoryGallery from "./CategoryGallery";

// Midterm images
import midtermMachineProblem2 from './assets/midterm-machineproblem2.png';
import midtermMachineProblem3 from './assets/midterm-machineproblem3.png';
import midQuiz from './assets/mid-quiz.jpg';
import midtermProject1 from './assets/midterm-project1.png';
import midtermProject2 from './assets/midterm-project2.png';
import midtermProject3 from './assets/midterm-project3.png';
import midtermProject4 from './assets/midterm-project4.png';
import midExam from './assets/mid-exam.jpg';
import midtermLabExam from './assets/midterm-labexam.png';

// Gallery data split: Activities & Projects separated
const midtermCategories = {
  "Lab Examinations": [
    { title: "Midterm Exam", img: midExam },
    { title: "Midterm Lab Exam", img: midtermLabExam },
  ],
  "Lab Activities": [
    { title: "Machine Problem 2", img: midtermMachineProblem2 },
    { title: "Machine Problem 3", img: midtermMachineProblem3 },
  ],
  "Projects": [
    { title: "Project 1", img: midtermProject1 },
    { title: "Project 2", img: midtermProject2 },
    { title: "Project 3", img: midtermProject3 },
    { title: "Project 4", img: midtermProject4 },
  ],
  "Quizzes": [
    { title: "Midterm Quiz", img: midQuiz },
  ]
};

function Midterm() {
  const [activeCat, setActiveCat] = useState("Lab Examinations");
  const [modalImg, setModalImg] = useState(null);

  // When a card/image is clicked, open the modal
  const handleCardClick = (img) => {
    setModalImg(img);
  };

  // Modal close
  const closeModal = () => setModalImg(null);

  return (
    <section>
      <h2>Midterm Works</h2>
      <nav className="cat-nav">
        {Object.keys(midtermCategories).map((cat) => (
          <button
            key={cat}
            className={activeCat === cat ? "active" : ""}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>
      <div className="item-gallery">
        {midtermCategories[activeCat].map((item, idx) => (
          <div className="item-card" key={idx} onClick={() => handleCardClick(item.img)} style={{cursor: "pointer"}}>
            <img src={item.img} alt={item.title} />
            <div>{item.title}</div>
          </div>
        ))}
      </div>
      {modalImg && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={modalImg} alt="Preview" style={{maxWidth: "90vw", maxHeight: "90vh", borderRadius: "10px"}} />
            <button onClick={closeModal} style={{
              marginTop: "1em", padding: "0.5em 1.5em", background: "#8ab6f1", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer"
            }}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
export default Midterm;
