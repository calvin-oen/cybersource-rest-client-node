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
    root.CyberSource.InlineResponse200PlanInformationBillingPeriod = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse200PlanInformationBillingPeriod model module.
   * @module model/InlineResponse200PlanInformationBillingPeriod
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse200PlanInformationBillingPeriod</code>.
   * Billing Frequency 
   * @alias module:model/InlineResponse200PlanInformationBillingPeriod
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse200PlanInformationBillingPeriod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200PlanInformationBillingPeriod} obj Optional instance to populate.
   * @return {module:model/InlineResponse200PlanInformationBillingPeriod} The populated <code>InlineResponse200PlanInformationBillingPeriod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'String');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
    }
    return obj;
  }

  /**
   * Example: - If length=1 & unit=month then charge every month - If length=7 & unit=day then charge every 7th day 
   * @member {String} length
   */
  exports.prototype['length'] = undefined;
  /**
   * Calendar unit values.   possible values:   - `D` - day   - `M` - month   - `W` - week   - `Y` - year 
   * @member {String} unit
   */
  exports.prototype['unit'] = undefined;



  return exports;
}));


