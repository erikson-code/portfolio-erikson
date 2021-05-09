import Header from '../shared/Header'
const BaseLayout = (props) => {
    const { className, children,user,navClass="with-bg" } = props
    return (
        <div className="layout-container">
            <Header user = {user}
                className={navClass}
            />

            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
        </div>
    )

}
export default BaseLayout