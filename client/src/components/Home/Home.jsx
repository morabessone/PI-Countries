import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showCountries } from "../../actions";
import style from "./Home.module.css";

const Home = () => {
    const countries = useSelector((state) => state.countries);
    //seteo mi page en 1 para que empuece ahi
    const [currentPage, setCurrentPage] = useState(1);
    // seteo la cantidad de countries a mostrar en mi home
    const [itemsPerPage, setItemsPerPage] = useState(8);
    // sete0 mi limite en 10 para que muestre: 1/2/3/4/5/6/7/8/9/10
    const [limitPage, setLimitPage] = useState(10);
    // el maximo de paginas va a ser 10
    const [maxLimitPage, setMaxLimitPage] = useState(10);
    // el minimo 0
    const [minLimitPage, setMinLimitPage] = useState(0);
    const filterCountries = useSelector((state) => state.filterCountries);
    // function para que setee la current page en el numero que se haya clickeado
    const handleClickPage = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    // en pages tengo la cantidad de paginas (si tengo 120 perros son 15 paginas)
    const pages = [];
    for (let i = 1 ; i <= Math.ceil(countries?.length/itemsPerPage) ; i++) {
        pages.push(i);
    }
    // el ultimo country a renderizar 
    const lastItem = currentPage * itemsPerPage;
    // el primer item a renderizar
    const firstItem = lastItem - itemsPerPage;
    // para renderizar los items hace un slice de todos los countries desde el primero al ultimo
    const currentItems = filterCountries?.slice(firstItem, lastItem);
    // 
    const renderPages = pages.map((number) => {
        if (number < maxLimitPage +1 && number > minLimitPage && number && number < currentItems ) {
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
                            <Link to ={`/countryDetail/${c.id}`}>
                                <div className={style.cards}>
                                    <img src={c.flag_image} className={style.img} alt = "Not Found"/>
                                    <h3>{c.name}</h3>
                                    <p>{c.continent}</p>
                                </div>
                            </Link>
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
               <button onClick={handlePrev} disabled={currentPage === pages[0] ? true : false}>Prev</button>
           </li>
           {renderPages}
           <li>
               <button onClick={handleNext} disabled={currentPage === pages[pages.length - 1] ? true : false}>Next</button>
           </li>
           </ul>
        </div>
    )
}

export default Home;