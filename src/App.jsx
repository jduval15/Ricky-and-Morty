
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import InfoLocation from './components/InfoLocation'
import CardResidents from './components/CardResidents'
import Footer from './components/Footer'
import Banner from './components/Banner'




function App() {
  // => Estado para tener 1 la locacion enviada por el usuario

  const [ locationId, SetLocationId ] = useState(Math.floor(Math.random() * 126) + 1)
  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const [location, getLocation, isLoading, hasError ] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [getLocation])

  const inputLocation = useRef()

  const handleLocation = e => {
    e.preventDefault()
    const value = inputLocation.current.value.trim()
    const numValue = parseInt(value)

    if (value === '' || isNaN(numValue) || numValue < 1 || numValue > 126) {
      SetLocationId('0')
    } else {
      SetLocationId(numValue)
    }
  }

  return (

    <div className='app'> 
      <h1 className='app__title'></h1>
      
      <Banner/>
      <form className='app__form' onSubmit={handleLocation}>
        <input className='app__input' ref={inputLocation} type="text" />
        <button className='app__btn'>Search</button>
      </form>
      {
        isLoading
        ? <h2>Loading...</h2>
        : (
        hasError || locationId === '0'
          ? <h2> Hey! you must provide an id from 1 to 126</h2>
          : (
            <>
              < InfoLocation location = {location} />
              <div className='app__card__container'>
                {
                  location?.residents && location.residents.length > 0 ? (
                    location.residents.map(url => (
                      < CardResidents
                          key={url}
                          url={url}
                      />
                    ))
                  ) : (
                    <h2>This location has no residents</h2>
                  )
                }
                <Footer/>
              </div>
            </>
            )
          )
        }
    </div>  
  )
}

export default App
