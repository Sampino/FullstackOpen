
const PersonForm = ({ newName, onChangeName, newNumber, onChangeNumber, onSubmit }) => {

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          name: <input type='text' value={newName} onInput={onChangeName} /><br />
          number: <input type='number' value={newNumber} onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm