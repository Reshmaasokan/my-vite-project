import styles from'../ReactModuleCss/Product.module.css'
export default function Product(){
    return(
        <>
        <div className={`container mt-5 ${styles.containerstyle}`}>
            <h1 className={`text-center ${styles.headingstyle}`}>Wireless HeadPhone</h1>
            <div>
                <p className={`text-center ${styles.prizestyle}`}>₹1,499</p>
                <p className={`text-center ${styles.stockstyle}`}>In Shock</p>
            </div>
        </div>
        </>
    )
}