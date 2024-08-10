import "./modal.css";

export const Modal = ({ action = () => console.log("action"), data = [] }) => {
  return (
    <div className="modal-bg">
      <div className="pokemon-details">
        <button className="pokemon-close-btn" onClick={action}>
          <i className="bi bi-x"></i>
        </button>
        <div className="details-header">
          <h1>{data.name}</h1>
          <img src={data.picture} alt="" />
        </div>
        <div className="details-content">
          <p>
            <strong>Type: Grass</strong>
          </p>
          <p>
            <strong>Abilities: Grass</strong>
          </p>
          <p>
            <strong>Experience: Grass</strong>
          </p>
          <p>
            <strong>Level:10</strong>
          </p>
          <strong>Description: </strong>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam aliquid unde eum fuga commodi pariatur dolores, repudiandae et sequi. Esse nemo suscipit omnis rem exercitationem ipsum in veniam fugit praesentium.</p>
        </div>
      </div>
    </div>
  );
};
