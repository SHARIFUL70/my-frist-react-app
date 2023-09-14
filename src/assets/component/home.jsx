import { useState } from "react"
import { useEffect } from "react"
import Card from "./card";


export default function Home() {
    const [alldata, setdata] = useState([]);
    const [actordata, seteactor] = useState([])
    const [total, settotalcost] = useState(0)
    const [remain, setremain] = useState(0);
    useEffect(() => {
        fetch('packg.json')
            .then(res => res.json())
            .then(data => setdata(data))
    }, [])
    // console.log(alldata)

    const handle = (actor) => {

        let cost = actor.salary;
        const actors = actordata.find(arc => arc.id == actor.id)
        if (actors) {
            alert('alredy booked')
        }
        else {

            actordata.forEach(item => {
                cost = cost + item.salary
            })

          if(cost>20000){
            alert('taka nai')
          }
          else{
            const remain = 20000 - cost;
            setremain(remain)
            settotalcost(cost);
            seteactor([...actordata, actor])
          }
           
        }

    }



    return (
        <div className=" flex flex-col md:flex-row gap-5 max-w-7xl mt-5  mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[1000px]">
                {alldata.map(actor =>
                    <div key={actor.id} className="   border shadow-lg bg-lime-200 px-3 py-3 text-center rounded-md">
                        <img className="block m-auto rounded-full" src={actor.image}></img>
                        <h2 className="text-center text-2xl font-medium ">{actor.name}</h2>
                        <h2 className="font-medium mt-4">Catagory: {actor.role} </h2>
                        <p className="mt-2 font-medium">age: {actor.age} </p>
                        <p className="font-medium mt-2">Country: {actor.country} </p>
                        <p className="font-medium mt-2">Sallary: {actor.salary} </p>
                        <button onClick={() => handle(actor)} className="bg-yellow-300  py-2 px-8 m-auto block mt-3 font-medium">select</button>
                    </div>


                )}

            </div>
            <div className=" w-56 bg-slate-200 h-64 ">
                <Card actordata={actordata} total={total} remain={remain}></Card>
            </div>
        </div>
    )
}