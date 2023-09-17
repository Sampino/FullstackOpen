
const Filter = ({ label, value, onChange }) => {

  return (
    <>
      {label}
      <input type='text' value={value}
        onChange={onChange} />
    </>
  )
}

export default Filter;