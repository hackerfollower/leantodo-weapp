const {
  User
} = require('../../utils/av-live-query-core-min');

Page({
  data: {
    username: '',
    password: '',
    mobilePhoneNumber: '',
    email: '',
    error: null,
    authData: '',
  },
  onLoad: function () {
    const user = User.current();
    if (user) {
      this.setData({
        username: user.get('username'),
        mobilePhoneNumber: user.get('mobilePhoneNumber'),
        email: user.get('email'),
        authData: JSON.stringify(user.get('authData'), undefined, 2),
      });
    }
  },
  updateUsername: function ({
    detail: {
      value
    }
  }) {
    this.setData({
      username: value
    });
  },
  updatePassword: function ({
    detail: {
      value
    }
  }) {
    this.setData({
      password: value
    });
  },

  updateMobilePhoneNumber: function ({
    detail: {
      value
    }
  }) {
    this.setData({
      mobilePhoneNumber: value
    });
  },
  updateEmail: function ({
    detail: {
      value
    }
  }) {
    this.setData({
      email: value
    });
  },


  save: function () {
    this.setData({
      error: null,
    });
    const {
      username,
      password,
      mobilePhoneNumber,
      email
    } = this.data;
    const user = User.current();
    if (username) user.set({
      username
    });
    if (password) user.set({
      password
    });
    if (mobilePhoneNumber) user.set({
      mobilePhoneNumber
    });
    if (email) user.set({
      email
    });

    user.save().then(() => {
      wx.showToast({
        title: '更新成功',
        icon: 'success',
      });
    }).catch(error => {
      this.setData({
        error: error.message,
      });
    });
  }
});
