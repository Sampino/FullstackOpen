
const Filter = ({ label, filter, onChangeFilter }) => {
  return (
    <>
      {label} <input
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </>
  )
}

export default Filter 