import { Paper } from "@mui/material";
import "./card.css";

const Card = ({ title, type, onClick }) => {
  return (
    <div className="card">
      <Paper
        className={`${type ? "cardStyle2" : "cardStyle"}`}
        elevation={24}
        onClick={() => onClick()}
      >
        {title}
      </Paper>
    </div>
  );
};

export default Card;
