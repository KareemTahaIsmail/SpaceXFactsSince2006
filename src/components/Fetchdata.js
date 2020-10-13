import React, { Component } from "react";
import Modal from 'react-modal';

class Fetchdata extends Component {
  
  componentDidMount = () => {
      this.props.handleSubmit();
  }

  displayYears = () => {
    let x = [];
    for(let i= 2006; i<=2020; i++){
      x.push(<option>{i}</option>)
    }
    return x;
  }

  render() {
    const dataToMap = this.props.flights || {}
    const modalData = this.props.flights.filter(el => {
      return el.launch_year === this.props.value
  })
  console.log(modalData)
    return (
      <div className="fetchdata">
        <h1 className="mainHeader"><b>Choose A Year:</b></h1>
        <hr style={{color: "white", width:"500px"}}/>
        {/* <input type="text"
               onChange={this.props.handleInputChange}
               value={this.props.value}
               className="effect-1"
               /> */}
        <select onChange={this.props.handleInputChange}
               value={this.props.value} className="selectYears">
          {this.displayYears()}
        </select>
               <span className="focus-border"></span>
        <div className="data__container">   
        {dataToMap.filter(el => {
              return el.launch_year === this.props.value
          }).map((el, index) => {
              return <div onClick={()=> this.props.displayModal(index)}
                          className="fetchdata__item">
                        {el.mission_name}
                    </div>
          })}
          </div>
          <Modal
          isOpen={this.props.showModal}
          contentLabel="Example Modal"
          onRequestClose={this.props.closeModalFunc}
          shouldCloseOnOverlayClick={true}
        >
        <div className="modal">
          {this.props.showModal ? 
        <div className="modal__container">
            <img src={modalData[this.props.indexModal].links.mission_patch}
                 alt="" />
          <div className="modal__textcontainer">
            <p>Mission name: {modalData[this.props.indexModal].mission_name}</p>
            <br />
            <p>Rocket name: {modalData[this.props.indexModal].rocket.rocket_name}</p>
            <br />
            <p>Details: {modalData[this.props.indexModal].details}</p>
          </div>
        </div>
            :
            <h2>showmodal is false</h2>
          } 
          </div>
        </Modal>   
      </div>
    );
  }
}



export default Fetchdata;
