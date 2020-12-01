import React from "react";
import StepForm from "./StepForm";
import StepItem from "./StepItem";

export default class Steps extends React.Component {
    state = {
        stepsByDay: []
    }

    handleSubmit = (item) => {
        const currentSteps = [...this.state.stepsByDay];

        const index = currentSteps.findIndex((i) => i.date === item.date );

        if (index !== -1) {
            currentSteps[index].distance += item.distance;
            this.setState({stepsByDay: [...currentSteps]});
        } else {
            this.setState({
                stepsByDay: [...currentSteps, item]
            });
        }
    }

    onDelete = (key) => {
        console.log(key);
        this.setState({ stepsByDay: this.state.stepsByDay.filter((item) => item.id !== key) });
    }

    render() {
        return <div className="wrapper">
            <StepForm onSubmit={this.handleSubmit}/>
            <div className="header">
                <div>Дата (ДД.ММ.ГГГГ)</div>
                <div>Пройдено (км)</div>
                <div>Действия</div>
            </div>
            <div className="items">
                {this.state.stepsByDay
                    .sort(({date: d1},{date: d2}) => d1.replace(/-/g,'') - d2.replace(/-/g,''))
                    .map((item) => <StepItem key={item.id} item={item} onDelete={() => this.onDelete(item.id)}/>)}
            </div>
        </div>
    }
}
