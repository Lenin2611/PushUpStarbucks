# Starbucks - Frontend

# Starbucks

### Starbucks desea construir un sitio web responsivo que permita ofrecer una amplia gama de bebidas frías y calientes a base de café, que incluyen desde espressos y lattes hasta frappuccinos y cafés helados.

En este proyecto se usó HTML, CSS, Bootstrap y JavaScript:

### Html: 

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, height=device-height initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
    <link rel="shortcut icon" href="img/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/bootstrapCSS/bootstrap.min.css">
    <script src="js/bootstrapJS/bootstrap.bundle.min.js" defer></script>
    <title>Starbucks</title>
</head>

<body>
    <nav class="navbar fixed-top navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img class="logo" src="img/logo.png" alt="Logo Starbucks"></a>
            <button style="border: none;" class="toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span style="background-color: white;" class="navbar-toggler-icon"></span>
            </button>
            <div style="width: 100vw; height: 100vh; background-color: rgb(231, 231, 231);"
                class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                    <button type="button" class="btn-close mt-3" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div style="margin: auto; text-align: center;" class="offcanvas-body">
                    <ul class="navbar-nav justify-content flex-grow-1 pt-5 mt-5">
                        <li class="nav-item">
                            <a style="font-size: 4vw; background-color: #007042; border-radius: 5px;"
                                class="nav-link active mb-4" data-bs-dismiss="offcanvas" aria-current="page"
                                href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a style="font-size: 4vw;" class="nav-link mb-4"
                                href="https://www.starbucks.com.co/menu">Menu</a>
                        </li>
                        <li class="nav-item">
                            <a style="font-size: 4vw" class="nav-link mb-4"
                                href="https://www.starbucks.com.co/seccion/novedades">Novedades</a>
                        </li>
                        <li class="nav-item">
                            <a style="font-size: 4vw" class="nav-link"
                                href="https://www.starbucks.com.co/stores">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav-grande" style="display: flex; justify-content: space-around;">
                <a id="inicio" class="link" style="text-decoration: none; color: black; margin-inline: 30px; border: solid 0.2vw #007042 !important; padding: 3px 20px; border-radius: 10px;"
                    href="#">Inicio</a>
                <a class="link" style="text-decoration: none; color: black; margin-inline: 30px; padding: 3px 20px;"
                    href="https://www.starbucks.com.co/menu">Menu</a>
                <a class="link" style="text-decoration: none; color: black; margin-inline: 30px; padding: 3px 20px;"
                    href="https://www.starbucks.com.co/seccion/novedades">Novedades</a>
                <a class="link" style="text-decoration: none; color: black; margin-inline: 30px; padding: 3px 20px;"
                    href="https://www.starbucks.com.co/stores">Contacto</a>
            </div>
        </div>
    </nav>
    <div id="carouselExampleCaptions" class="carousel slide" style="z-index: 10;">
        <div class="carousel-indicators fixed-bottom" style="width: 100vw; margin: 0;">
            <img id="verde" src="img/thumb1.png" style="height: 50px; margin-inline: 20px;" type="button"
                data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></img>
            <img id="rosa" src="img/thumb2.png" style="height: 50px;" type="button"
                data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="active medio"></img>
            <img id="violeta" src="img/thumb3.png" style="height: 50px; margin-inline: 20px;" type="button"
                data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="active"></img>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="todo">
                    <div class="pantalla">
                        <h1 style="font-weight: 600;">It's not just Coffee <br>It's <span
                                style="color: #007042; font-weight: 900;"><strong>Starbucks</strong></span></h1>
                        <p class="texto">Since 1971, it always be about quality. We're passionate about it ethicaly
                            sourcing only the finest Arabic coffe beans and roasting them with great care. Our passion
                            for coffe is rivaled only by our love for sharing it</p>
                    </div>
                    <div class="imagen">
                        <img class="img" src="img/img1.png" alt="Malteada Verde">
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="todo">
                    <div class="pantalla">
                        <h1 style="font-weight: 600;">It's not just Coffee <br>It's <span
                                style="color: #e8728e; font-weight: 900;"><strong>Starbucks</strong></span></h1>
                        <p class="texto">Since 1971, it always be about quality. We're passionate about it ethicaly
                            sourcing only the finest Arabic coffe beans and roasting them with great care. Our passion
                            for coffe is rivaled only by our love for sharing it</p>
                    </div>
                    <div class="imagen">
                        <img class="img" src="img/img2.png" alt="Malteada Rosa">
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="todo">
                    <div class="pantalla">
                        <h1  style="font-weight: 600;">It's not just Coffee <br>It's <span
                                style="color: #e5448c; font-weight: 900;"><strong>Starbucks</strong></span></h1>
                        <p class="texto">Since 1971, it always be about quality. We're passionate about it ethicaly
                            sourcing only the finest Arabic coffe beans and roasting them with great care. Our passion
                            for coffe is rivaled only by our love for sharing it</p>
                    </div>
                    <div class="imagen">
                        <img class="img" src="img/img3.png" alt="Malteada Violeta">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="redes">
        <a href="https://www.facebook.com/StarbucksColombia/?locale=es_LA"><img class="red redf" src="img/facebook.png"
                alt="Facebook"></a>
        <a href="https://twitter.com/Starbucks"><img class="red" src="img/twitter.png" alt="Twitter"></a>
        <a href="https://www.instagram.com/starbuckscol/?hl=es"><img class="red" src="img/instagram.png"
                alt="Instagram"></a>
    </div>
    <div id="circle" style="background-color: #007042;" class="circle"></div>
    <script src="js/main.js" defer></script>
