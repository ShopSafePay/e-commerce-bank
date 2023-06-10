import '@styles/global.css'
import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'



export const metadata = {
    title: 'DogeBank',
    description: 'online banking system',
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        
          <Navbar />
          {children}
          <Footer />

        
        
      </body>
    </html>    
  )
}

export default Rootlayout

