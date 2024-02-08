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
    define(['ApiClient', 'model/GetAllPlansResponseOrderInformation', 'model/GetAllPlansResponsePlanInformation', 'model/PtsV2IncrementalAuthorizationPatch201ResponseLinks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetAllPlansResponseOrderInformation'), require('./GetAllPlansResponsePlanInformation'), require('./PtsV2IncrementalAuthorizationPatch201ResponseLinks'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.GetPlanResponse = factory(root.CyberSource.ApiClient, root.CyberSource.GetAllPlansResponseOrderInformation, root.CyberSource.GetAllPlansResponsePlanInformation, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseLinks);
  }
}(this, function(ApiClient, GetAllPlansResponseOrderInformation, GetAllPlansResponsePlanInformation, PtsV2IncrementalAuthorizationPatch201ResponseLinks) {
  'use strict';




  /**
   * The GetPlanResponse model module.
   * @module model/GetPlanResponse
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>GetPlanResponse</code>.
   * @alias module:model/GetPlanResponse
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>GetPlanResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetPlanResponse} obj Optional instance to populate.
   * @return {module:model/GetPlanResponse} The populated <code>GetPlanResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PtsV2IncrementalAuthorizationPatch201ResponseLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('planInformation')) {
        obj['planInformation'] = GetAllPlansResponsePlanInformation.constructFromObject(data['planInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = GetAllPlansResponseOrderInformation.constructFromObject(data['orderInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * An unique identification number generated by Cybersource to identify the submitted request. Returned by all services. It is also appended to the endpoint of the resource. On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * @member {module:model/GetAllPlansResponsePlanInformation} planInformation
   */
  exports.prototype['planInformation'] = undefined;
  /**
   * @member {module:model/GetAllPlansResponseOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;



  return exports;
}));

