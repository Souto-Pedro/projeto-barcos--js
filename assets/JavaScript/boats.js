const spin =document.getElementById('spin')
setTimeout(()=>{
    spin.style.display="none"
}, 2000)


const boats = {
    Oceanis: {
        id: 01,
        nome: "Oceanis 51",
        valor: "Diaria de 6 horas: R$3000,00 ",
        img: src="../assets/img/oceanis.webp",
        descricao: "O Oceanis 51.1 é espaçoso, elegante, inteligentemente projetado, veloz e revisa de forma virtuosa o conceito de barco de cruzeiro. Com suas linhas precisas, um novo casco quinado e um plano de convés com estilo, o Oceanis 51.1 é o primeiro da sua geração. Um terço do comprimento do casco conta agora com uma quina no costado. Além do impacto na estética e no equilíbrio das linhas, este novo casco permite um aumento do volume interior, permitindo novas opções de arranjo para um barco deste tamanho.Enfatizando a precisão de suas linhas de cruzeiro, o casco é pura alegria em movimento além de valorizar a segurança. O cockpit espaçoso, com diversas áreas de banho de sol assim como uma plataforma de popa, oferece um conforto verdadeiro."
    },
    Atrevida: {
        id: 02,
        nome: "Atrevida",
        valor: "Diaria de 6 horas: R$2200,00 ",
        img: src="../assets/img/atrevida.jpg",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget libero luctus, scelerisque enim sed, laoreet tellus. Proin quis ligula sit amet ex tincidunt laoreet in non risus. Nam vitae sollicitudin velit. Sed et leo lectus. Phasellus tempor convallis mauris, a tempor mauris accumsan sed. Donec a eleifend eros, sit amet finibus leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu porttitor diam, eget dapibus sem. Vivamus sed semper tortor. Aliquam aliquam et turpis et accumsan."
    },
    Paratti: {
        id: 03,
        nome: "Paratii 2",
        valor: "Diaria de 6 horas: R$3200,00 ",
        img: src="./assets/img/paratii-2.jpg",
        descricao: "O Paratti 2 é espaçoso, elegante, inteligentemente projetado, veloz e revisa de forma virtuosa o conceito de barco de cruzeiro. Com suas linhas precisas, um novo casco quinado e um plano de convés com estilo, o Oceanis 51.1 é o primeiro da sua geração. Um terço do comprimento do casco conta agora com uma quina no costado. Além do impacto na estética e no equilíbrio das linhas, este novo casco permite um aumento do volume interior, permitindo novas opções de arranjo para um barco deste tamanho.Enfatizando a precisão de suas linhas de cruzeiro, o casco é pura alegria em movimento além de valorizar a segurança. O cockpit espaçoso, com diversas áreas de banho de sol assim como uma plataforma de popa, oferece um conforto verdadeiro."
    },
    Catamaram: {
        id: 04,
        nome: "Catamaran grande",
        valor: "Diaria de 6 horas: R$4500,00 ",
        img: src="./assets/img/cat.jpg",
        descricao: "Proin faucibus bibendum purus. Curabitur mattis eu nisl ut iaculis. Integer sed arcu accumsan, sollicitudin risus ut, ullamcorper neque. Donec ac enim quis tellus ultrices aliquam non vitae turpis. Cras id est vel eros commodo imperdiet nec nec erat. Sed vehicula vel dui cursus egestas. Vivamus ac lobortis nulla, vitae pretium orci. Donec in turpis quis quam imperdiet dictum sed eget tellus. Morbi rutrum scelerisque eros, sit amet venenatis magna ultrices sit amet. Vivamus in nisi eu massa vestibulum ornare. Vivamus imperdiet convallis purus et ultrices. Fusce vel maximus magna. Aliquam sed sagittis ligula."
    },
    CatamaramII: {
        id: 05,
        nome: "Catamaram 2",
        valor: "Diaria de 6 horas: R$2300,00 ",
        img: src="./assets/img/cata.jpg",
        descricao: "Proin egestas, urna eget luctus gravida, diam sapien porttitor lorem, quis vestibulum nibh diam non est. Phasellus pretium, sem a faucibus commodo, felis est feugiat nulla, eget facilisis lectus libero eget felis. Donec sed purus sed purus pretium dapibus. Praesent ac facilisis purus, eu sodales mauris. Aliquam pulvinar odio sed gravida tincidunt. Proin semper consequat ligula, sit amet pretium purus malesuada quis. Maecenas non purus ullamcorper, congue dui id, pellentesque augue. Sed a eros elementum, fringilla erat sed, porta ligula. Aliquam erat volutpat."
    },
    Barco6: {
        id: 06,
        nome: "Beneteau oceanis 60",
        valor: "Diaria de 6 horas: R$4100,00 ",
        img: src="./assets/img/7601348_20200924104440403_1_XLARGE.jpg",
        descricao: "Pellentesque finibus et erat et iaculis. Nam tellus quam, fringilla at porta varius, convallis sit amet augue. Cras rutrum tellus ac risus ornare, a fringilla purus fringilla. Cras venenatis iaculis facilisis. Nulla tempor ut libero sit amet vulputate. Integer at leo at arcu semper iaculis et sed risus. Ut laoreet felis eros, a rhoncus elit semper volutpat. Cras sollicitudin dui nunc, id luctus dui commodo sit amet. Quisque arcu lacus, rhoncus nec augue vel, hendrerit accumsan massa. Aenean accumsan est lorem, nec mattis enim iaculis et. Etiam ac tortor felis. Suspendisse ullamcorper, arcu non scelerisque aliquam, leo leo lacinia sapien, et lacinia nisl lorem ac ligula. Mauris consectetur felis eu ullamcorper interdum. Curabitur vitae mauris augue. Suspendisse pulvinar metus ac egestas tempor."
    },
    Barco7: {
        id: 07,
        nome: "Bruce Roberts45",
        valor: "Diaria de 6 horas: R$2500,00 ",
        img: src="./assets/img/20220716_151101.jpg",
        descricao: "Proin egestas, urna eget luctus gravida, diam sapien porttitor lorem, quis vestibulum nibh diam non est. Phasellus pretium, sem a faucibus commodo, felis est feugiat nulla, eget facilisis lectus libero eget felis. Donec sed purus sed purus pretium dapibus. Praesent ac facilisis purus, eu sodales mauris. Aliquam pulvinar odio sed gravida tincidunt. Proin semper consequat ligula, sit amet pretium purus malesuada quis. Maecenas non purus ullamcorper, congue dui id, pellentesque augue. Sed a eros elementum, fringilla erat sed, porta ligula. Aliquam erat volutpat."
    },
    barco8: {
        id: 08,
        nome: "Petterson 33",
        valor: "Diaria de 6 horas: R$1600,00 ",
        img: src="./assets/img/20210801-KAM_9346.jpg",
        descricao: "Nullam id posuere nisi. Mauris non orci ac velit dapibus iaculis. Vivamus quis tempus lorem. Etiam faucibus diam eu elementum aliquet. Duis sit amet dui hendrerit, feugiat urna eu, feugiat ipsum. Maecenas fermentum risus orci, at volutpat odio tincidunt et. Donec laoreet rhoncus neque, finibus porta ligula feugiat et. Vestibulum vitae quam felis. Phasellus ut posuere elit. Vestibulum a lorem sollicitudin, tincidunt enim ut, auctor justo."
    },
    Barco9: {
        id: 09,
        nome: "Cisne Branco",
        valor: "Diaria de 6 horas: R$5000,00 ",
        img: src="./assets/img/cisneBranco.jpg",
        descricao: "Sed tincidunt libero ornare, condimentum elit id, hendrerit odio. Quisque semper libero vel leo mollis porta. Aenean cursus commodo nisi at imperdiet. Sed tempor leo non lorem pharetra, id congue lacus ultrices. Nulla non lorem dolor. Phasellus in porta massa. Nulla sit amet neque dictum metus consectetur volutpat eget accumsan felis. Sed tincidunt nisi vel velit eleifend finibus. Ut sed faucibus urna, nec varius tortor."
    },


}
const carousel = document.getElementById("carrosel")


