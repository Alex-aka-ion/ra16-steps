export default class StepItemModel {
    constructor(id, date, distance) {
        console.log(id);
        console.log(Object.prototype.toString.call(date));
        console.log(typeof distance);
        console.log(typeof distance === 'number');
        if (!id || !date.match(/^\d{4}-\d{2}-\d{2}$/) || typeof distance !== 'number')
        {
            throw new Error('Wrong data!');
        }
        this.id = id;
        this.date = date;
        this.distance = distance;
    }
}
