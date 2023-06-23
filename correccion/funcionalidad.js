function showCart(x){
    document.getElementById("products-id").style.display = "block";
}
function closeBtn(){
     document.getElementById("products-id").style.display = "none";
}

window.addEventListener(`load`, function (){
    
    document.getElementById("sofa1").addEventListener(`click`, sofa1)
    document.getElementById("sofa2").addEventListener(`click`, sofa2)
    document.getElementById("sofa3").addEventListener(`click`, sofa3)
    document.getElementById("sofa4").addEventListener(`click`, sofa4)
    document.getElementById("sofa5").addEventListener(`click`, sofa5)
    document.getElementById("sofa6").addEventListener(`click`, sofa6)
    document.getElementById("sofa7").addEventListener(`click`, sofa7)
    document.getElementById("sofa8").addEventListener(`click`, sofa8)
    document.getElementById("sofa9").addEventListener(`click`, sofa9)
    document.getElementById("sofa10").addEventListener(`click`, sofa10)
    document.getElementById("sofa11").addEventListener(`click`, sofa11)
    document.getElementById("sofa12").addEventListener(`click`, sofa12)
    document.getElementById("eliminar").addEventListener(`click`, eliminar)

    })

    function sofa1(){
        localStorage.setItem("sofa1", "agregado")
    }

    function sofa2(){
        localStorage.setItem("sofa2", "agregado")
    }

    function sofa3(){
        localStorage.setItem("sofa3", "agregado")
    }

    function sofa4(){
        localStorage.setItem("sofa4", "agregado")
    }

    function sofa5(){
        localStorage.setItem("sofa5", "agregado")
    }

    function sofa6(){
        localStorage.setItem("sofa6", "agregado")
    }

    function sofa7(){
        localStorage.setItem("sofa7", "agregado")
    }

    function sofa8(){
        localStorage.setItem("sofa8", "agregado")
    }

    function sofa9(){
        localStorage.setItem("sofa9", "agregado")
    }

    function sofa10(){
        localStorage.setItem("sofa10", "agregado")
    }

    function sofa11(){
        localStorage.setItem("sofa11", "agregado")
    }

    function sofa12(){
        localStorage.setItem("sofa12", "agregado")
    }

    function eliminar(){
        localStorage.removeItem("eliminar")
    }