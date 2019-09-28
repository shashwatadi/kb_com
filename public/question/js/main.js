
(function ($) {
    "use strict";

    // alert('Entered');

    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="topic"]');
    var message = $('.validate-input textarea[name="question"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(subject).val().trim() == ''){
            showValidate(subject);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        // console.log('Reached !');

        if(check == true){
  var firebaseConfig = {
    apiKey: "AIzaSyBsRZvHxU8hrNwIQVKp9zGz1tU91m-qgUI",
    authDomain: "kohbee-9594a.firebaseapp.com",
    databaseURL: "https://kohbee-9594a.firebaseio.com",
    projectId: "kohbee-9594a",
    storageBucket: "kohbee-9594a.appspot.com",
    messagingSenderId: "532962372732",
    appId: "1:532962372732:web:76b6f8135b365caa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

            // var data = {
            //     name: $(name).val(),
            //     email: $(email).val(),
            //     topic: $(subject).val(),
            //     question: $(message).val()
            // };
            // Initialize Firebase
            // firebase.initializeApp(firebaseConfig);
            // alert(data);


            var database = firebase.database();

            database.ref('questions/1').set({
                name: $(name).val(),
                email: $(email).val(),
                topic: $(subject).val(),
                question: $(message).val()
            });

        }
        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


    
    

})(jQuery);