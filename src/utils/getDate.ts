
const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
export const getDate = (timestamp: number) => {
    let date: Date = new Date(timestamp);

    const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthsRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return {
        en: `${daysEn[date.getDay()]}, ${date.getDate()} ${monthsEn[date.getMonth()]} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} `,
        ru: `${daysRu[date.getDay()]}, ${date.getDate()} ${monthsRu[date.getMonth()]} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} `
    };
};
export const getNameDays = (timestamp: number, timezone=0) => {
    const MS = 1000;
    let date: Date = new Date(timestamp*MS);
    return {
        en: `${daysEn[date.getDay()]}, ${date.getDate()}`,
        ru: `${daysRu[date.getDay()]}, ${date.getDate()}`
    };
};