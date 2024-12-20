import listData from "../../lib/dummydata"
import "./listPage.scss"
import Filter from "../../components/filter/filter"
import Card from "../../components/card/card"

function ListPage(){
const data= listData


    return (
        <div className="listPage">
        <div className="listContainer">
            <div className="wrapper"></div>
            <Filter/> 
            {data.map(item=>(
                <Card key = {item.id} item= {item}/>
            ))}

        </div>

        <div className="mapContainer">Map</div>

            


        </div>
    )
}

export default ListPage