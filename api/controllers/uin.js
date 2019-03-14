'use strict';

// Database.
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(__dirname + '/../models/db.json');
const db = low(adapter);



const isTrustedPhoneMoreOne = (phones) => phones.length > 1 ? true : false;



module.exports.getUin = (req, res) => {
   const phoneNumber = req.params.phoneNumber;
   const phoneNumberRegex = /^\(?([0-9]{3,4})\)?([0-9]{3})([0-9]{4})$/;

   if (phoneNumberRegex.test(phoneNumber)) {
      let uinData = db.get('uins').find({phone: [phoneNumber]}).value();

      if (uinData === undefined) {
         res.status(200).send('-1'); // if a phone number is not associated with uin (no data).
      } else {
         if (isTrustedPhoneMoreOne(uinData.phone)) {
            res.status(200).send('-2'); // if uin has more than one phone number.
         } else {
            res.status(200).send(uinData.uin); // if uin has one trusted phone number and match by pattern.
         }
      }
   } else {
      res.status(200).send('-3'); // if a phone number is not match.
   }
}
