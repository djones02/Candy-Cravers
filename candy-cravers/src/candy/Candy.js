import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CandyItem from './CandyItem.js'

function Candy() {
  const {occasion} = useParams()
  const [candies, setCandies] = useState([])
  console.log(occasion)

  useEffect(() => {
    fetch('http://localhost:4000/candies')
      .then(res => res.json())
      .then((data) => setCandies(data))
  }, [])
  
  function candyChoice() {
    if (occasion === "all") {
      return candies.map(candy => {
        return <CandyItem 
          candy={candy}
          key={candy.id}
        />
      })
    } else if (occasion === "easter") {
      return candies.filter(candy => {
        return candy.occasion === occasion
      }).map(candy => {
        return <CandyItem 
          candy={candy}
          key={candy.id}
        />
      })
    } else if (occasion === "halloween") {
      return candies.filter(candy => {
        return candy.occasion === occasion
      }).map(candy => {
        return <CandyItem 
          candy={candy}
          key={candy.id}
        />
      })
    }
  }

  return (
    <ul>
      {candyChoice()}
    </ul>
  )
}

export default Candy