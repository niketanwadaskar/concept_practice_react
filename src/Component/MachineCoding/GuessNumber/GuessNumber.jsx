import React, { useEffect, useState } from 'react'

export default function GuessNumber() {

    const [number, setNumber] = useState()
    const [GNumber, setGNumber] = useState()
    const [feedBack, setFeedBack] = useState("")


    function checkGuess() {
        if (Number(number) < Number(GNumber)) {

            setFeedBack("Number is lower than the expected number")
        }

        else if (Number(number) > Number(GNumber)) {

            setFeedBack("Number is higher than the expected number")
        } else {
            setFeedBack("Congratulation you are correct ")
        }

    }

    function handleChange(e) {
        console.log(e.target.value)
        setNumber(Number(e.target.value))
        setFeedBack('')
    }


    useEffect(() => {
        const radomNumber = Math.random() * 10
        console.log(parseInt(radomNumber))
        setGNumber(parseInt(radomNumber))
    }, [])


    return (
        <div>
            <h1 className='text-[20px] font-medium'> Guess the number between 1 to 10 </h1>
            <input className="border border-black h-[20px] w-[200px]" onChange={(e) => handleChange(e)} />
            <button className='mx-5 bg-gray' onClick={checkGuess}>Guess</button>
            <p className='text green text-[30px]  border-b-4 border-black'>  {feedBack}</p>
            {feedBack.length > 0 && <p className='text green text-[30px]  text-green'>Actual Number is {GNumber} </p>}
        </div>
    )
}