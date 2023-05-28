export function normaliseDate(inputDate: Date): string {
    const date = new Date(inputDate);

    if (date.getHours() < 10 && date.getMinutes() < 10) {
        return `${date.getDate()}/${
            date.getMonth() + 1
        }/${date.getFullYear()} 0${date.getHours()}:0${date.getMinutes()}`;
    }

    if (date.getHours() < 10) {
        return `${date.getDate()}/${
            date.getMonth() + 1
        }/${date.getFullYear()} 0${date.getHours()}:${date.getMinutes()}`;
    }

    if (date.getMinutes() < 10) {
        return `${date.getDate()}/${
            date.getMonth() + 1
        }/${date.getFullYear()} ${date.getHours()}:0${date.getMinutes()}`;
    }

    return `${date.getDate()}/${
        date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}
