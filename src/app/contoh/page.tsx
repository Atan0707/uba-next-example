'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { SplineScene } from '@/components/ui/splite'

const Contoh = () => {
    let contoh = 0;
    const [contohReact, setContohReact] = React.useState(0);

    function tambahContoh() {
        contoh++;
        console.log(contoh);
    }



    function reactContoh() {
        setContohReact(contohReact + 1);
        console.log(contohReact);
    }

  return (
    <div>
        
        <button className='border p-2' onClick={tambahContoh}>Contoh Javascript biasa</button>
        <Button onClick={tambahContoh}>Contoh Javascript biasa</Button>
        <p>{contoh}</p>
        <button className='border p-2' onClick={reactContoh}>Contoh React</button>
        <p>{contohReact}</p>
        <SplineScene scene="scene" className="w-full h-96" />
    </div>
  )
}

export default Contoh

//rafce