'use strict';
angular.module('angularTestApp')

.service('formPatterns', [function() {
    
    var self = this;
    
    // Used on order 
    self.ALPHANUM = RegExp('([a-zA-Z0-9])');
    self.NUMBER = /^[0-9]{1,}$/;
    self.USERNAME_REGEXP = /^.*$/;
    self.EMAIL_REGEXP = /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i;
    self.PHONE_REGEXP = /^0[1-5-9]{1}[0-9]{8}$/;
    self.PHONE_MOB_REGEXP = /^0[6-7]{1}[0-9]{8}$/;
    self.PWD_REGEXP = RegExp('([^<>"’&]{8,20}$)');
    self.PWDLOGIN_REGEXP = RegExp('([^<>"’&]{4,20}$)');
    self.DATE_REGEXP = RegExp('(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)[0-9][0-9]$');
    self.BDAY_REGEXP = RegExp('(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)[0-9][0-9]$');
    self.NAME_REGEXP = /^[a-zA-Z-'` ŠšÐdŽžCcÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿRr]+$/;
    self.ZIP_REGEXP = /^[0-9]{5}$/;
    self.SIREN_REGEXP = /^[0-9]{9}$/;

    // Used on dad 
    self.DAD_CONTRACT_ID = /^[0-9]{13}$/;

}]);
