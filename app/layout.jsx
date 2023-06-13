import '@styles/global.css'
import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'
import Provider from './SessionProvider'


export const metadata = {
    title: 'DogeBank',
    description: 'online banking system',
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
        
        
      </body>
    </html>    
  )
}

export default Rootlayout

