import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../Actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday'});
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

      </Card>
    );

  }
}

const mapSteteToProps = (State) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};


export default connect(null, {employeeUpdate,
EmployeeCreate}) (EmployeeCreate);