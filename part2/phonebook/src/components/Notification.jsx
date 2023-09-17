

const Notification = ({ errorMessage, confirmMessage }) => {
  if (errorMessage === null && confirmMessage === null) {
    return null;
  }

  return (
    <div className={errorMessage !== null ? 'error' : 'confirm'}>
      {errorMessage}{confirmMessage}
    </div>
  )
}

export default Notification