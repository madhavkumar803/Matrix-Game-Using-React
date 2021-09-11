import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill("blue"),
      limit: 0,
      textCount: 1,
      counter: Array(2).fill(null),
    };
  }

  handleClick(i) {
    const mSquares = this.state.squares.slice();
    const mCount = this.state.counter.slice();
    mSquares[i] = "red";

    mCount[this.state.limit] = i;
    if (this.state.limit < 2) {
      console.log("if" + this.state.limit);

      this.setState({
        squares: mSquares,
        limit: this.state.limit + 1,
        textCount: this.state.textCount + 1,
        counter: mCount,
      });
    } else if (mCount[1] != i && mCount[0] != i) {
      console.log("else" + this.state.limit);

      mSquares[i] = "red";
      mSquares[mCount[0]] = "blue";
      mCount[0] = mCount[1];
      mCount[1] = i;

      this.setState({
        squares: mSquares,
        limit: this.state.limit,
        textCount: this.state.textCount + 1,
        counter: mCount,
      });
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Matrix Game</h1>
        <table>
          <tr>
            <td
              style={{
                backgroundColor: this.state.squares[0],
              }}
              onClick={() => {
                this.handleClick(0);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[1],
              }}
              onClick={() => {
                this.handleClick(1);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[2],
              }}
              onClick={() => {
                this.handleClick(2);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[3],
              }}
              onClick={() => {
                this.handleClick(3);
              }}
            ></td>
          </tr>{" "}
          <tr>
            <td
              style={{
                backgroundColor: this.state.squares[4],
              }}
              onClick={() => {
                this.handleClick(4);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[5],
              }}
              onClick={() => {
                this.handleClick(5);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[6],
              }}
              onClick={() => {
                this.handleClick(6);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[7],
              }}
              onClick={() => {
                this.handleClick(7);
              }}
            ></td>
          </tr>{" "}
          <tr>
            <td
              style={{
                backgroundColor: this.state.squares[8],
              }}
              onClick={() => {
                this.handleClick(8);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[9],
              }}
              onClick={() => {
                this.handleClick(9);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[10],
              }}
              onClick={() => {
                this.handleClick(10);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[11],
              }}
              onClick={() => {
                this.handleClick(11);
              }}
            ></td>
          </tr>{" "}
          <tr>
            <td
              style={{
                backgroundColor: this.state.squares[12],
              }}
              onClick={() => {
                this.handleClick(12);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[13],
              }}
              onClick={() => {
                this.handleClick(13);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[14],
              }}
              onClick={() => {
                this.handleClick(14);
              }}
            ></td>
            <td
              style={{
                backgroundColor: this.state.squares[15],
              }}
              onClick={() => {
                this.handleClick(15);
              }}
            ></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
