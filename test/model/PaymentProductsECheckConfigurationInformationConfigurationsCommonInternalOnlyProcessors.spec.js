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
    instance = new CyberSource.PaymentProductsECheckConfigurationInformationConfigurationsCommonInternalOnlyProcessors();
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

  describe('PaymentProductsECheckConfigurationInformationConfigurationsCommonInternalOnlyProcessors', function() {
    it('should create an instance of PaymentProductsECheckConfigurationInformationConfigurationsCommonInternalOnlyProcessors', function() {
      // uncomment below and update the code to test PaymentProductsECheckConfigurationInformationConfigurationsCommonInternalOnlyProcessors
      //var instane = new CyberSource.PaymentProductsECheckConfigurationInformationConfigurationsCommonInternalOnlyProcessors();
      //expect(instance).to.be.a(CyberSource.PaymentProductsECheckConfigurationInformationConfigurationsCommonInternalOnlyProcessors);
    });

    it('should have the property enableCCS (base name: "enableCCS")', function() {
      // uncomment below and update the code to test the property enableCCS
      //var instane = new CyberSource.PaymentProductsECheckConfigurationInformationConfigurationsCommonInternalOnlyProcessors();
      //expect(instance).to.be();
    });

    it('should have the property terminalId (base name: "terminalId")', function() {
      // uncomment below and update the code to test the property terminalId
      //var instane = new CyberSource.PaymentProductsECheckConfigurationInformationConfigurationsCommonInternalOnlyProcessors();
      //expect(instance).to.be();
    });

    it('should have the property enable15anTransactionReferenceNumber (base name: "enable15anTransactionReferenceNumber")', function() {
      // uncomment below and update the code to test the property enable15anTransactionReferenceNumber
      //var instane = new CyberSource.PaymentProductsECheckConfigurationInformationConfigurationsCommonInternalOnlyProcessors();
      //expect(instance).to.be();
    });

    it('should have the property portalSupportedPaytypes (base name: "portalSupportedPaytypes")', function() {
      // uncomment below and update the code to test the property portalSupportedPaytypes
      //var instane = new CyberSource.PaymentProductsECheckConfigurationInformationConfigurationsCommonInternalOnlyProcessors();
      //expect(instance).to.be();
    });

    it('should have the property setCompletedState (base name: "setCompletedState")', function() {
      // uncomment below and update the code to test the property setCompletedState
      //var instane = new CyberSource.PaymentProductsECheckConfigurationInformationConfigurationsCommonInternalOnlyProcessors();
      //expect(instance).to.be();
    });

  });

}));
