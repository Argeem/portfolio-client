import type { ProductCardProps } from "../../../Types/Common/product-cart.type";
import "./ProjectCard.css";

const ProjectCard = (props: ProductCardProps) => {
  return (
    <div className="project-card">
      <img src={props.image} alt="" />
      <div className="project-des">
        <h3>{props.title}</h3>
        <div className="project-tag">
          {props.tag.length
            ? props.tag.map((tag, idx) => {
                return (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
