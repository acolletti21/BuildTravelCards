import React, {useState, useEffect} from 'react'
import response from '../../response/response'
import Badge from '../Badge'
import Button from '../Button'
import Card from '../Card'
import Dropdown from '../Dropdown'
import './trips.css'

const initialTripsNum = 6
const newTripsNum = 6
const initialNextTripsNum = initialTripsNum + newTripsNum
// const categoryData = ''

function Trips() {
    const trips = response
    const [filterData, setFilterData] = useState('')
    const [shownTrips, setShownTrips] = useState(() => trips.slice(0, initialTripsNum))
    const [nextTripsNum, setNextTripNum] = useState(initialNextTripsNum)
    const [categoryData, setCategoryData] = useState('')

    async function loadMoreTrips() {
        setShownTrips(trips.slice(0, nextTripsNum))
        setNextTripNum(prevLast => prevLast + newTripsNum)
    }

    const showButton = nextTripsNum - newTripsNum < trips.length && filterData === '' && categoryData === ''
    var categoryTitle = ''

    const onTourSearch = e => {
        setFilterData(e.target.value)
    }

    const onTourFilter = e => {
        categoryTitle = document.getElementsByClassName('dd-header-title')[0].innerHTML
        setCategoryData("categoryTitle ? categoryTitle : ''")
    }

    useEffect(() => {
        if (filterData !== '') {
            setShownTrips([...trips])
        } else {
            setShownTrips(trips.slice(0, nextTripsNum - initialTripsNum))
        }
        categoryTitle = document.getElementsByClassName('dd-header-title')[0].innerHTML
        if (categoryTitle && categoryTitle !== "Select Category"){
            setCategoryData(categoryTitle ? categoryTitle : '')
            setShownTrips([...trips])
        }
    }, [filterData, nextTripsNum, trips, categoryData])

    return (
        <div className="trips-wrap">
            <div className="trips-header">
                <div className="trips-header--text">
                    <div className="trips-title">View Latest Trips</div>
                    <Badge label={nextTripsNum} />
                </div>
                <input
                    className="trips-search"
                    value={filterData}
                    onChange={e => onTourSearch(e)}
                    type="text"
                    placeholder="Search a Trip"
                />
            </div>
            <Dropdown title="Select Category" 
                list={trips.map(item => item.category.toLowerCase()).filter((value, index, self) => self.indexOf(value) === index)} 
                onChange={e=> onTourFilter(e)}
                whenClicked={onTourFilter}
            />
            <div className="trips-cards-wrap">
                {shownTrips
                    .filter(trip => trip.name.toLowerCase().includes(filterData.toLowerCase()))
                    .filter(trip => trip.category.toLowerCase().includes(categoryData.toLowerCase()))
                    .map(trip => {
                        return <Card key={`trip.name${trip.id}`} trip={trip} />
                    })}
            </div>
            {showButton && <Button label="Load More" onClick={loadMoreTrips} />}
        </div>
    )
}

export default Trips
