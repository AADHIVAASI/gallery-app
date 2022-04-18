import React from 'react';
import styled from 'styled-components';
import './Heading.css';

const Header = styled.header`
    max-width: 102rem;
    margin: 2rem auto;
    text-align: left;
    border-bottom: 5px solid pink;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: -135px;
    overflow: hidden;
    background: white;
`;
const Input = styled.input`
    width: 20rem;
    margin: 0 0 8px;
    text-align: left;
    border: 2px solid black;
    padding: 8px;
    border-radius: 25px;
    outline: none;
`;
const Select = styled.select`
    width: 20rem;
    margin: 0 5px 8px 0;
    border: 2px solid black;
    padding: 8px;
    border-radius: 25px;
    outline: none;
`;
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media(max-width:580px){
            text-align: center;
            justify-content: center;
    }
`;

const H1 = styled.h1`
    margin-bottom: 0.5em;
    text-align: center;
    font-size: 80px;
    background: pink;
    border-radius: 25px;
`;

export const Heading = ({searchImages}) => {
    return (
        <>
        <Header className="header">
            <H1>Gallery</H1>
            <Div>
                {/* <div>
            <p>Beautiful, free images and photos that you can download and use for any project.</p>
            <p> Better than any royalty free or stock photos.</p>
            </div> */}
            <div>
            <Select name="category-list" onChange={searchImages}>
                <option value="">Filter by category</option>
                <option value="current-events">Current Events</option>
                <option value="wallpapers">Wallpapers</option>
                <option value="3d-renders">3D Renders</option>
                <option value="textures-patterns">Textures & Patterns</option>
                <option value="experimental">Experimental</option>
                <option value="architecture">Architecture</option>
                <option value="nature">Nature</option>
                <option value="business-work">Business & Work</option>
                <option value="fashion">Fashion</option>
                <option value="film">Film</option>
                <option value="food-drink">Food & Drink</option>
                <option value="health">Health & Wellness</option>
                <option value="people">People</option>
                <option value="street-photography">Street Photography</option>
                <option value="travel">Travel</option>
                <option value="animals">Animals</option>
                <option value="spirituality">Spirituality</option>
                <option value="arts-culture">Arts & Culture</option>
                <option value="history">History</option>
                <option value="athletics">Athletics</option>
                <option value="covid-19">COVID-19</option>
            </Select>
            </div>
            <div>
            <Input type="text" name="name" placeholder="Search images..."
                onChange={searchImages}/>
                </div>
            </Div>
        </Header>
        </>
    )
}