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
    root.CyberSource.Boardingv1registrationsDocumentInformationSignedDocuments = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Boardingv1registrationsDocumentInformationSignedDocuments model module.
   * @module model/Boardingv1registrationsDocumentInformationSignedDocuments
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Boardingv1registrationsDocumentInformationSignedDocuments</code>.
   * @alias module:model/Boardingv1registrationsDocumentInformationSignedDocuments
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Boardingv1registrationsDocumentInformationSignedDocuments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Boardingv1registrationsDocumentInformationSignedDocuments} obj Optional instance to populate.
   * @return {module:model/Boardingv1registrationsDocumentInformationSignedDocuments} The populated <code>Boardingv1registrationsDocumentInformationSignedDocuments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;



  return exports;
}));


