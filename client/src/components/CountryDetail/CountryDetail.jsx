import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import NavBar from "../NavBar/NavBar";
import style from "./CountryDetail.module.css";

const CDetail = ({match}) => {

    const {name} = match.params;
    const aCountry = useSelector(state => state.countryDetail);
    console.log(name)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(name));
    }, 
    // eslint-disable-next-line
    [])

    function renderDetail(aCountry) {
        console.log("entre a render")
        console.log(aCountry[0].activities)
        return (
            <div className={style.background}>
                <NavBar/>
                    <div className={style.cards}>
                        <img className={style.img} src={aCountry[0].flag_image} alt = "Not Found"/>
                        <h3>{aCountry[0].name}</h3>
                        <p>Continent: {aCountry[0].continent}</p>
                        <p>ID: {aCountry[0].id}</p>
                        <p>Capital: {aCountry[0].capital}</p>
                        <p>Subregion: {aCountry[0].sub_region}</p>
                        <p>Area: {aCountry[0].area} km²</p>
                        <p>Population: {aCountry[0].population}</p>
                        <p>Activities:</p>
                            {
                                
                                aCountry[0].activities?.map(e => (
                                    <div className={style.txt}>
                                    <p>Name: {e.name}, Difficulty: {e.difficulty}, Duration: {e.duration}, Season: {e.season}</p>
                                    </div>
                                ))
                            }

                    </div>
            </div>
        )
    }

    return (
        <div>
            {aCountry ? renderDetail(aCountry) : <h1>Loading...</h1>}
        </div>
    )


}

export default CDetail;