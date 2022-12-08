import { useState } from 'react';
import MarkDown from 'react-markdown';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function App() {
    const [text, setText] = useState('');

    return (
        <div className='container'>
            <div className='container mg-left-lg mg-top-lg'>
                <form>
                    <textarea
                        rows='40'
                        cols='80'
                        className='bg-mid'
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                </form>
            </div>
            <div className='container-col mg-left-lg mg-top-lg'>
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
    );
}

export default App;
