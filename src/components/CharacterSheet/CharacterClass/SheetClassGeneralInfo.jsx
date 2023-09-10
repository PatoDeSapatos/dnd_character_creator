import Reacts from "react";

const SheetClassGeneralInfo = ( props ) => {
    // diplay hitdie, health per level, saving throws and equipament proficiencies
    
    const {charClass} = props;

    return(
        <div className="class-general-info-container">
            <div className="hitdie">
                <h3>Hitdie:</h3>
                {charClass.hit_die}
            </div>
            
            <div className="saving-throws">
                <h3>Saving Throws:</h3>
                <ul>             
                    {charClass.saving_throws.map(( savingThrow, index ) => {
                        return(
                            <li key={index}> { savingThrow.name } </li>
                        )
                    })}
                </ul>
            </div>
            
            <div className="equipament-proficiencies">
                <h3>Tool proficiencies: </h3>
                <ul>
                    {charClass.proficiencies.map(( proficiencie, index ) => {
                        const s = proficiencie.index.split("-");

                        if ( s[0] == "saving" ) {
                            return "";
                        }
                        
                        return (
                            <li key={index}> {proficiencie.name} </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SheetClassGeneralInfo;