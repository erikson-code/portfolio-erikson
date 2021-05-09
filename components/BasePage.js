import {Container} from 'reactstrap'

const BasePage = (props)=>{
    const {className ="",header,children} = props
    return (
        <div className={`base-page ${className}`}>
            <Container>
                {header &&

                    <div className="page-header">
                        <div className="page-header-title">
                            {header}
                        </div>
                    </div>
                }
                {children}
            </Container>
        </div>

    )


}



export default BasePage