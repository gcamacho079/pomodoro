const SessionController = () => {
  return (
    <div>
      <label id="session-label">Session Length</label>
      <input type="number" id="session-length" value="25"/>
      <button id="session-decrement">-</button>
      <button id="session-increment">+</button>
    </div>
  )
};

export default SessionController;
