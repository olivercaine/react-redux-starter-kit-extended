
interface IProps {
    month: string
}

export const MonthBlurb = ({ month }: IProps) => `The current month is ${month} according to TypeScript`

export const containsUppercase = (s: string | null | undefined): boolean => {
    return !!s && s.length - s.replace(/[A-Z]/g, '').length > 0;
}

export const containsNumber = (s: string | null | undefined): boolean => {
    return !!s && s.replace(/[^0-9]/g, '').length > 0;
}

export const containsSpecialCharacter = (s: string | null | undefined): boolean => {
    return !!s && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(s);
}