</body>

</html>
```

### Css:  

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;900&display=swap');

body {
    font-family: 'Poppins', sans-serif !important;
    overflow-x: hidden;
}

* {
    box-sizing: border-box;
    margin: 0vw;
    padding: 0vw;
}

.navbar {
    background-color: white !important;
}



@media screen and (max-width: 1024.5px) {

    .pantalla {
        text-align: center; 
        font-weight: 400;
        margin-top: 100px; 
        display: flex; 
        flex-direction: column; 
        align-items: center;
    }

    .nav-grande {
        display: none !important;
    }

    .logo {
        width: 8vw;
    }
    
    .toggler :hover, .toggler :focus {
        border: none;
        box-shadow: none !important;
        background-color: white;
    }
    
    .toggler {
        border: none;
        box-shadow: none !important;
        background-color: white;
    }
    
    .navbar-toggler-icon {
        border: none;
        box-shadow: none;
        width: 4vw !important;
    }
    
    .btn-close {
        font-size: 1.5rem;
        box-shadow: none !important;
    }
    
    .btn-close :hover, .btn-close :focus, .btn-close :active {
        box-shadow: none !important;
    }

    .texto {
        text-align: center;
        margin-inline: 10px; 
        margin-top: 30px;
    }
    
    .medio {
        margin-inline: 25vw !important;
    }

    .redes {
        position: relative;
        bottom: 40vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        margin-right: 2vw;
    }

    .red {
        width: 6vw;
        margin-block: 2vw;
    }

    .redf {
        width: 4vw;
        margin-right: 1vw;
    }

    .circle {
        position:fixed;
        top: 450px;
        right: 200px;
        width: 1000px;
        height: 1000px;
        border-radius: 100%;
        z-index: -1;
        transition: 0.5s;
    }

    .carousel-item {
        display: flex;
        flex-direction: column;
    }

    .imagen {
        display: flex;
        justify-content: center;
    }

    .img {
        width: 50vw;
    }

    .offcanvas {
        z-index: 100000 !important;
    }

    h1 {
        font-size: 7vw !important;
    }
    
    p {
        font-size: 4vw !important;
    }

    #verde, #rosa, #violeta {
        width: 10vw;
        height: 15vw !important;
        background: transparent !important;
    }
}

@media screen and (min-width: 1025px) {

    .carousel-indicators {
        background-color: transparent !important;
    }

    .pantalla {
        display: flex;
        flex-direction: column;
        margin-top: 4vw;
    }

    .toggler {
        display: none;
    }

    .circle {
        position: absolute;
        top: 500px;
        right: 0px;
        width: 70vw;
        height: 80vh;
        border-top-left-radius: 100%;
        z-index: -1;
        transition: 0.5s;
    }

    .logo {
        margin: 10px;
        width: 5vw;
    }

    .todo {
        margin-top: 200px;
        display: flex !important;
        margin-inline: 7vw;
        justify-content: end !important;
    }

    .img {
        margin-top: 2vw;
        width: 25vw;
        margin-left: 200px !important;
    }

    h1 {
        font-size: 3vw !important;
        margin-bottom: 30px !important;
    }

    p {
        margin-top: 20px !important;
        font-size: 1.5vw !important;
    }

    #verde, #rosa, #violeta {
        width: 7vw;
        height: 9vw !important;
        background: transparent !important;
    }

    .redes {
        position: relative;
        bottom: 26vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        margin-right: 15px;
        
    }

    .red {
        width: 3vw;
        margin-block: 1vw;
    }

    .redf {
        width: 2vw;
        margin-right: 0.5vw;
    }

    .link {
        font-size: 1.2vw;
    }
}
```

### JavaScript:

```css
let verde = document.getElementById("verde");
let rosa = document.getElementById("rosa");
let violeta = document.getElementById("violeta");
let circle = document.getElementById("circle");
let inicio = document.getElementById("inicio");

verde.addEventListener("click", function(){
    circle.style.backgroundColor="#007042";
    inicio.style.borderColor="#007042";
})

rosa.addEventListener("click", function(){
    circle.style.backgroundColor="#e8728e";
    inicio.style.borderColor="#e8728e";
})

violeta.addEventListener("click", function(){
    circle.style.backgroundColor="#e5448c";
    inicio.style.borderColor="#e5448c";
})
```

