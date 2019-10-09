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
    define(['ApiClient', 'model/Ptsv2paymentsPaymentInformationPaymentTypeMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsPaymentInformationPaymentTypeMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsPaymentInformationPaymentType = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsPaymentInformationPaymentTypeMethod);
  }
}(this, function(ApiClient, Ptsv2paymentsPaymentInformationPaymentTypeMethod) {
  'use strict';




  /**
   * The Ptsv2paymentsPaymentInformationPaymentType model module.
   * @module model/Ptsv2paymentsPaymentInformationPaymentType
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsPaymentInformationPaymentType</code>.
   * @alias module:model/Ptsv2paymentsPaymentInformationPaymentType
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Ptsv2paymentsPaymentInformationPaymentType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsPaymentInformationPaymentType} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsPaymentInformationPaymentType} The populated <code>Ptsv2paymentsPaymentInformationPaymentType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('subTypeName')) {
        obj['subTypeName'] = ApiClient.convertToType(data['subTypeName'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = Ptsv2paymentsPaymentInformationPaymentTypeMethod.constructFromObject(data['method']);
      }
    }
    return obj;
  }

  /**
   * A Payment Type is an agreed means for a payee to receive legal tender from a payer. The way one pays for a commercial financial transaction. Examples: Card, Bank Transfer, Digital, Direct Debit. Possible values: - `CARD` (use this for a PIN debit transaction) 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * SubType Name is detail information about Payment Type. Examples: For Card, if Credit or Debit or PrePaid. For Bank Transfer, if Online Bank Transfer or Wire Transfers. - `DEBIT` (use this for a PIN debit transaction) 
   * @member {String} subTypeName
   */
  exports.prototype['subTypeName'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationPaymentTypeMethod} method
   */
  exports.prototype['method'] = undefined;



  return exports;
}));

