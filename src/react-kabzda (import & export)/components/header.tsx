
type HeaderPropsType = {
    title: string
}

const Header = (props: HeaderPropsType) => {
    debugger
    return (<div>
        <h1>{props.title}</h1>
        </div>);
}

export default Header