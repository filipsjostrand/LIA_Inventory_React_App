import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import EquipmentService from '../services/EquipmentService';
import {withRouter} from '../helpers/withRouter';

class AddEquipmentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { isCancelClicked: true };
    this.cancel = this.cancel.bind(this);
    this.navigateFunction = this.navigateFunction.bind(this);

    this.state = {
      uniqueIdSerial: '',
      modelName: '',
      dateOfPurchase: ''
    }
    this.changeUniqueIdSerialHandler = this.changeUniqueIdSerialHandler.bind(this);
    this.changeModelNameHandler = this.changeModelNameHandler.bind(this);
    this.changeDateOfPurchaseHandler = this.changeDateOfPurchaseHandler.bind(this);
    this.saveEquipment = this.saveEquipment.bind(this);
  }

  cancel() {
    this.setState(prevState => ({
      isCancelClicked: !prevState.isCancelClicked
    }));
}

navigateFunction()
    {
        this.props.navigate('/equipment')
    }

  saveEquipment = (e) => {
    e.preventDefault();
    let equipment = {uniqueIdSerial: this.state.uniqueIdSerial, modelName: this.state.modelName, dateOfPurchase: this.state.dateOfPurchase };
    console.log('equipment => ' + JSON.stringify(equipment));

    EquipmentService.addEquipment(equipment).then(res =>{
      this.navigateFunction();
    });

  }

  changeUniqueIdSerialHandler = (event) => {
    this.setState({ uniqueIdSerial: event.target.value });
  }

  changeModelNameHandler = (event) => {
    this.setState({ modelName: event.target.value });
  }

  changeDateOfPurchaseHandler = (event) => {
    this.setState({ dateOfPurchase: event.target.value });
  }

//<button className="btn btn-success" onClick={() => {this.saveEquipment(); this.navigateFunction();}}>Save</button>
//<button className="btn btn-success" onClick={this.saveEquipment && this.navigateFunction}>Save</button>

  render() {
    const isCancelClicked = this.state.isCancelClicked;

    if (isCancelClicked) {
        return <Navigate to="/equipment"/>
}
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3">
              <h3 className="text-center">Add Equipment</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Unique id serial: </label>
                    <input placeholder="Unique id Serial" name="uniqueIdSerial" className="form-control"
                      value={this.state.uniqueIdSerial} onChange={this.changeUniqueIdSerialHandler} />
                  </div>
                  <div className="form-group">
                    <label> Model Name: </label>
                    <input placeholder="Model Name" name="modelName" className="form-control"
                      value={this.state.modelName} onChange={this.changeModelNameHandler} />
                  </div>
                  <div className="form-group">
                    <label> Date of Purchase: </label>
                    <input placeholder="Date of Purchase" name="dateOfPurchase" className="form-control"
                      value={this.state.dateOfPurchase} onChange={this.changeDateOfPurchaseHandler} />
                  </div>

                  <button className="btn btn-success" onClick={() => {this.saveEquipment(); this.navigateFunction();}}>Save</button>


                  <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={this.cancel}>Cancel</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(AddEquipmentComponent);