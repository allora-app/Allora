import { StackNavigator } from 'react-navigation';
import { enhance } from 'react-navigation-addons';
import I18n from 'react-native-i18n';

import Account from '../pages/account/Account';
import Settings from '../pages/account/Settings';
import SettingsInterval from '../pages/account/Settings.Interval';

const AccountTabStack = enhance(StackNavigator)(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        headerVisible: false,
        headerTitle: I18n.t('account.title'),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        headerTitle: I18n.t('settings.title'),
      },
    },
    SettingsInterval: {
      screen: SettingsInterval,
      navigationOptions: {
        headerTitle: I18n.t('settings.interval.title'),
      },
    },
  },
  {
    // headerMode: 'screen',
  },
);

export default AccountTabStack;
