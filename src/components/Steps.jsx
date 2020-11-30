import React from "react";
import StepForm from "./StepForm";
import StepItem from "./StepItem";
import { nanoid } from "nanoid";

export default class Steps extends React.Component {
    state = {
        stepsByDay: []
    }

    handleSubmit = ({date, distance}) => {
        const newItem = { id: nanoid(), date, distance }
        console.log(newItem);

        this.setState({stepsByDay: [...this.state.stepsByDay, newItem]});
    }

    onDelete = (key) => {
        this.setState({ stepsByDay: this.state.stepsByDay.filter((item) => item.id !== key) });
    }

    render() {
        return <>
            <StepForm onSubmit={this.handleSubmit}/>
            <div className="header">
                <div>Дата (ДД.ММ.ГГГГ)</div>
                <div>Пройдено (км)</div>
                <div>Действия</div>
            </div>
            <div className="items">
                {this.state.stepsByDay
                    .sort(({distance: d1},{distance: d2}) => Number(d1) > Number(d2))
                    .map((item) => <StepItem key={item.id} item={item} onDelete={() => this.onDelete(item.id)}/>)}
            </div>
        </>
    }
}
