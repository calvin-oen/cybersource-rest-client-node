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
    root.CyberSource.Ptsv2billingagreementsDeviceInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2billingagreementsDeviceInformation model module.
   * @module model/Ptsv2billingagreementsDeviceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2billingagreementsDeviceInformation</code>.
   * @alias module:model/Ptsv2billingagreementsDeviceInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Ptsv2billingagreementsDeviceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2billingagreementsDeviceInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2billingagreementsDeviceInformation} The populated <code>Ptsv2billingagreementsDeviceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('httpAcceptBrowserValue')) {
        obj['httpAcceptBrowserValue'] = ApiClient.convertToType(data['httpAcceptBrowserValue'], 'String');
      }
      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
      if (data.hasOwnProperty('userAgentBrowserValue')) {
        obj['userAgentBrowserValue'] = ApiClient.convertToType(data['userAgentBrowserValue'], 'String');
      }
    }
    return obj;
  }

  /**
   * Value of the Accept header sent by the customer’s web browser. **Note** If the customer’s browser provides a value, you must include it in your request. 
   * @member {String} httpAcceptBrowserValue
   */
  exports.prototype['httpAcceptBrowserValue'] = undefined;
  /**
   * IP address of the customer.  #### Used by **Authorization, Capture, and Credit** Optional field. 
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * Value of the User-Agent header sent by the customer’s web browser. Note If the customer’s browser provides a value, you must include it in your request. 
   * @member {String} userAgentBrowserValue
   */
  exports.prototype['userAgentBrowserValue'] = undefined;



  return exports;
}));


