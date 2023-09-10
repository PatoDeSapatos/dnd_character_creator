import React from "react";

const SheetClassProficiencies = ( props ) => {

    const { proficiencies, setProficiencies } = props;
    const proficienciesLimit = proficiencies.choose;

    const onChangeHandler = ( e ) => {

        const inputGroup = e.target.name;
        const inputs = document.querySelectorAll( `input[name='${inputGroup}']` );
        let checkedInputs = 0;

        for (let index = 0; index < inputs.length; index++) {
            if (inputs[index].checked) {
                checkedInputs++;
            }
        }

        if ( checkedInputs > proficienciesLimit ) {
            e.target.checked = false;
        }
    }

    return (

        <div className="class-proficiencies-container">
            <div className="desc">
                {proficiencies.desc}
            </div>

            <div className="select-proficiencies">
                {proficiencies.from.options.map((proficiencie, index) => {
                    return (
                        <div key={index}>
                            <label key={index+1} name={proficiencies.desc} htmlFor={proficiencie.item.name} onChange={ onChangeHandler }>{proficiencie.item.name}</label>
                            <input key={index+2} name={proficiencies.desc} type="checkbox" id={proficiencie.item.name} value={proficiencie.item.name} onChange={ onChangeHandler } />
                        </div>
                    )
                })}
            </div>
        </div>

    );

}

export default SheetClassProficiencies;