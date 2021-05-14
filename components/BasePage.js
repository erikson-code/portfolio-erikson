import {Container} from 'reactstrap'
import Head from 'next/head'

const BasePage = (props)=>{
    const {className =""
    ,header,
    children,title="Portfolio - Erikson"} = props
    return (
        <>
        <Head>
            <meta name="viewport" content="inital-scale=1.0, width=device-width"/>
           <title> {title}</title>
            </Head>
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
                </>
    )


}



export default BasePage