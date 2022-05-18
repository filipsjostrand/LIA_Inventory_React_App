import React, { Component } from 'react'
// import { Navigate, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import EquipmentService from '../services/EquipmentService';
import {withRouter} from '../helpers/withRouter';

class UpdateEquipmentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = { isCancelClicked: true };
        this.state = {
            // id: this.props.Route.match.params.id,
            // id: this.props.match.params.id,
            id: this.id,
            unique_id_serial: '',
            model_name: '',
            date_of_purchase: ''
        }
        this.changeUniqueIdSerialHandler = this.changeUniqueIdSerialHandler.bind(this);
        this.changeModelNameHandler = this.changeModelNameHandler.bind(this);
        this.changeDateOfPurchaseHandler = this.changeDateOfPurchaseHandler.bind(this);
        this.updateEquipment = this.updateEquipment.bind(this);
        this.cancel = this.cancel.bind(this);
        this.navigateFunction = this.navigateFunction.bind(this);
      }
    
componentDidMount() {
  //console.log(this.props.route.params,'test')
    EquipmentService.getEquipmentById(this.state.id).then( (res) =>{
        let equipment = res.data;
        this.setState({
            unique_id_serial: equipment.unique_id_serial,
            model_name: equipment.model_name,
            date_of_purchase: equipment.date_of_purchase
        });
    });
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
    
      updateEquipment = (e) => {
        e.preventDefault();
        let equipment = {
          unique_id_serial: this.state.unique_id_serial, 
          model_name: this.state.model_name, 
          date_of_purchase: this.state.date_of_purchase
        };
        console.log('equipment => ' + JSON.stringify(equipment));

        }
    
      changeUniqueIdSerialHandler = (event) => {
        this.setState({ unique_id_serial: event.target.value });
      }
    
      changeModelNameHandler = (event) => {
        this.setState({ model_name: event.target.value });
      }
    
      changeDateOfPurchaseHandler = (event) => {
        this.setState({ date_of_purchase: event.target.value });
      }
    
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
                  <h3 className="text-center">Update Equipment</h3>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label> Unique id serial: </label>
                        <input placeholder="Unique id Serial" name="unique_id_serial" className="form-control"
                          value={this.state.unique_id_serial} onChange={this.changeUniqueIdSerialHandler} />
                      </div>
                      <div className="form-group">
                        <label> Model Name: </label>
                        <input placeholder="Model Name" name="model_name" className="form-control"
                          value={this.state.model_name} onChange={this.changeModelNameHandler} />
                      </div>
                      <div className="form-group">
                        <label> Date of Purchase: </label>
                        <input placeholder="Date of Purchase" name="date_of_purchase" className="form-control"
                          value={this.state.date_of_purchase} onChange={this.changeDateOfPurchaseHandler} />
                      </div>
    
                      <button className="btn btn-success" onClick={this.updateEquipment}>Save</button>
                      <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={this.cancel}>Cancel</button>
                      <button className="btn btn-secondary" style={{marginLeft: "25%"}} onClick={this.navigateFunction}>Go back</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

export default withRouter(UpdateEquipmentComponent)
