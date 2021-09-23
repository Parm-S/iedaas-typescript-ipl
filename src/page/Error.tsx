import ERROR_STYLE from '../style/ErrorStyle';
function Error() {
    const errorStyle = ERROR_STYLE();
    return (
        <div className={errorStyle.container}>      
            <h2>Oops! Sorry, Something Went Wrong</h2>
        </div>   
    )
}
export default Error
