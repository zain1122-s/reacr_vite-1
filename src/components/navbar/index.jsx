function NavBar() {
    return(
        <>
        <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 50px", backgroundColor: "lightblue"}}>
            <div>
                <h1>Logo</h1>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

        </nav>
        </>
    )
}

export default NavBar;