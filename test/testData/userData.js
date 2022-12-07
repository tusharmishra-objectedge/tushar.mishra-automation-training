// userData.js
import randomEmail from 'random-email';

class UserData {
    constructor() {
      this.PERMANENT_EMAIL = 'dontDel@test.test';
//signup or login
      this.LOGIN_EMAIL = 'test@test.test';      
      this.PASSWORD = '123Qwerty#';

      this.SIGNUP_NAME = 'test';
      this.SIGNUP_EMAIL = randomEmail()//'test@test.test';
      //this.GENDER = 'male';
      this.DAY = '15';
      this.MONTH = 'July';
      this.YEAR = '2000';
      this.FIRST_NAME = 'fname';
      this.LAST_NAME = 'lname';
      this.COMPANY = 'OE';
      this.ADDRESS_1 = 'church street';
      this.ADDRESS_2 = 'mg road';
      this.STATE = 'karnataka';
      this.CITY = 'bangalore';
      this.ZIPCODE = '560128';
      this.MOBILE = '1234567890';
//contact us
      this.SUBJECT = 'suggestions'
      this.MESSAGE = 'some random text'
      this.FILEPATH = 'C:/Users/tushar.m/Desktop/random.csv'
//card details
      this.CARDNAME = 'test'
      this.CARDNO = '123456'
      this.CVC = '123'
      this.CARDMONTH = 1
      this.CARDYEAR = 28
    }
}


export default new UserData()