'use strict';
angular.module('angularTestApp').
service('formPatterns', [function() {
   
    this.ALPHANUM = RegExp('([a-zA-Z0-9])');
    this.NUM = RegExp('([0-9])');
    this.NUMBER = /^[0-9]{1,}$/;
    this.USERNAME_REGEXP = /^.*$/;
    this.EMAIL_REGEXP = /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i;
    this.PHONE_REGEXP = /^0[1-9]{1}[0-9]{8}$/;
    this.PWD_REGEXP = RegExp('([^<>"’&]{8,20}$)');
    this.PWDLOGIN_REGEXP = RegExp('([^<>"’&]{4,20}$)');
    this.FRENCH_SIMPLE_DATE_REGEXP = RegExp('(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)[0-9][0-9]$');
    this.NAME_REGEXP = /^[a-zA-Z-'` ŠšÐdŽžCcÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿRr]+$/;
    this.ZIP_REGEXP = /^[0-9]{5}$/;
    this.SIREN_REGEXP = /^[0-9]{9}$/;
}]);
