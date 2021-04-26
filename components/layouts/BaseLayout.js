import Header from '../shared/Header'
const BaseLayout = (props)=>{

    return(
        <>
            <Header></Header>
            {props.children}
        </>

    )

}
export default BaseLayout