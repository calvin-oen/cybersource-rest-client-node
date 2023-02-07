/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PushFunds201ResponseOrderInformationAmountDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PushFunds201ResponseOrderInformationAmountDetails model module.
   * @module model/PushFunds201ResponseOrderInformationAmountDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PushFunds201ResponseOrderInformationAmountDetails</code>.
   * @alias module:model/PushFunds201ResponseOrderInformationAmountDetails
   * @class
   * @param currency {String} Currency used for the order. Use the three-character ISO Standard Currency Codes 
   */
  var exports = function(currency) {
    var _this = this;


    _this['currency'] = currency;


  };

  /**
   * Constructs a <code>PushFunds201ResponseOrderInformationAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushFunds201ResponseOrderInformationAmountDetails} obj Optional instance to populate.
   * @return {module:model/PushFunds201ResponseOrderInformationAmountDetails} The populated <code>PushFunds201ResponseOrderInformationAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('settlementAmount')) {
        obj['settlementAmount'] = ApiClient.convertToType(data['settlementAmount'], 'String');
      }
      if (data.hasOwnProperty('settlementCurrency')) {
        obj['settlementCurrency'] = ApiClient.convertToType(data['settlementCurrency'], 'String');
      }
    }
    return obj;
  }

  /**
   * Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  Note For Visa Platform Conenct, FDC Compass, and Chase Paymentech processors, the maximum length for this field is 12 numbers.  Processor Amount Ranges: Visa Platform Connect: .01-9999999999.99  Mastercard Send: 1-9999999999.99  FDC Compass: .01- 9999999999.994  Chase Paymentech: .01-9999999999.99 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Currency used for the order. Use the three-character ISO Standard Currency Codes 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * This is a multicurrency field. It contains the transaction amount (field 4), converted to the Currency used to bill the cardholder’s account. This field is returned for OCT transactions. 
   * @member {String} settlementAmount
   */
  exports.prototype['settlementAmount'] = undefined;
  /**
   * This is a multicurrency-only field. It contains a 3-digit numeric code that identifies the currency used by the issuer to bill the cardholder's account. This field is returned for OCT transactions. 
   * @member {String} settlementCurrency
   */
  exports.prototype['settlementCurrency'] = undefined;



  return exports;
}));


