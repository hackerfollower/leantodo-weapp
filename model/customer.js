const AV = require('../utils/av-live-query-core-min');

class Customer extends AV.Object {
  get name() {
    return this.get('name');
  }
  set name(value) {
    this.set('name', value);
  }

  get mobilePhoneNumber() {
    return this.get('mobilePhoneNumber');
  }
  set mobilePhoneNumber(value) {
    this.set('mobilePhoneNumber', value);
  }

}

AV.Object.register(Customer, 'Customer');
module.exports = Customer;