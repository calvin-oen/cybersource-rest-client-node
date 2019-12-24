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
    root.CyberSource.Riskv1authenticationsAcquirerInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1authenticationsAcquirerInformation model module.
   * @module model/Riskv1authenticationsAcquirerInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsAcquirerInformation</code>.
   * @alias module:model/Riskv1authenticationsAcquirerInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Riskv1authenticationsAcquirerInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsAcquirerInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsAcquirerInformation} The populated <code>Riskv1authenticationsAcquirerInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('acquirerBin')) {
        obj['acquirerBin'] = ApiClient.convertToType(data['acquirerBin'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('merchantId')) {
        obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Acquirer bank ID number that corresponds to a certificate that Cybersource already has.This ID has this format. 4XXXXX for Visa and 5XXXXX for Mastercard. 
   * @member {String} acquirerBin
   */
  exports.prototype['acquirerBin'] = undefined;
  /**
   * Issuers need to be aware of the Acquirer's Country Code when the Acquirer country differs from the Merchant country and the Acquirer is in the EEA (European Economic Area). 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Registered password for the Visa directory server. 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * Username for the visa directory server that is created when your acquirer sets up your account. This ID might be the same as your merchant ID. the username can be 15 or 23 characters. 
   * @member {String} merchantId
   */
  exports.prototype['merchantId'] = undefined;



  return exports;
}));

