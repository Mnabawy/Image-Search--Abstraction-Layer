import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

export default function Images(props) {


    const [inputs, setInputs] = useState({
        page: 0,
        imageSize: '',
        query: '',
    })

    const [disabled, setDisabled] = useState(false)
    const [url, setUrl] = useState('http://image-search-abstraction-layer.freecodecamp.rocks/')
    const [type, setType] = useState('search');

    function handleSubmit(event) {


        event.preventDefault();
    }


    const handleChange = e => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }), {});

        if (type === 'recent') {
            setDisabled(true)
            setUrl('http://image-search-abstraction-layer.freecodecamp.rocks/recent')
        } else if (type === 'search') {
            setDisabled(false)
            setUrl('http://image-search-abstraction-layer.freecodecamp.rocks')
        }
        console.log(disabled);
        // e.preventDefault()
    };

    return (
        < div >
            <p style={{ display: "inline" }}>Type of Search:
                <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="search">search for images</option>
                    <option value="recent">see recent searches</option>
                </select>
            </p>
        {type}

            <form onSubmit={handleSubmit} >
                <fieldset disabled={disabled}>
                    <label>query
                        <input name="query" type="text" value={inputs.query} onChange={handleChange} /><br />
                    </label>
                    <label>page number:
                        <input name="page" type="text" value={inputs.page} onChange={handleChange} /><br />
                    </label>
                    <label>image size:
                        <select name="imageSize" value={inputs.imageSize} onChange={handleChange}>
                            <option value=""> All</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                            <option value="xlarge">xlarge</option>
                            <option value="xxlarge">xxlarge</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>

            <p>here is your URL: <a href={url}>{url}</a></p>
        </div >
    )
}