for (const barcos of Object.keys(boats)) {

   

    const div = document.createElement('div')
    div.innerHTML = `<img src="${boats[barcos].img}" class="barcos" id="${barcos}" onClick="modal(${barcos})" data-bs-toggle="modal" data-bs-target="#exampleModal" ><h3>${boats[barcos].nome}</h3>`

carousel.appendChild(div)


  
}
const modalNameElement =document.getElementById('exampleModalLabel')


const modalBodyElement =document.getElementById('modal-body')

function modal(barcos){

    const obj = boats[barcos.id]
    modalNameElement.innerHTML=""
    modalBodyElement.innerHTML =`<div class="placeholder"></div>
    <div class="placeholder"></div>`
    

    setTimeout(()=>{

        modalBodyElement.innerHTML = `<img width="100%" src="${obj.img}"
        <br><br>
        <h5>${obj.valor}</h5>
        <br><br>
        <p>${obj.descricao}</p>
        `
        modalNameElement.innerHTML = `<h5>${obj.nome}</h5>`

    }, 1500);
 
     }






$('#carrosel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } 
    ]
  });

  var currentTime = new Date().getHours();
if (6 <= currentTime && currentTime < 12) {

    document.body.style.backgroundColor = "white";

}else if (12 <= currentTime && currentTime < 18) {

    document.body.style.backgroundColor = "smokewhite";

}else {

    document.body.style.backgroundColor = "#dcf5f5";

}