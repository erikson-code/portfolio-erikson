import Header from '../shared/Header'
import {ToastContainer} from 'react-toastify'
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
            <ToastContainer></ToastContainer>
        </div>
    )

}
export default BaseLayout