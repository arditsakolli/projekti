import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
        <div class="footer-content">
            <h3>Forever Green</h3>
            <p>"Green Pathways" is an eco-conscious platform dedicated to navigating the journey towards sustainability. Our website is a hub of insightful resources, offering guidance and inspiration for individuals and communities committed to embracing the green transition.</p>
            <ul class="socials">
                <li><a href="#"><i class="fa color fa-facebook"></i>facebook</a></li>
                <li><a href="#"><i class="fa color fa-twitter"></i>twitter</a></li>
                <li><a href="#"><i class="fa color fa-google-plus"></i>instagram</a></li>
                <li><a href="#"><i class="fa color fa-youtube"></i>youtube</a></li>
                <li><a href="#"><i class="fa color  fa-linkedin-square">linkedin</i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; <a href="#">Forever Green</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </div>
        </div>

    </footer>

    </div>
  )
}

export default Footer