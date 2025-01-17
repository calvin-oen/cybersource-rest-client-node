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
    instance = new CyberSource.InlineResponse2002();
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

  describe('InlineResponse2002', function() {
    it('should create an instance of InlineResponse2002', function() {
      // uncomment below and update the code to test InlineResponse2002
      //var instane = new CyberSource.InlineResponse2002();
      //expect(instance).to.be.a(CyberSource.InlineResponse2002);
    });

    it('should have the property registrationInformation (base name: "registrationInformation")', function() {
      // uncomment below and update the code to test the property registrationInformation
      //var instane = new CyberSource.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property integrationInformation (base name: "integrationInformation")', function() {
      // uncomment below and update the code to test the property integrationInformation
      //var instane = new CyberSource.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property organizationInformation (base name: "organizationInformation")', function() {
      // uncomment below and update the code to test the property organizationInformation
      //var instane = new CyberSource.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property productInformation (base name: "productInformation")', function() {
      // uncomment below and update the code to test the property productInformation
      //var instane = new CyberSource.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property productInformationSetups (base name: "productInformationSetups")', function() {
      // uncomment below and update the code to test the property productInformationSetups
      //var instane = new CyberSource.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property documentInformation (base name: "documentInformation")', function() {
      // uncomment below and update the code to test the property documentInformation
      //var instane = new CyberSource.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instane = new CyberSource.InlineResponse2002();
      //expect(instance).to.be();
    });

  });

}));
