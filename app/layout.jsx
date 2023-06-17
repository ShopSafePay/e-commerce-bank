

import '@styles/global.css'


export const metadata = {
    title: 'DogeBank',
    description: 'online banking system',
}

const Rootlayout = ({ children }) => {
  
  return (
    <html lang="en">
      <body>
       
       
        {children}
        
       
        
        
      </body>
    </html>    
  )
}

export default Rootlayout

