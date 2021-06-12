import Loader from 'react-loader-spinner'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}

export const Spinner: React.FC = () => {
  return (
    <div style={style}>
      <Loader type="TailSpin" color="#0ec261" height={50} width={50} />
    </div>
  )
}
