import React from "react";
function CategoryGallery({ title, items }) {
  return (
    <div className="category">
      <h3>{title}</h3>
      <div className="item-gallery">
        {items.map((item, idx) => (
          <div className="item-card" key={idx}>
            <img src={item.img} alt={item.title} />
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CategoryGallery;
