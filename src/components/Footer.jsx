const footerStyles = {
    backgroundColor: '#ccc',
    padding: '50px',
    color: '#555'
}

function Footer (){
    return (
        <footer style={footerStyles} className=" row justify-between align-center">
            <p >&copy; Copyright by ITDesigns 2024</p>
            <p>Developed by Isaiah Tapia</p>
        </footer>

    )
  }

  export default Footer;