export default function Card({ actordata, total,remain }) {
    // console.log(total)
    return (
        <div className="px-4 py-3 rounded-md font-medium">
            <h1 >Total actor: {actordata.length}</h1>
            <h1 className="mt-3">Total Rmn: {remain}</h1>
            
            <h1 className="mt-3 pb-3">Total cost: {total}</h1>
            {actordata.map(arc => <li key={arc.id}>{arc.name}</li>)}

        </div>
    )
}