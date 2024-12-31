import { useState } from 'react'
import { useGoogleOneTapLogin } from 'react-google-one-tap-login'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
 
  const [googleData,setGoogleData] = useState('')

  useGoogleOneTapLogin({
    onError: error => console.log(error),
    onSuccess: response => setGoogleData(response),
    googleAccountConfigs: {
      client_id: '313333241917-gh4a82i0imi8lmakjqlvipu2lkqdkjdf.apps.googleusercontent.com'
    },
  })

  return (
    <>

     <p>{googleData ? 'You are login as'  : 'You are not login'}  <span className='text-uppercase'>{googleData ? googleData.given_name + " " + googleData.family_name :""}</span></p> 
     
     {googleData ? <button className='btn btn-primary' onClick={() => setGoogleData('')}>Logout</button>:""}
    </>
  )
}
   
export default App;
