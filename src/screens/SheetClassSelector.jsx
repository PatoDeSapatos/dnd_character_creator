import React, { useEffect, useState } from "react";
import { searchClass } from "../api.js";
import SheetClassGeneralInfo from "../components/CharacterSheet/CharacterClass/SheetClassGeneralInfo.jsx";
import SheetClassProficiencies from "../components/CharacterSheet/CharacterClass/SheetClassProficiencies.jsx";

const SheetClassSelector = () => {

    const [classOptions, setClassOptions] = useState([])
    const [charClass, setCharClass] = useState([]);
    const [proficiencies, setProficiencies] = useState([]);

    const onChangeHandler = async ( e ) => {
        const getCharClass = await searchClass( e.target.value );
        setCharClass( getCharClass );
        
        const proficienciesInputs = document.querySelectorAll(".proficiencie-input");
        proficienciesInputs.forEach(e => {
            e.checked = false;
        });

    }

    const onChangeProficiencie = () => {
        const proficienciesInputs = document.querySelectorAll(".proficiencie-input");
        let checkedProficiencies = [];

        for (let index = 0; index < proficienciesInputs.length; index++) {
            const input = proficienciesInputs[index];

            if ( input.checked ) {
                checkedProficiencies.push( input.value );
            }
        }

        setProficiencies( checkedProficiencies );
    }

    const getClassOptions = async () => {
        const classes = await searchClass("");
        setClassOptions( classes.results );
    }

    useEffect(() => {
        getClassOptions();
    }, []);

    return(
        <div className="class-selector-container">
            <select name="class-select" onChange={onChangeHandler}>
                <option value="">Select Class</option>
                {classOptions.map(( className, index ) => {
                    return(
                        <option value={className.index} key={index}> {className.name} </option>
                    )
                })}
            </select>

            <div className="class-information">
                <h2>{ charClass.name }</h2>

                {charClass.name ? (
                    <SheetClassGeneralInfo charClass={charClass} />
                ) : (
                    null
                )}

                {charClass.proficiency_choices && charClass.proficiency_choices.map((proficiencies, index) => {
                    return(
                        <SheetClassProficiencies 
                            key={index} 
                            proficiencies={proficiencies} 
                            onChangeProficiencies={onChangeProficiencie}
                            name={`proficiencie-${index}`}
                        />
                    );
                })}
            </div>
        </div>
    )

}

export default SheetClassSelector;