import { useParams } from "react-router-dom";

const GigDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Gig Details Page</h2>
      <p>Gig ID: {id}</p>
    </div>
  );
};

export default GigDetails;
