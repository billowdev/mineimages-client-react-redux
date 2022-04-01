import React from 'react'
import Footer from './FooterComponent'
import NavbarComponent from './NavbarComponent'

function Layout({children}) {
  return (
	<>
		<header>
			<NavbarComponent />
		</header>
		<main>
			{children}
		</main>
		<Footer />
	</>
  )
}

export default Layout