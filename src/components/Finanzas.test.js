import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Finanzas from './Finanzas'

configure({adapter: new Adapter()})

describe("Finanazas", () => {
    it("eliminar finanza onClick", () => {
        const finanzas = [
            {desc: "Finanza 1", cant: 100},
            {desc: "Finanza 2", cant: 80}
        ];
        const eliminarFinanza = jest.fn();
        const wrapper = shallow(
        <Finanzas 
        finanzas={finanzas}
        eliminarFinanza = {eliminarFinanza}
        />);
        wrapper.find("button").at(0).simulate("click");
        expect(eliminarFinanza.mock.calls).toEqual([[0]]);
        const resultado = wrapper.text().includes("Finanza 2");
        const resultado2 = wrapper.text().includes("Finanza 1");
        expect(resultado).toEqual(true);
        expect(resultado2).toEqual(true);
        
        
    });
});