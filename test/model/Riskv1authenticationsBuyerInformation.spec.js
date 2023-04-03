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
    instance = new CyberSource.Riskv1authenticationsBuyerInformation();
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

  describe('Riskv1authenticationsBuyerInformation', function() {
    it('should create an instance of Riskv1authenticationsBuyerInformation', function() {
      // uncomment below and update the code to test Riskv1authenticationsBuyerInformation
      //var instane = new CyberSource.Riskv1authenticationsBuyerInformation();
      //expect(instance).to.be.a(CyberSource.Riskv1authenticationsBuyerInformation);
    });

    it('should have the property merchantCustomerId (base name: "merchantCustomerId")', function() {
      // uncomment below and update the code to test the property merchantCustomerId
      //var instane = new CyberSource.Riskv1authenticationsBuyerInformation();
      //expect(instance).to.be();
    });

    it('should have the property personalIdentification (base name: "personalIdentification")', function() {
      // uncomment below and update the code to test the property personalIdentification
      //var instane = new CyberSource.Riskv1authenticationsBuyerInformation();
      //expect(instance).to.be();
    });

    it('should have the property mobilePhone (base name: "mobilePhone")', function() {
      // uncomment below and update the code to test the property mobilePhone
      //var instane = new CyberSource.Riskv1authenticationsBuyerInformation();
      //expect(instance).to.be();
    });

    it('should have the property workPhone (base name: "workPhone")', function() {
      // uncomment below and update the code to test the property workPhone
      //var instane = new CyberSource.Riskv1authenticationsBuyerInformation();
      //expect(instance).to.be();
    });

  });

}));
