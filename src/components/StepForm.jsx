import React, {useState} from "react";
import { nanoid } from "nanoid";
import StepItemModel from "../models/StepItem.model";

export default function StepForm(props) {
    const now = new Date();

    const [form, setForm] = useState({
        date: `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDay().toString().padStart(2,'0')}`,
        distance: 0.00,
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setError('');
        const {name, value} = e.target;
        setForm((prevForm) => ({...prevForm, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form.date);
        try {
            const newItem = new StepItemModel(nanoid(), form.date, parseFloat(form.distance));
            console.log(newItem);
            props.onSubmit(newItem);
        } catch (err) {
            setError(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
            <input name="date" type="date" onChange={handleChange} value={form.date}/>
            <label htmlFor="distance">Дистанция (км)</label>
            <input name="distance" type="number" step="0.01" onChange={handleChange} value={form.distance}/>
            <button type="submit" onClick={handleSubmit}>Ok</button>
            {error && <div>error</div>}
        </form>
    );
}
