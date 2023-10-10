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
    define(['ApiClient', 'model/GetAllPlansResponsePlanInformationBillingPeriod', 'model/Rbsv1plansPlanInformationBillingCycles'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetAllPlansResponsePlanInformationBillingPeriod'), require('./Rbsv1plansPlanInformationBillingCycles'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Rbsv1plansidPlanInformation = factory(root.CyberSource.ApiClient, root.CyberSource.GetAllPlansResponsePlanInformationBillingPeriod, root.CyberSource.Rbsv1plansPlanInformationBillingCycles);
  }
}(this, function(ApiClient, GetAllPlansResponsePlanInformationBillingPeriod, Rbsv1plansPlanInformationBillingCycles) {
  'use strict';




  /**
   * The Rbsv1plansidPlanInformation model module.
   * @module model/Rbsv1plansidPlanInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Rbsv1plansidPlanInformation</code>.
   * @alias module:model/Rbsv1plansidPlanInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Rbsv1plansidPlanInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rbsv1plansidPlanInformation} obj Optional instance to populate.
   * @return {module:model/Rbsv1plansidPlanInformation} The populated <code>Rbsv1plansidPlanInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('billingPeriod')) {
        obj['billingPeriod'] = GetAllPlansResponsePlanInformationBillingPeriod.constructFromObject(data['billingPeriod']);
      }
      if (data.hasOwnProperty('billingCycles')) {
        obj['billingCycles'] = Rbsv1plansPlanInformationBillingCycles.constructFromObject(data['billingCycles']);
      }
    }
    return obj;
  }

  /**
   * Plan code is an optional field, If not provided system generates and assign one 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Plan name 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Plan description 
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Updating to `DRAFT` is not allowed from `ACTIVE` and `INACTIVE` status.  Plan Status:  - `DRAFT`  - `ACTIVE`  - `INACTIVE` 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/GetAllPlansResponsePlanInformationBillingPeriod} billingPeriod
   */
  exports.prototype['billingPeriod'] = undefined;
  /**
   * @member {module:model/Rbsv1plansPlanInformationBillingCycles} billingCycles
   */
  exports.prototype['billingCycles'] = undefined;



  return exports;
}));


