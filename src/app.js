import React from 'react';
import ReactDOM from 'react-DOM';
import IndecisionApp from './components/IndecisionApp';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


class OldSyntax {
  constructor() {
    this.name = 'Mike';
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// ----------------

class NewSyntax {
  name = 'Hen';
}


const newSyntax = new NewSyntax();
console.log(newSyntax);