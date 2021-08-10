import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showCountries } from "../../actions";

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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            return alert("Something went wrong. Please try again");
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
        <div>
            <h1>CREATE ACTIVITY</h1>
            <form>
                <input placeholder="Insert name..." onChange={handleInputChange}/>
                <select name="Difficulty" onChange={handleInputChange}>
                    <option disabled>Difficulty</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>                
                <input placeholder="Insert duration..." onChange={handleInputChange}/>
                <select name="Season" onChange={handleInputChange}>
                    <option disabled>Season</option>
                    <option>Summer</option>
                    <option>Autumn</option>
                    <option>Winter</option>
                    <option>Spring</option>
                </select>      
                <select onChange={handleInputCountries}>    
                    <option disabled>Country</option>
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
                <div>
                    {
                        input.countries?.map(e => (
                            <p id={e}>
                                {showAcitivities([e])}
                            </p>
                        )) 
                    }
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>Create!</button>
                </div>
            </form>
        </div>
    )


}

export default CreateActivity;