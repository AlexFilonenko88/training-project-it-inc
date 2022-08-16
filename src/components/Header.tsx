type HeaderType = {
    title: string
}

export const Header = (props: HeaderType) => {
    return (
        <>Header {props.title}</>
    )
}