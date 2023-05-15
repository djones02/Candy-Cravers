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

  // function candyMap() {
  //   if(occasion === "all"){
  //     candies.map((candy) => )
  //   }
  // }
  

  



  return (
    <div>
      {/* {candyMap} */}
    </div>
  )
}

export default Candy