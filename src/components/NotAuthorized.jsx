const NotAuthorized=()=>{
    return (
        <>
        <div className="flex flex-col items-center justify-center h-center">
            <h1 className="text-3xl font-bold mb-4">Not Authorized</h1>
            <p className="text-lg mb-4">You are not authorized to access this page.</p>
            <p className="text-lg mb-4">You can only access this page when Land Inspector verifies your account.</p>

        </div>
            
        </>
    )
}

export default NotAuthorized;