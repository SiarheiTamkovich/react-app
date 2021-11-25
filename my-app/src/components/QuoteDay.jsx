import React from 'react';


const quote = {
  text: `Unable are the loved to die, for love is immortality.`,
  textRu:`"Любимые не могут умереть, потому что любовь - бессмертие."`,
  author: `Emily Dickinson`,
}


export class QuoteDay extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.vewQuote = this.vewQuote.bind(this);
  }

  render(){
//    console.log(this.state)
    return (
      <div>
          <button onClick={(e) => this.vewQuote()}>
            {this.state.isToggleOn ? 'Show quote' : 'Hide quote'}
          </button>
          <div style={this.state.isToggleOn ? {display: "none"} : {display: "block"}}>
            <h3>Quote of the Day:</h3>
            &nbsp;
            <div>{this.props.data.text}</div>
            <div>{this.props.data.textRu}</div>
            <div><strong>{this.props.data.author}</strong></div>
          </div>
      </div>
    )
  }

  vewQuote(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
//    console.log(this.state)
  }
}



