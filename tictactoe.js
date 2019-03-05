$(document).ready(function(){
        flag = true;
        $('.myDiv').on('click',function(event){
          event.preventDefault();
          if (flag) {
            $(this).addClass('fa fa-times');
            flag = false;
          } else {
            $(this).addClass('fa fa-circle-o');
            flag = true;
          }

          // 123
          if($('#one').hasClass('fa fa-times') && $('#two').hasClass('fa fa-times') && $('#three').hasClass('fa fa-times')){
            alert('Cross Wins');
            location.reload();
          }
          if($('#one').hasClass('fa fa-circle-o') && $('#two').hasClass('fa fa-circle-o') && $('#three').hasClass('fa fa-circle-o')){
            alert('Circle Wins');
            location.reload();
          }

          // 147
          if($('#one').hasClass('fa fa-circle-o') && $('#four').hasClass('fa fa-circle-o') && $('#seven').hasClass('fa fa-circle-o')){
            alert('Circle Wins');
            location.reload();
          }
          if($('#one').hasClass('fa fa-times') && $('#four').hasClass('fa fa-times') && $('#seven').hasClass('fa fa-times')){
            alert('Cross Wins');
            location.reload();
          }

          //159
          if($('#one').hasClass('fa fa-times') && $('#five').hasClass('fa fa-times') && $('#nine').hasClass('fa fa-times')){
            alert('Cross Wins');
            location.reload();
          }
          if($('#one').hasClass('fa fa-circle-o') && $('#five').hasClass('fa fa-circle-o') && $('#nine').hasClass('fa fa-circle-o')){
            alert('Circle Wins');
            location.reload();
          }

          //789
          if($('#seven').hasClass('fa fa-circle-o') && $('#eight').hasClass('fa fa-circle-o') && $('#nine').hasClass('fa fa-circle-o')){
            alert('Circle Wins');
            location.reload();
          }
          if($('#seven').hasClass('fa fa-times') && $('#eight').hasClass('fa fa-times') && $('#nine').hasClass('fa fa-times')){
            alert('Cross Wins');
            location.reload();
          }
          //369
          if($('#three').hasClass('fa fa-times') && $('#six').hasClass('fa fa-times') && $('#nine').hasClass('fa fa-times')){
            alert('Cross Wins');
            location.reload();
          }
          if($('#three').hasClass('fa fa-circle-o') && $('#six').hasClass('fa fa-circle-o') && $('#nine').hasClass('fa fa-circle-o')){
            alert('Circle Wins');
            location.reload();
          }

          //258
          if($('#two').hasClass('fa fa-times') && $('#five').hasClass('fa fa-times') && $('#eight').hasClass('fa fa-times')){
            alert('Cross Wins');
            location.reload();
          }
          if($('#two').hasClass('fa fa-circle-o') && $('#five').hasClass('fa fa-circle-o') && $('#eight').hasClass('fa fa-circle-o')){
            alert('Circle Wins');
            location.reload();
          }
          //456
          if($('#four').hasClass('fa fa-times') && $('#five').hasClass('fa fa-times') && $('#six').hasClass('fa fa-times')){
            alert('Cross Wins');
            location.reload();
          }
          if($('#four').hasClass('fa fa-circle-o') && $('#five').hasClass('fa fa-circle-o') && $('#six').hasClass('fa fa-circle-o')){
            alert('Circle Wins');
            location.reload();
          }
          //357
          if($('#three').hasClass('fa fa-times') && $('#five').hasClass('fa fa-times') && $('#seven').hasClass('fa fa-times')){
            alert('Cross Wins');
            location.reload();
          }
          if($('#three').hasClass('fa fa-circle-o') && $('#five').hasClass('fa fa-circle-o') && $('#seven').hasClass('fa fa-circle-o')){
            alert('Circle Wins');
            location.reload();
          }
        });


      });
