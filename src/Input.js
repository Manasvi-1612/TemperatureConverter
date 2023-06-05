import React, { useState } from 'react'

import "bootstrap/dist/css/bootstrap.css";
import Result from './Result';



export default function Input() {

    const [from, setFrom] = new useState("")
    const [to, setTo] = new useState("")
    const [input, setInput] = new useState()
    const [result, setResult] = new useState("")
    const [show, setShow] = new useState(false)

    const handleConvert = (e) => {

        if (from === "Degree Celcius" && to === "Degree Celcius") {
            let Celcius = Number.parseFloat(input) * 1
            setResult(Celcius.toFixed(2) + ` °C`)
        }

        else if (from === "Degree Celcius" && to === "Fahrenheit") {
            let Fahrenheit = Number.parseFloat(input) * (9 / 5) + 32
            setResult(Fahrenheit.toFixed(2) + " F")
        }

        else if (from === "Degree Celcius" && to === "Kelvin") {
            let Kelvin = Number.parseFloat(input) + 273.15
            setResult(Kelvin.toFixed(2) + " K")
        }

        else if (from === "Fahrenheit" && to === "Degree Celcius") {
            let Celcius = Number.parseFloat(input) - 32 * (5 / 9)
            setResult(Celcius.toFixed(2) + ` °C`)
        }

        else if (from === "Fahrenheit" && to === "Fahrenheit") {
            let Fahrenheit = Number.parseFloat(input) * 1
            setResult(Fahrenheit.toFixed(2) + " F")
        }

        else if (from === "Fahrenheit" && to === "Kelvin") {
            let Kelvin = Number.parseFloat(input) - 32 * (5 / 9) + 273.15
            setResult(Kelvin.toFixed(2) + " K")
        }

        else if (from === "Kelvin" && to === "Degree Celcius") {
            let Celcius = Number.parseFloat(input) - 273.15
            setResult(Celcius.toFixed(2) + ` °C`)
        }

        else if (from === "Kelvin" && to === "Fahrenheit") {
            let Fahrenheit = Number.parseFloat(input) - 273.15 * (9 / 5) + 32
            setResult(Fahrenheit.toFixed(2) + " F")
        }

        else if (from === "Kelvin" && to === "Kelvin") {
            let Kelvin = Number.parseFloat(input) * 1
            setResult(Kelvin.toFixed(2) + " K")
        }
        showResult(e);

    }



    const showResult = (e) => {

        if (!input || !from || !to) {

        } else {
            setShow(true)
            e.preventDefault()
            console.log(result)
        }
    }



    return (

        <>

            <Result result={result} setShow={setShow} show={show} />

            <div className="position-absolute top-50 start-50 translate-middle">

                    <div className="mb-5 d-flex text-center mx-5">

                    <img src="images/icons8-temperature-low-windows-11-32.png" alt="" />
                     <p className="h1 mx-3" >
                        Temperature Converter
                    </p>
                   
                    </div>
        
                <div className='w-65 p-3 text-light bg-dark center' >

                    <form className="row g-3">
                        <div className="col-md-10">
                            <label for="validationDefault01" className="form-label">Enter</label>
                            <input type="number" value={input} onChange={(e) => setInput(e.target.value)} className="form-control" id="validationDefault01" required />
                        </div>

                        <div className="row">

                            <div className="col-md-5">
                                <label for="validationDefault04" className="form-label">From</label>
                                <select className="form-select" value={from} onChange={(e) => setFrom(e.target.value)} id="validationDefault04 from" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option value="Degree Celcius">Degree Celcius</option>
                                    <option value="Fahrenheit">Fahrenheit</option>
                                    <option value="Kelvin">Kelvin</option>
                                </select>
                            </div>

                            <div className="col-md-5">
                                <label for="validationDefault04" className="form-label">To</label>
                                <select className="form-select" value={to} onChange={(e) => setTo(e.target.value)} id="validationDefault04 to" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option value="Degree Celcius">Degree Celcius</option>
                                    <option value="Fahrenheit">Fahrenheit</option>
                                    <option value="Kelvin">Kelvin</option>
                                </select>
                            </div>

                        </div>


                        <div className="col-12">
                            <button className="btn bg-info" type="submit" onClick={(e) => handleConvert(e)}>Convert</button>
                        </div>


                    </form>
                </div>
            </div>

        </>
    )
}
