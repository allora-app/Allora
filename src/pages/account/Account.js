import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { List, ListItem, Text } from 'react-native-elements';
import I18n from 'react-native-i18n';
import * as firebase from 'firebase';
import * as Notifications from '../../services/Notifications';

import Login from '../auth/Login';
import Settings from './Settings';

import PageStyles from './Account.Styles';
import CommonStyles from '../../styles/Common';

class Account extends Component {
  constructor(props) {
    super(props);

    const user = firebase.auth().currentUser;
    this.state = {
      user,
      loaded: true
    };
  }

  _getRandom() {
    const res = Notifications.getRandomMessage();
    alert(res);
  }

  _goToSettingsPage() {
    const { navigator } = this.props;

    navigator.push({
      component: Settings,
      title: I18n.t('settings.title')
    })
  }

  async _logout() {
    await firebase.auth().signOut();
    this.props.rootNavigator.push({
      component: Login
    })
  }

  render() {
    const { user } = this.state;
    return (
      <View style={CommonStyles.fullHeightContainer}>
        <Text h4 style={PageStyles.email}>{user.email}</Text>
        <List>
          <ListItem
            title={I18n.t('account.random')}
            leftIcon={{name: 'ios-repeat', type: 'ionicon'}}
            onPress={this._getRandom.bind(this)}
          />
          <ListItem
            title={I18n.t('settings.title')}
            leftIcon={{name: 'ios-settings', type: 'ionicon'}}
            onPress={this._goToSettingsPage.bind(this)}
          />
          <ListItem
            title={I18n.t('account.logout')}
            leftIcon={{name: 'ios-log-out', type: 'ionicon'}}
            onPress={this._logout.bind(this)}
          />
        </List>
      </View>
    );
  }
}

Account.propTypes = {
  navigator: PropTypes.object.isRequired,
  rootNavigator: PropTypes.object.isRequired
}

export default Account;
