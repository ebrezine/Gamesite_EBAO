import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RPS';
  games:number = 0;
  pWins:number = 0;
  cWins:number = 0;
  win:string = "vs";
  pChoice:String="";
  cChoice:String="";
  cDisplay:String = "Waiting for selection..."

game(choice:number){
  if(choice === 0){
    this.pChoice = "Rock";
  } else if(choice === 1){
    this.pChoice = "Paper";
  } else{
    this.pChoice = "Scissors";
  }
  const ai = Math.floor(Math.random()*3);
  console.log(choice);
  console.log(ai);
  this.games++;

  if(ai === 0){
    this.cChoice = "Rock";
    this.cDisplay = "https://www.shutterstock.com/image-vector/hand-fist-kid-cartoon-image-260nw-650539312.jpg";
  } else if(ai === 1){
    this.cChoice = "Paper";
    this.cDisplay ="https://www.seekpng.com/png/detail/93-939782_hand-silhouette-raised-hand-cartoon.png";
  } else{
    this.cChoice = "Scissors";
    this.cDisplay = "https://png.pngitem.com/pimgs/s/226-2260597_scissors-icon-hand-scissors-png-transparent-png.png";
  }
  // Rock
  if(ai == choice){
    this.win = "Draw";
  } 
  else{
    if(ai===0){
      if(choice === 1){
        this.pWins++;
        this.win="Victory!";
      } else{
        this.cWins++;
        this.win= "Defeat!";
      }
    }
    //paper
    else if(ai===1){
      if(choice === 0){
        this.cWins++;
        this.win= "Defeat!";
      } else{
        this.pWins++;
        this.win= "Victory!";
      }
    }
    //scissors
    else {
      if(choice === 0){
        this.pWins++;
        this.win= "Victory!";
      } else{
        this.cWins++;
        this.win= "Defeat!";
      }
    }
  }
  
}

reset(){
  this.games = 0;
  this.cChoice = "";
  this.pChoice = "";
  this.cWins = 0;
  this.pWins=0;
  this.cDisplay = "Waiting for selection...";
  this.win="vs";
}

}
