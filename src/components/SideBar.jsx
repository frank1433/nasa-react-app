/* eslint-disable react/prop-types */
export default function SideBar(props) {
const {handleShowModal, data}=props
  return (
    <div className="sideBar">
      <div onClick={handleShowModal} className="bgOverlay"></div>
      <div className="sidebarContainer">
        <h2>{data?.title}</h2>
        <div>
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleShowModal}>
        <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
