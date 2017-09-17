import {Component} from "@angular/core";
@Component({
  selector: 'joke-list',
  template: `
  <joke-form (jokeCreated)="addJoke($event)"></joke-form>
  <joke *ngFor="let j of jokes" [joke]="j"></joke>
   `

})

export class JokeListComponent{

  jokes: Object[];
  constructor() {

    this.jokes = [

      {

        setup: "What did the cheese say when it looked in the mirror?",
        punchline: "Hello-Me (Halloumi)"

      },

      {
        setup: "What kind of cheese do you use to disguise a small horse?",
        punchline: "Mask-a-pony (Mascarpone)"

      },

      {

        setup: "A kid threw a lump of cheddar at me",
        punchline: "I thought ‘That’s not very mature’"

      },

    ];


  }
  addJoke(joke) {
    //he addJoke function does is add the joke that got output to the front of the jokes array.
    this.jokes.unshift(joke);
  }

 }
