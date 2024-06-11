/* eslint-disable react/prop-types */

function Footer(props) {
  const { handleShowModal, data } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>Apod Project</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleShowModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

export default Footer;
