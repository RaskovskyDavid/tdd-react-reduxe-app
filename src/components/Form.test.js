import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Form from './Form';

configure({adapter: new Adapter()})

describe("form", () => {
    it("agrega finanza", () => {
        const agregarFinanza = jest.fn();
        const prevent = jest.fn();
        const wrapper = shallow(
        <Form 
        agregarFinanza={agregarFinanza}
        />);
        wrapper.find("input").at(0).simulate("change", {target: {value: "descripcion"}});
        wrapper.find("input").at(1).simulate("change", {target: {value: "150"}});
        wrapper.find("form").simulate("submit", {preventDefault: prevent});
        expect(agregarFinanza.mock.calls).toEqual([[{"cant": 150, "desc": "descripcion"}]]);
        expect(prevent.mock.calls).toEqual([[]]);
        
    });
});