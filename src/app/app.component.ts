import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  password:string = '';
  includeLetter:boolean = false;
  includeChar:boolean = false;
  includeSymbol:boolean = false;
  length:number = 0;
  
  onChangeUseLetter()
  {
  this.includeLetter = !this.includeLetter;
  }
  onChangeUseChar()
  {
  this.includeChar = !this.includeChar;
  }
  onChangeUseSymbol()
  {
  this.includeSymbol = !this.includeSymbol;
  }
  onChangeLength(event: any) {
    // console.log(event.target.value);
    
    const parsedValue = parseInt(event.target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  onButtonClick()
  {
    // هنا هتعرف االchar وغيرها اللي ممكن يكونوا في الpassword 
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if(this.includeLetter)
    {
      validChars += letters;
    } 
    if(this.includeChar)
    {
      validChars += numbers;
    } 
    if(this.includeSymbol)
    {
      validChars += symbols;
    } 
    let generatedPassword = '';
    for(let i =0; i < this.length; i++)
    {
      // get index 
      const index  = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
     
    
  }
}
