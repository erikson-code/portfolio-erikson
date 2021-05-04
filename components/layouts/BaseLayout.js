import Header from '../shared/Header'
const BaseLayout = (props) => {
    const { className, children,user } = props
    return (
        <div className="layout-container">
            <Header user = {user} />

            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
        </div>
    )

}
export default BaseLayout