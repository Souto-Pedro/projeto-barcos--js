// const carouselCatalogoItems = document.getElementById('carouselCatalogoItems');
// const modalCatalogos = new bootstrap.Modal('#modalCatalogos', {})



const boats = {
    Oceanis: {
        id: 01,
        nome: "Oceanis 51",
        Valor: "Diaria de 6 horas: R$3000,00 ",
        img: src="../assets/img/oceanis.webp",
        descricao: "O Oceanis 51.1 é espaçoso, elegante, inteligentemente projetado, veloz e revisa de forma virtuosa o conceito de barco de cruzeiro. Com suas linhas precisas, um novo casco quinado e um plano de convés com estilo, o Oceanis 51.1 é o primeiro da sua geração. Um terço do comprimento do casco conta agora com uma quina no costado. Além do impacto na estética e no equilíbrio das linhas, este novo casco permite um aumento do volume interior, permitindo novas opções de arranjo para um barco deste tamanho.Enfatizando a precisão de suas linhas de cruzeiro, o casco é pura alegria em movimento além de valorizar a segurança. O cockpit espaçoso, com diversas áreas de banho de sol assim como uma plataforma de popa, oferece um conforto verdadeiro."
    },
    Atrevida: {
        id: 02,
        nome: "Atrevida",
        Valor: "Diaria de 6 horas: R$2200,00 ",
        img: src="../assets/img/atrevida.jpg",
        descricao: "Atrevida é um veleiro elegante e classico feito no Brasil pelo veljador Jaba the hunt, Su"
    },
    Paratti: {
        id: 03,
        nome: "Paratii 2",
        Valor: "Diaria de 6 horas: R$3200,00 ",
        img: src="./assets/img/paratii-2.jpg",
        descricao: "O Paratti 2 é espaçoso, elegante, inteligentemente projetado, veloz e revisa de forma virtuosa o conceito de barco de cruzeiro. Com suas linhas precisas, um novo casco quinado e um plano de convés com estilo, o Oceanis 51.1 é o primeiro da sua geração. Um terço do comprimento do casco conta agora com uma quina no costado. Além do impacto na estética e no equilíbrio das linhas, este novo casco permite um aumento do volume interior, permitindo novas opções de arranjo para um barco deste tamanho.Enfatizando a precisão de suas linhas de cruzeiro, o casco é pura alegria em movimento além de valorizar a segurança. O cockpit espaçoso, com diversas áreas de banho de sol assim como uma plataforma de popa, oferece um conforto verdadeiro."
    },
    Catamaram: {
        id: 04,
        nome: "Catamaran grande",
        Valor: "Diaria de 6 horas: R$4500,00 ",
        img: src="./assets/img/cat.jpg",
        descricao: "O Oceanis 51.1 é espaçoso, elegante, inteligentemente projetado, veloz e revisa de forma virtuosa o conceito de barco de cruzeiro. Com suas linhas precisas, um novo casco quinado e um plano de convés com estilo, o Oceanis 51.1 é o primeiro da sua geração. Um terço do comprimento do casco conta agora com uma quina no costado. Além do impacto na estética e no equilíbrio das linhas, este novo casco permite um aumento do volume interior, permitindo novas opções de arranjo para um barco deste tamanho.Enfatizando a precisão de suas linhas de cruzeiro, o casco é pura alegria em movimento além de valorizar a segurança. O cockpit espaçoso, com diversas áreas de banho de sol assim como uma plataforma de popa, oferece um conforto verdadeiro."
    },
    CatamaramII: {
        id: 05,
        nome: "Catamaram 2",
        Valor: "Diaria de 6 horas: R$2300,00 ",
        img: src="./assets/img/cata.jpg",
        descricao: "O Oceanis 51.1 é espaçoso, elegante, inteligentemente projetado, veloz e revisa de forma virtuosa o conceito de barco de cruzeiro. Com suas linhas precisas, um novo casco quinado e um plano de convés com estilo, o Oceanis 51.1 é o primeiro da sua geração. Um terço do comprimento do casco conta agora com uma quina no costado. Além do impacto na estética e no equilíbrio das linhas, este novo casco permite um aumento do volume interior, permitindo novas opções de arranjo para um barco deste tamanho.Enfatizando a precisão de suas linhas de cruzeiro, o casco é pura alegria em movimento além de valorizar a segurança. O cockpit espaçoso, com diversas áreas de banho de sol assim como uma plataforma de popa, oferece um conforto verdadeiro."
    },
    Barco6: {
        id: 06,
        nome: "Oceanis 51",
        Valor: "Diaria de 6 horas: R$4100,00 ",
        img: src="./assets/img/oceanis.webp",
        descricao: "O Oceanis 51.1 é espaçoso, elegante, inteligentemente projetado, veloz e revisa de forma virtuosa o conceito de barco de cruzeiro. Com suas linhas precisas, um novo casco quinado e um plano de convés com estilo, o Oceanis 51.1 é o primeiro da sua geração. Um terço do comprimento do casco conta agora com uma quina no costado. Além do impacto na estética e no equilíbrio das linhas, este novo casco permite um aumento do volume interior, permitindo novas opções de arranjo para um barco deste tamanho.Enfatizando a precisão de suas linhas de cruzeiro, o casco é pura alegria em movimento além de valorizar a segurança. O cockpit espaçoso, com diversas áreas de banho de sol assim como uma plataforma de popa, oferece um conforto verdadeiro."
    },
    Barco7: {
        id: 07,
        nome: "Bruce Roberts45",
        Valor: "Diaria de 6 horas: R$2500,00 ",
        img: src="./assets/img/20220716_151101.jpg",
        descricao: "O Oceanis 51.1 é espaçoso, elegante, inteligentemente projetado, veloz e revisa de forma virtuosa o conceito de barco de cruzeiro. Com suas linhas precisas, um novo casco quinado e um plano de convés com estilo, o Oceanis 51.1 é o primeiro da sua geração. Um terço do comprimento do casco conta agora com uma quina no costado. Além do impacto na estética e no equilíbrio das linhas, este novo casco permite um aumento do volume interior, permitindo novas opções de arranjo para um barco deste tamanho.Enfatizando a precisão de suas linhas de cruzeiro, o casco é pura alegria em movimento além de valorizar a segurança. O cockpit espaçoso, com diversas áreas de banho de sol assim como uma plataforma de popa, oferece um conforto verdadeiro."
    },
    barco8: {
        id: 08,
        nome: "Oceanis 51",
        Valor: "Diaria de 6 horas: R$3100,00 ",
        img: src="./assets/img/oceanis.webp",
        descricao: "O Oceanis 51.1 é espaçoso, elegante, inteligentemente projetado, veloz e revisa de forma virtuosa o conceito de barco de cruzeiro. Com suas linhas precisas, um novo casco quinado e um plano de convés com estilo, o Oceanis 51.1 é o primeiro da sua geração. Um terço do comprimento do casco conta agora com uma quina no costado. Além do impacto na estética e no equilíbrio das linhas, este novo casco permite um aumento do volume interior, permitindo novas opções de arranjo para um barco deste tamanho.Enfatizando a precisão de suas linhas de cruzeiro, o casco é pura alegria em movimento além de valorizar a segurança. O cockpit espaçoso, com diversas áreas de banho de sol assim como uma plataforma de popa, oferece um conforto verdadeiro."
    },
    Barco9: {
        id: 09,
        nome: "Oceanis 51",
        Valor: "Diaria de 6 horas: R$5000,00 ",
        img: src="./assets/img/oceanis.webp",
        descricao: "O Oceanis 51.1 é espaçoso, elegante, inteligentemente projetado, veloz e revisa de forma virtuosa o conceito de barco de cruzeiro. Com suas linhas precisas, um novo casco quinado e um plano de convés com estilo, o Oceanis 51.1 é o primeiro da sua geração. Um terço do comprimento do casco conta agora com uma quina no costado. Além do impacto na estética e no equilíbrio das linhas, este novo casco permite um aumento do volume interior, permitindo novas opções de arranjo para um barco deste tamanho.Enfatizando a precisão de suas linhas de cruzeiro, o casco é pura alegria em movimento além de valorizar a segurança. O cockpit espaçoso, com diversas áreas de banho de sol assim como uma plataforma de popa, oferece um conforto verdadeiro."
    },


}
const carousel = document.getElementById("carrosel")


for (const barcos of Object.keys(boats)) {

   

    const div = document.createElement('div')
    div.innerHTML = `<img src="${boats[barcos].img}" class="barcos" ><h3>${boats[barcos].nome}</h3>`



carousel.appendChild(div)
    
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });