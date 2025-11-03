import React, { useEffect, useState } from 'react'

function AssessmentHooks() {
    const [count, setCount] = useState("");
    const [number1, setNumber] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const [timing, setTiming] = useState()

    const handleCounterButton = () => {

        const num = parseInt(count)
        if (!isNaN(num) && num > 0) {
            setNumber(num);
            setIsRunning(true);
        } else {
            alert("enter only positive number values")
        }
    }

    useEffect(() => {


        let interval;

        if (isRunning) {


            interval = setInterval(() => {
                setNumber((prevCount) => {
                    if (prevCount <= 1) {
                        setIsRunning(false);
                        clearInterval(interval)
                        return 0;
                    }
                    return prevCount - 1;
                });
            }, 1000);

            setTiming(interval)
        }



        return () => clearInterval(interval);
    }, [number1])

    function handlePauseButton() {

        clearInterval(timing);

    }

    function handleRedButton() {

        setCount(0)
        setNumber(0)

    }

    return (
        < >
            <div className='flex flex-col items-center justify-center gap-5'>
                <input
                    type="number"
                    placeholder='Enter the Number'
                    value={count}
                    onChange={(event) => setCount(event.target.value)}
                    className='bg-white p-5'
                />
                <button onClick={handleCounterButton} className='bg-pink-300 rounded-3xl text-amber-100 p-3 w-[180px]'>
                    Start Counter
                </button>

                <button onClick={handlePauseButton} className='bg-green-300 rounded-3xl text-amber-100 p-3 w-[180px]'>
                    Pause
                </button>

                <button onClick={handleRedButton} className='bg-red-500 rounded-3xl text-amber-100 p-3 w-[180px]'>
                    Red
                </button>

                <p>Counter: {number1}</p>
            </div>
        </>
    )
}

export default AssessmentHooks