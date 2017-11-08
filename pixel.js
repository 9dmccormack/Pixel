function Pixel (r, g, b) {

  this.Red = r;
  this.Green = g;
  this.Blue = b;

  let rgb = [];

  this.AddRed = function(n){
    this.Red = this.Red + n;

    if (this.Red < 0){
        this.Red = 0;
    }

    if (this.Red > 255){
        this.Red = 255;
    }
};

  this.AddGreen = function(n){
    this.Green = this.Green + n;

    if (this.Green < 0){
        this.Green = 0;
    }

    if (this.Green > 255){
         this.Green = 255;
    }
};

  this.AddBlue = function(n){
    this.Blue = this.Blue + b;

    if (this.Blue < 0){
        this.Blue = 0;
    }

    if (this.Blue > 255){
        this.Blue = 255;
    }
};

  this.Brightness = function(n){
     this.Red = this.Red + (this.Red * n);
     this.Green = this.Green + (this.Green * n);
     this.Blue = this.Blue + (this.Blue * n);
 };

  this.GrayScale = function(){
      return (this.Red + this.Green + this.Blue) / 3;
  };

  this.Complement = function(){
      let ComplementPixel = new Pixel(255 - this.Red, 255 - this.Green, 255 - this.Blue);
      return ComplementPixel;
  };
}

function main(){
    let NewThing = new Pixel(50, 100, 150);

    console.log(NewThing.complement().Red);

}

main();
