class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
      // метод должен создать тег img
      let img = document.createElement("img");
      // вложить в него src картинки (this.imgUrl)
      img.src = this.imgUrl;
      // и записать в this.html
      this.html = img;
      // + дергаем render
    this.render();
      // + странице должен залится фон черным
      document.body.style.backgroundColor = 'black';
    }
    
    render() {
      // метод должен отрисовать изображение (this.html) на странице
        
      // применить фиксированное позиционирование
      this.html.style.position = 'fixed';
      this.html.style.top = this.top + 'px';
      this.html.style.left = this.left +'px';
      this.html.style.width = this.width+ 'px';
      document.body.appendChild(this.html);
      // использовать this.top и this.left для указания позиции
      // использовать this.width для указания ширины
    }
  
    moveUp() {
        this.top = this.top - 20;
        this.render();
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся ВЫШЕ
      // на 20px
      // + дергаем render
    }
    moveDown() {
        this.top = this.top + 20;
        this.render();
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся НИЖЕ
      // на 20px
      // + дергаем render
    }
    moveLeft() {
        this.left = this.left - 20;
        this.render();
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ЛЕВЕЕ
      // на 20px
      // + дергаем render
    }
    moveRight() {
        this.left = this.left + 20;
        this.render();
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ПРАВЕЕ
      // на 20px
      // + дергаем render
    }
  }
  

class Circle {
    constructor(size, color){
        this.size = size;
        this.color = color;
    }

    createElement() {

        return `
        <div style = "
        position: absolute;
        background-color:${this.color};
        border-radius: 50%;
        width: ${this.size}px;
        height: ${this.size}px;
        left: 50px;
        top: 60px;"
        ></div>
        `
        
    }
    render() {
        document.body.innerHTML += this.createElement();
    }

}




  const imgUrl = 'https://bit.ly/2tcDito';
  var mfLogotip = new Logo(imgUrl);
  let newCircle = new Circle(80, 'yellow');
  newCircle.render();
  console.log(mfLogotip);
  
  // запускаем наше микро-приложение
  mfLogotip.init();
  
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();

  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  // something else, чтобы всё работало