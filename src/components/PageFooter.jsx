
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright © Timo Anjala, {currentYear}</p>
    </footer>
  )
}

export default Footer;