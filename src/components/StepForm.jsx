import React, {useState} from "react";

export default function StepForm(props) {
    const [form, setForm] = useState({
        date: '',
        distance: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prevForm) => ({...prevForm, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        props.onSubmit(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
            <input name="date" type="text" onChange={handleChange} value={form.date}/>
            <label htmlFor="distance">Дистанция (км)</label>
            <input name="distance" type="text" onChange={handleChange} value={form.distance}/>
            <button type="submit" onClick={handleSubmit}>Ok</button>
        </form>
    );
}
