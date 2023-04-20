import { ChangeEvent, useEffect, useState } from "react"
import { debug } from "util"

export default function Home() {
  const [data, setData] = useState<string>('init data')

  useEffect(() => {
    // alert("Cat")
    const testDiv: HTMLDivElement | null = document.querySelector('#test')
    const date: string = new Date(Date.now()).toString()
    testDiv!.innerText = date
  }, [data])


  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    setData(event.target.value)
  }

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">

        <div className="text-4xl" id="test"></div>

        <input className='m-24 text-3xl border-4' type="text" value={data} onChange={(event) => handleOnChange(event)}/>
        <div className="h-3/4 flex justify-center items-center tx-xl">Главная</div>
      </div>
    </>
  )
}