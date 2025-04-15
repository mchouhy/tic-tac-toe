/* eslint-disable react/react-in-jsx-scope */
import "./App.css";

function App() {
  const board = Array(9).fill(null);
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <main className="App">
        <div className="board">
          {board.map((_, index) => (
            <div key={index} className="cell">
              {index}
            </div>
          ))}
        </div>
        <button className="reset-button">Reset</button>
        <div className="status">Next player: X</div>
      </main>
    </>
  );
}

export default App;
