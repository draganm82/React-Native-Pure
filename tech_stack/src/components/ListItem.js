import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
 } from 'react-native';
import { conect } from 'react-redux';
import { CardSection } from './common';
import * as aqctions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription () {
    const {library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection style={ descriptionStyle }>
          <Text style={{ flex: 1}}>
          {library.description}
          </Text>
        </CardSection >
      );
    }
  }

  reder() {
    const {titleStyle, desriptionStyle} =styles;
    const {id, title } = this.props.library;


    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id) }>
        <View>
          <CardSection>
            <Text style = {titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
          </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  titleStyle: {
     fontSize: 18,
     paddingLeft: 15
  },
  desriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expnded };
};

export default connect(mapStateToProps, actions) (ListItem);
