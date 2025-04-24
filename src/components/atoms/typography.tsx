/* eslint-disable @typescript-eslint/no-explicit-any */

interface typographyProps {
    children: any;
    className?: string
}

const H1 = ({ children, className }: typographyProps) => {
    return (
        <h1 className={`md:text-6xl text-4xl leading-[50px] md:leading-[80px] font-bold text-primary-green ${className}`}>{children}</h1>
    )
}


const H2 = ({ children, className }: typographyProps) => {
    return (
        <h1 className={`text-3xl font-bold ${className}`}>{children}</h1>
    )
}

const H3 = ({ children, className }: typographyProps) => {
    return (
        <h1 className={`text-2xl font-bold ${className}`}>{children}</h1>
    )
}

const H4 = ({ children, className }: typographyProps) => {
    return (
        <h1 className={`text-lg font-bold ${className}`}>{children}</h1>
    )
}

const H5 = ({ children, className }: typographyProps) => {
    return (
        <h1 className={`text-base font-medium ${className}`}>{children}</h1>
    )
}

const P = ({ children, className }: typographyProps) => {
    return (
        <h1 className={`text-sm font-normal ${className}`}>{children}</h1>
    )
}

export { H1, H2, H3, H4, H5, P }