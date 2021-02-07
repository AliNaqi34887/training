import Header from './header'

function main(props) {

    function Internal(props) {
        return(
            <p>this is from internal {props.someotherthing}</p>
        )
    }
    return (
        <div>
            <Header/>
            <Internal someotherthing={props.something}/>
        </div>
    )
}

export default main