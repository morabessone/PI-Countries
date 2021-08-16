import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showCountries } from "../../actions";
import style from "./CreateActivity.module.css";
import NavBar from "../NavBar/NavBar";

export function validate(input) {

    let errors = {};
    if (!input.name) {
        errors.name = "Name is required";
    }
    if (!input.difficulty) {
        errors.difficulty = "Difficulty is required";
    }
    if (!input.duration) {
        errors.duration = "Duration is required";
    }
    if (!input.season) {
        errors.season = "Season is required";
    }
    if (!input.countries) {
        errors.countries = "Add at least one country";
    }
    return errors;
}

const CreateActivity = () => {

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    });
    console.log(input)
    
    const [errors, setErrors] = useState({});
    
    const countries = useSelector((state) => state.countries);
    
    const dispatch = useDispatch();
    
    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({...input, [e.target.name]: e.target.value}));
    };

    const handleInputCountries = (e) => {
        if (input.countries.includes(e.target.value)) {
            alert("You already select that country.")
        } else {
            setInput({
                ...input,
                [e.target.name]:[...input.countries, e.target.value]
            });
        }
        // setInput({
        //     ...input,
        //     [e.target.name]:
        //     [...input.countries, e.target.value]
        // })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(errors)
        if (!errors.name && !errors.difficulty && !errors.duration && !errors.season) {
            alert("The activity has been created successfully");
            await axios.post("http://localhost:3001/activity", input);
            setInput({
                name: "",
                difficulty: "",
                duration: "",
                season: "",
                countries: [],
            })
        } else {
            alert("Something went wrong. Please try again");
        }
    };

    useEffect(() => {
        dispatch(showCountries());
    }, []);

    const activ = useSelector((state) => state.activities);

    const showAcitivities = (arr) => {
        let names = [];
        countries?.forEach((coun) => {
            arr.forEach((id) => {
                if (id === coun.id) {
                    names.push(coun.name)
                };
            });
        });
        return names;
    }

    return (
        <div className={style.contenedor}>
            <NavBar/>
            <h1 className={style.text}>CREATE ACTIVITY</h1>
            <div className={style.cont}> 
            <form onSubmit={handleSubmit}>
                <input className={style.input} name="name" placeholder="Insert name..." value={input.name} onChange={handleInputChange}/>
                <p className={style.err}>{errors.name}</p>
                <select className={style.input} name="difficulty" value={input.difficulty} onChange={handleInputChange}>
                    <option value="" disabled>Difficulty</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>            
                <p className={style.err}>{errors.difficulty}</p>
                <input className={style.input} name="duration" placeholder="Insert duration..." value={input.duration} onChange={handleInputChange}/>
                <p className={style.err}>{errors.duration}</p>
                <select className={style.input} name="season" value={input.season} onChange={handleInputChange}>
                <option value="" disabled>Season</option>
                    <option>Summer</option>
                    <option>Autumn</option>
                    <option>Winter</option>
                    <option>Spring</option>
                </select>     
                <p className={style.err}>{errors.season}</p>
                <select className={style.input} name="countries" value={input.countries} onChange={handleInputCountries}>    
                <option value="" disabled>Countries</option>
                    {
                        countries?.map((c) => {
                            return (
                                <option value={c.id}>
                                    {c.name}
                                </option>
                            )
                        })
                    }
                </select>    
                <p className={style.err}>{errors.countries}</p>
                <div className={style.text1}>
                    {
                        input.countries?.map(e => (
                            <p id={e}>
                                {showAcitivities([e])}
                            </p>
                        )) 
                    }
                </div>
                <div>
                    <button className={style.btn} type="submit" onClick={handleSubmit}>Create!</button>
                </div>
            </form>
            </div>
        </div>
    )


}

export default CreateActivity;