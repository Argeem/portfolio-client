import type { PortionHeaderProps } from "../../../Types/Common/portion-header.type";
import "./PortionHeader.css";

const PotionHeader = (props: PortionHeaderProps) => {
  return (
    <div className="portion-header">
      <h1>
        {props.title}
        <hr />
      </h1>
    </div>
  );
};

export default PotionHeader;
