function ErrorComponent ({status, message}) {


    return <>
    <h2 className="error">{status} - {message}</h2>
    <p className="error">An error occurred when loading the page.</p>
    </>

}

export default ErrorComponent