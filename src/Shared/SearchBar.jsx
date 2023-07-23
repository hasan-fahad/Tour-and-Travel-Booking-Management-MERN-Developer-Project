import React, { useRef } from 'react';
import "./search-bar.css"
import { Col, Form, FormGroup } from 'reactstrap';
const SearchBar = () => {

    const locationRef = useRef("");
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);

const searchHandler = () =>{
    const location =locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location == "" || distance == "" || maxGroupSize == ""){
        return alert("All fields are required!")
    }
}



    return (
        <div className="search__bar">
            <Col lg="12">
        <Form className="d-flex align-items-center gap-4">

            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                    <i className="ri-map-pin-line"></i>
                </span>
                <div>
                    <h6>
                        Location
                        <br />
                        <input type="text" placeholder="Where are you going?" ref={locationRef}/>
                    </h6>
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                    <i className="ri-map-pin-time-line"></i>
                </span>
                <div>
                    <h6>
                        Distance
                        <br />
                        <input type="number" placeholder="Distance k/m" ref={distanceRef}/>
                    </h6>
                </div>
            </FormGroup>

            <FormGroup className="d-flex gap-3 form__group form__group-last">
                <span>
                    <i className="ri-group-line"></i>
                </span>
                <div>
                    <h6>
                        Max People
                        <br />
                        <input type="number" placeholder="0" ref={maxGroupSizeRef}/>
                    </h6>
                </div>
            </FormGroup>
            <span className="search__icon"type="submit" onClick={searchHandler}>
                <i className="ri-search-line"></i>
            </span>
        </Form>
        </Col>
        </div>

    );
};

export default SearchBar;