import React, { useState } from "react";
import { searchClass } from "../../api";
import SheetClassProficiencies from "./SheetClassProficiencies";

const SheetClassSelector = () => {

    const [charClass, setCharClass] = useState([]);
    const [proficiencies, setProficiencies] = useState([]);

    const onChangeHandler = async ( e ) => {
        const getCharClass = await searchClass( e.target.value );
        setCharClass( getCharClass );
    }

    const onChangeProficiencie = () => {
        console.log("changed");
    }

    return(
        <div className="class-selector-container">
            <select name="class-select" onChange={onChangeHandler}>
                <option value="">Choose Class</option>
                <option value="bard">Bard</option>
                <option value="wizard">Wizard</option>
                <option value="warlock">Warlock</option>
            </select>

            <div className="class-information">
                <h2>{ charClass.name }</h2>
                {charClass.proficiency_choices && charClass.proficiency_choices.map((proficiencies, index) => {
                    return(
                        <SheetClassProficiencies key={index} proficiencies={proficiencies} setProficiencies={setProficiencies} />
                    );
                })}
            </div>
        </div>
    )

}

export default SheetClassSelector;