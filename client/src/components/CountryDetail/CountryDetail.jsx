import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";

const CDetail = ({match}) => {

    const {name} = match.params;
    const aCountry = useSelector(state => state.countryDetail);
    console.log(name)
    console.log(aCountry)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(name));
    }, [])

    function renderDetail(aCountry) {
        console.log("entre a render")
        return (
            <div>
                    <div>
                        <img src={aCountry[0].flag_image} alt = "Not Found"/>
                        <h3>{aCountry[0].name}</h3>
                        <p>{aCountry[0].continent}</p>
                        <p>{aCountry[0].id}</p>
                        <p>{aCountry[0].capital}</p>
                        <p>{aCountry[0].sub_region}</p>
                        <p>{aCountry[0].area}</p>
                        <p>{aCountry[0].population}</p>

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