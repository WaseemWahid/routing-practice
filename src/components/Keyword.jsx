import React from 'react'
import {useParams} from "react-router"

const Keyword = () => {
    const {keyword, textcolor, backgroundcolor} = useParams()

    
        return (
            isNaN(keyword)?
                <div>
                    <fieldset style={{background: backgroundcolor}}>
                        <h1 style={{color:textcolor}}>The word is {keyword}</h1>
                    </fieldset>
                    <p>To Change the word, the color of the text, and the background. Enter into the url</p>
                    <div>
                        <small>For example localhost:3000/enter-a-word-here/enter-a-text-color/enter-a-background-color</small>
                    </div>
                </div>:
                <div>
                    <h1>The Number is {keyword}</h1>
                </div>
        )
    
}

export default Keyword