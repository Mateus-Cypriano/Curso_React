/* eslint-disable react/prop-types */


const Container = ({children, valor}) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
        <p>{valor}</p>
    </div>
  )
}

export default Container