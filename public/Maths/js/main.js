
(function ($) {
    "use strict";

    // alert('Entered');

    
    /*==================================================================
    [ Validate ]*/
    var q1 = $('.fs-form input[name="q1"]');
    var q2 = $('.fs-form input[name="q2"]');
    var q3 = $('.fs-form input[name="q3"]');
    var q4 = $('.fs-form input[name="q4"]');
    var q5 = $('.fs-form input[name="q5"]');
    var d = new Date();
    var n = d.getTime();


    $('.fs-form').on('submit',function(e){


        // if($(name).val().trim() == ''){
        //     showValidate(name);
        //     check=false;
        // }

        // if($(subject).val().trim() == ''){
        //     showValidate(subject);
        //     check=false;
        // }


        // if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        //     showValidate(email);
        //     check=false;
        // }

        // if($(message).val().trim() == ''){
        //     showValidate(message);
        //     check=false;
        // }

        // // console.log('Reached !');

        // if(check == true){
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

     //        exports.sendMail = functions.https.onRequest((req, res) => {
     //            cors(req, res, () => {
     //            const dest = 'team@kohbee.com';

     //            const mailOptions ={
     //                from: 'Kohbee Web<teamkohbee@gmail.com>',
     //                to: dest,
     //                subject: 'NEW Web Query',
     //                html: $(q4).val()
     //            };

     //            return transporter.sendMail(mailOptions, (erro, info) => {
     //            if(erro){
     //             return res.send(erro.toString());
     //            }
     //         return res.send('Send!');
     //     });
     // });
     //        });

            database.ref('queries').push({
                q1: $(q1).val(),
                q2: $(q2).val(),
                q3: $(q3).val(),
                q4: $(q4).val(),
                q5: $(q5).val(),
                timestamp: n
            }).then(()=>{
                window.location.replace("http://kohbee.com");
                alert("Welcome to Kohbee ! You will receive a call from us soon !");
            });




        
        e.preventDefault();
            // var delayInMilliseconds = 1000; //10 second
    });


    
    

})(jQuery);