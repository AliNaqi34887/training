import "./App.css";
import React from "react";
const defautColor = 'Red'

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state={color: props.color}
  }

  render() {
    return (
      <div className={`box ${this.props.color}`}></div>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section1:{color: defautColor},
      section2:{color: defautColor},
      section3:{color: defautColor},
      drawing:{
        section1: {
          count:0,
          color: defautColor
        },
        section2: {
          count:0,
          color: defautColor
        },
        section3: {
          count:0,
          color: defautColor
        }
      }
    }
  }
  setInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  setSectionCount(section, count) {
    this.setState((state, props) => {
      let _section={};
      _section[section]=state[section]
      _section[section].count=count;
      return _section;
    })
  }

  setSectionColor(section, color) {
    this.setState((state, props) => {
      let _section={};
      _section[section]=state[section]
      _section[section].color=color;
      return _section;
    })
  }
  
  draw() {
    console.log(`Drawing ${JSON.stringify(this.state.drawing)}`)
    this.setState((state, props) => ({
      drawing: {
        section1: {
          count: state.section1.count,
          color: state.section1.color
        },
        section2: {
          count: state.section2.count,
          color: state.section2.color
        },
        section3: {
          count: state.section3.count,
          color: state.section3.color
        }
      }
    }))
  }

  drawing() {

    const section1 = []
    const section2 = []
    const section3 = []

    for(let i = 0; i < this.state.drawing.section1.count; i++) {
      section1.push(<Box color={this.state.drawing.section1.color} key={`section1${i}`}></Box>)
    }

    for(let i = 0; i < this.state.drawing.section2.count; i++) {
      section2.push(<Box color={this.state.drawing.section2.color} key={`section2${i}`}></Box>)
    }
    
    for(let i = 0; i < this.state.drawing.section3.count; i++) {
      section3.push(<Box color={this.state.drawing.section3.color} key={`section3${i}`}></Box>)
    }
    
    return (
      <div className="drawing">
        <div className="section1">{section1}</div>
        <div className="section2">{section2}</div>
        <div className="section3">{section3}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <section className="input-section">
          <div id="section-input-1">
            <input type="text" name="box-1-count" onChange={e => this.setSectionCount('section1', e.target.value)}/>
            <select name="box-1-color" onChange={e => this.setSectionColor('section1', e.target.value)}>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Orange</option>
              <option>Purple</option>
            </select>
          </div>
          <div id="section-input-2">
            <input type="text" name="box-3-count" onChange={e => this.setSectionCount('section2', e.target.value)}/>
            <select name="box-2-color" onChange={e => this.setSectionColor('section2', e.target.value)}>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Orange</option>
              <option>Purple</option>
            </select>
          </div>
          <div id="section-input-3">
            <input type="text" name="box-4-count" onChange={e => this.setSectionCount('section3', e.target.value)} />
            <select name="box-3-color" onChange={e => this.setSectionColor('section3', e.target.value)}>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Orange</option>
              <option>Purple</option>
            </select>
          </div>          
        </section>
        <div className="go-button">
        <button style={{width: 200}} onClick={e => this.draw()}>Go</button>
        </div>
        {this.drawing()}
      </div>
    );
  }
}

export default App;
