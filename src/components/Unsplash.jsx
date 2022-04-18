import React from 'react';
import { BlurHashLoader } from './blurhash/blurhash-loader';
import './blurhash/blurhashloader.css';

export const Unsplash = ({url,id,blurHash}) => {
    return (
        <div key={id} style={{borderRadius:'10px!important'}}>
            <a href={url.full} target="_blank" rel="noopener noreferrer">
                <BlurHashLoader className="loader"
                    blurHash={blurHash}
                    imageUrl={url.regular}/>
            </a>
        </div>
    )
}