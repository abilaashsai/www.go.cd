!function(o){"use strict";function t(){function t(t){function e(){r.fadeOut("fast",function(){r.remove()})}var r=o('<div class="overlay marketo-response">  <div class="popup">    <div class="close-button fa fa-times-circle-o"/>    <div class="thanks-msg"/>  </div></div>');r.on("click",".close-button",e).find(".thanks-msg").html(t),o(document.body).append(r)}this.init=function(n){o(".close-button").click(function(){o(".overlay").remove()});try{MktoForms2.loadForm("//app-e.marketo.com","199-QDE-291",parseInt(n,10),function(r){r.onSuccess(function(n){return r.vals({Company:"",Country:"",Email:"",FirstName:"",LastName:"",Title:"",User_Comments__c:""}),r.submittable(!0),o(r.getFormElem()).find("button[type='submit']").text("Submit").prop("disabled",!1),t(e(n)),!1})})}catch(t){o(".form-loading-error").text(r()?a:i).show()}}}function e(o){for(var t=[s,u],e=!1,r=!1,i=0,a=t.length;i<a;++i)if(c.indexOf(o.formid)>-1&&(e=!0),o[t[i]]){r=!0;break}return e?r?"<h3>Thank you for your interest!</h3>\n<p>We've sent an email to "+n(o.Email)+" about your GoCD email subscription. You must check this email to activate it.</p>\n<p>At the same time, a member of our team will be in touch with you soon.</p>":"<h3>Thank you!</h3>\n<p>A member of our team will be in touch with you soon.</p>":"<h3>You are almost in!</h3>\n<p>We've sent an email to "+n(o.Email)+". You must check this email to activate your subscription.</p>"}function r(){return!!navigator.userAgent.match(/firefox/i)}function n(o){var t=document.createElement("a");return t.textContent=o,t.innerHTML}var i="It looks like our signup form was blocked by an adblocker in your browser! Please email us directly at support@thoughtworks.com or pause your adblocker to use the form.",a="It looks like our signup form was blocked by an adblocker in your browser! Please email us directly at support@thoughtworks.com or pause your adblocker to use the form.",s="Subscription_Enterprise_CD__c",u="surveySTWhatwouldyouliketohearabout",c=["7582","2357"];window.MarketoForm=t}(jQuery);