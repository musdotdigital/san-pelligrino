export function setClassNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
