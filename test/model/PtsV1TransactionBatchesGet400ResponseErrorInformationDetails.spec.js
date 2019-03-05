/**
 * CyberSource Flex API
 * Simple PAN tokenization service
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.PtsV1TransactionBatchesGet400ResponseErrorInformationDetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PtsV1TransactionBatchesGet400ResponseErrorInformationDetails', function() {
    it('should create an instance of PtsV1TransactionBatchesGet400ResponseErrorInformationDetails', function() {
      // uncomment below and update the code to test PtsV1TransactionBatchesGet400ResponseErrorInformationDetails
      //var instane = new CyberSource.PtsV1TransactionBatchesGet400ResponseErrorInformationDetails();
      //expect(instance).to.be.a(CyberSource.PtsV1TransactionBatchesGet400ResponseErrorInformationDetails);
    });

    it('should have the property field (base name: "field")', function() {
      // uncomment below and update the code to test the property field
      //var instane = new CyberSource.PtsV1TransactionBatchesGet400ResponseErrorInformationDetails();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new CyberSource.PtsV1TransactionBatchesGet400ResponseErrorInformationDetails();
      //expect(instance).to.be();
    });

  });

}));