import '@/styles/globals.css'; //will import styles to the entire application

import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
    title: "promptopia",
    description: "discover and share AI prompts",

}

export default function RootLayout({children}) {
    return (
        <html lang='en'>
            <body>
                <Provider>
                
                    <div className="main">
                        <div className='gradient'/>
                    </div>
                    
                    <main className="app">
                        <Nav />
                        {children}
                    </main>

                </Provider>
            </body>
        </html>
    )
}