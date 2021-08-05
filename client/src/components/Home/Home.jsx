import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCountries } from "../../actions";
import style from "./Home.module.css";

const Home = () => {
    const countries = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [limitPage, setLimitPage] = useState(10);
    const [maxLimitPage, setMaxLimitPage] = useState(10);
    const [minLimitPage, setMinLimitPage] = useState(0);
    
    const handleClickPage = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1 ; i <= Math.ceil(countries?.length/itemsPerPage) ; i++) {
        pages.push(i);
    }

    const lastItem = currentPage * itemsPerPage;
    const firstItem = lastItem - itemsPerPage;
    const currentItems = countries?.slice(firstItem, lastItem);

    const renderPages = pages.map((number) => {
        if (number < maxLimitPage +1 && number > minLimitPage) {
            return (
                <li id={number} onClick={handleClickPage}>
                    {number}
                </li>
            )
        } else {
            return null;
        }
    })

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showCountries())
    }, []);

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxLimitPage) {
            setMaxLimitPage(maxLimitPage + limitPage);
            setMinLimitPage(minLimitPage + limitPage);
        }
    }

    const handlePrev = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % limitPage === 0) {
            setMaxLimitPage(maxLimitPage - limitPage);
            setMinLimitPage(minLimitPage - limitPage);
        }
    }

    function renderData(countries) {
        return (
            <div>
                {
                    countries?.map((c) => {
                        return (
                            <div>
                                <img src={c.flag_image} alt = "Not Found"/>
                                <h3>{c.name}</h3>
                                <p>{c.region}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    console.log(countries);
    return (
        <div className = {style.background}>
           {renderData(currentItems)}
           <ul className={style.pagination}>
           <li>
               <button onClick={handlePrev} disabled={currentPage === pages[0] ? true : false}>←</button>
           </li>
           {renderPages}
           <li>
               <button onClick={handleNext} disabled={currentPage === pages[pages.length - 1] ? true : false}>→</button>
           </li>
           </ul>
        </div>
    )
}

export default Home;