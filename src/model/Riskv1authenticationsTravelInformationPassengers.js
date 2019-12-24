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
    root.CyberSource.Riskv1authenticationsTravelInformationPassengers = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1authenticationsTravelInformationPassengers model module.
   * @module model/Riskv1authenticationsTravelInformationPassengers
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsTravelInformationPassengers</code>.
   * @alias module:model/Riskv1authenticationsTravelInformationPassengers
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Riskv1authenticationsTravelInformationPassengers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsTravelInformationPassengers} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsTravelInformationPassengers} The populated <code>Riskv1authenticationsTravelInformationPassengers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
    }
    return obj;
  }

  /**
   * First name of the passenger to whom the ticket was issued. If there are multiple passengers, include all listed on the ticket. Do not include special characters such as commas, hyphens, or apostrophes. Only ASCII characters are supported. Required for American Express SafeKey (U.S.) for travel-related requests. 
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Last name of the passenger to whom the ticket was issued. If there are multiple passengers, include all listed on the ticket. Do not include special characters such as commas, hyphens, or apostrophes. Only ASCII characters are supported. Required for American Express SafeKey (U.S.) for travel-related requests. 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;



  return exports;
}));

