jQuery(document).ready(function() {
    if (!isMobile()){
        setTimeout(function(){
            alert("Solo funciona en Telefonos Moviles");
        },200);
    }
});

function startPattern(btnindex) {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    
    if (navigator.vibrate) {
        navigator.vibrate(0);
        switch (btnindex) {
            case 1:
                navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500]);
                break;
            case 2:
                navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]);
                break;
            case 3:
                navigator.vibrate([75,75,75,75,75,75,75,75,150,150,150,450,75,75,75,75,75,525]);
                break;
            case 4:
                navigator.vibrate([250,200,150,150,100,50,450,450,150,150,100,50,900,2250]);
                break;
            case 5:
                navigator.vibrate([50,100,50,100,50,100,400,100,300,100,350,50,200,100,100,50,600]);
                break;
            case 6:
                navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]);
                break;
            case 7:
                navigator.vibrate([100,200,100,100,75,25,100,200,100,500,100,200,100,500]);
                break;
            case 8:
                navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]);
                break;
            case 9:
                navigator.vibrate([0,300,100,50,100,50,100,50,100,50,100,50,100,50,150,150,150,450,100,50,100,50,150,150,150,450,100,50,100,50,150,150,150,450,150,150]);
                break;
            case 10:
                var nvibraciones = getRndInteger(100,200);
                var vibraciones = Array();
                var v = 0;
                for (let index = 1; index < nvibraciones; index++) {
                    v = getRndInteger(500,1000);
                    vibraciones.push(v);                  
                }

                navigator.vibrate(vibraciones);
                break;
        
            default: 
                navigator.vibrate([75,25,75,25,75,25,75,525,75,25,75,25,75,25,75,25,75,25,75,25,75,225,75,25,75,25,75,25,75,225,75,25,75,25,75,25,75,525,75,25,75,25,75,25,75,25,75,25,75,25,75,225,75,25,75,25,75,25,75,225]);
                break;
        }
    } else {
        alert("La funcioón de Vibración no es soportada en el Navegador web utilizado");
    }
  }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function isMobile() {
    var check = false;
    (function(a){
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
        check = true;
    })(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };