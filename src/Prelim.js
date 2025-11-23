import React, { useState } from "react";

// Prelim images
import prelimClassParticipation1 from './assets/prelim-classparticipation1.png';
import prelimLabAct1 from './assets/prelim-labact1.png';
import prelimLabAct3 from './assets/prelim-labact3.jpg';
import prelimQuiz1 from './assets/prelim-quiz1.jpg';
import prelimQuiz2 from './assets/prelim-quiz2.jpg';
import prelimExam from './assets/prelim-exam.jpg';
import prelimLabExam from './assets/prelim-labexam.jpg';

// Gallery data
const prelimCategories = {
  "Lab Examinations": [
    { title: "Prelim Exam", img: prelimExam },
    { title: "Prelim Lab Exam", img: prelimLabExam },
  ],
  "Lab Activities": [
    { title: "Lab Act 1", img: prelimLabAct1 },
    { title: "Lab Act 3", img: prelimLabAct3 },
    { title: "Class Participation 1", img: prelimClassParticipation1 },
  ],
  "Quizzes": [
    { title: "Quiz 1", img: prelimQuiz1 },
    { title: "Quiz 2", img: prelimQuiz2 },
  ]
};

function Prelim() {
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
      <h2>Prelim Works</h2>
      <nav className="cat-nav">
        {Object.keys(prelimCategories).map((cat) => (
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
        {prelimCategories[activeCat].map((item, idx) => (
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
export default Prelim;
