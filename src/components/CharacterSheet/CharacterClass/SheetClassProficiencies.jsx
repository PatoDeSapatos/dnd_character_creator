import React from "react";

const SheetClassProficiencies = ( props ) => {

    const { proficiencies, onChangeProficiencies, name } = props;
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

        onChangeProficiencies();
    }

    return (

        <div className="class-proficiencies-container">
            <div className="desc">
                {proficiencies.desc}
            </div>

            <div className="select-proficiencies">
                {proficiencies.from.options.map((proficiencie, index) => {
                    const proficiencieName = proficiencie.item && proficiencie.item.index ? (proficiencie.item.index.replace("skill-", "")) : ("");

                    return (
                        <div key={index}>
                            <label key={index+1} name={name} htmlFor={proficiencieName} onChange={ onChangeHandler }>{proficiencieName}</label>
                            <input key={index+2} name={name} type="checkbox" id={proficiencieName} value={proficiencieName} onChange={ onChangeHandler } className="proficiencie-input" />
                        </div>
                    )
                })}
            </div>
        </div>

    );

}

export default SheetClassProficiencies;