type TCurrentDate = {
    day: string,
    monthAndDate: string
};

export const useDate = (): TCurrentDate => {

    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'];

    const today = new Date();

    const day = dayNames[today.getDay() - 1];
    const month = monthNames[today.getMonth()];
    const date = today.getDate();
    const monthAndDate = `${month} ${date}`;

    return {
        day,
        monthAndDate
    }
};
