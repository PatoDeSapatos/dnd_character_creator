import Reacts from "react";

const SheetClassGeneralInfo = ( props ) => {
    // diplay hitdie, health per level, saving throws and equipament proficiencies
    
    const {charClass} = props;

    const itemChoiceClickHandler = () => {

    }

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

            <div className="starting-equipment">
                <h2>Starting Equipment</h2>
                <div>
                    <ul>
                        {charClass.starting_equipment.map( (equipment, index) => {
                            return ( <li key={index}> {equipment.equipment.name} </li> );
                        } )}
                    </ul>
                </div>

                <div>
                    { charClass.starting_equipment_options != undefined && charClass.starting_equipment_options.map( (choose, index) => {
                        return (
                            <div>
                                <div key={index}>{choose.desc}</div>
                                <div>
                                    {choose.from.options != undefined && choose.from.options.map( (option, key) => {
                                        let id;

                                        switch (option.option_type) {
                                            case "counted_reference":
                                                id = "starting-equipment-" + key + "-" + option.of.index;

                                                return ( 
                                                    <div key={key}>
                                                        <input type="checkbox" name={"starting-equipment-" + key} id={id} onClick={itemChoiceClickHandler} />
                                                        <label htmlFor={id}> {option.of.name} </label>
                                                    </div> 
                                                )

                                            case "multiple":
                                                let options = [];
                                                option.items.forEach( (item) => {
                                                    const isChoice = item.option_type == "choice";
                                                    const name = isChoice ? (item.choice.desc) : (item.of.name);
                                                    const choice = isChoice ? (item.choice.desc) : ("")
                                                    console.log(item);

                                                    options.push( new StartingItemOption(name, choice) );
                                                })

                                                return (
                                                    <div key={key}>
                                                        <input type="checkbox" name="" id="" />
                                                        <label htmlFor=""> 
                                                            { options.map( (itemOption) => {
                                                                const choiceBox = (
                                                                    <select name="" id="">
                                                                        <option value="">{itemOption.choice}</option>
                                                                    </select>
                                                                );

                                                                return (
                                                                    <span>
                                                                        { itemOption.name + "; " }
                                                                        { itemOption.choice != "" ? (choiceBox) : ("") }
                                                                    </span>
                                                                );
                                                            })} 
                                                        </label>
                                                    </div>
                                                );
                                        
                                            case "choice":
                                                id = "starting-equipment-" + key + "-" + option.choice.from.equipment_category.index;

                                                return(
                                                    <div key={key}>
                                                        <input type="checkbox" name={"starting-equipment-" + key} id={id} />
                                                        <label htmlFor={id}> {option.choice.desc} </label>

                                                        <select name={"starting-equipment-" + key}>
                                                            <option value="">{option.choice.from.equipment_category.name}</option>
                                                        </select>
                                                    </div>
                                                );
                                        }
                                    })}
                                </div>
                            </div>
                            
                        )
                    } )}
                </div>
            </div>
        </div>
    )
}

class StartingItemOption {
    constructor(name, choice) {
        this.name = name;
        this.choice = choice;
    }
}

export default SheetClassGeneralInfo;