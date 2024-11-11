import '../App.css'
const Contact = () => {
    return (
        <div>
            <h1>CONTACT US</h1>
            <div id='email'>
                <h3>Email:</h3>
                <p>For general assistance:</p>
                <p>help@tcgcc.co.uk</p>
                <p>For account related queries:</p>
                <p>accounts@tcgcc.co.uk</p>
                <p>For data protection concerns and/or subject access requests:</p>
                <p>admin:tcgcc.co.uk</p>
            </div>
            <div id='post'>
                <h3>Post:</h3>
                <p>TCG Card Catchers</p>
                <p>28 Paradise St</p>
                <p>Liverpool, L1 3EU</p>
                <p>United Kingdom</p>
                <p>Please address your mail to the relevant department (e.g. Accounts, Admin etc) to be sure we can respond without unreasonable delay.</p>
            </div>
            <div id='phone'>
                <h3>Telephone:</h3>
                <p>(+44)151-236-0070</p>
                <p>0151-326-0070</p>
            </div>
        </div>
    )
}
export default Contact