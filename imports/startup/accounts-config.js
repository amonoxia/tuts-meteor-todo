import {Accounts} from 'meteor/account-base';

Accounts.ui.config ({
  passwordSignupFields: 'USERNAME_ONLY',
});
