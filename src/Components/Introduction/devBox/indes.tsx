import { DevBoxx, Object } from "./styled";

export function DevBox() {
    return (
        <DevBoxx>
            <p className="title">My Indroduction</p>
            <p className="object">Dev</p>
            <Object>                
            <p className="content">From: <span>Brasil</span></p>
            <p className="content">Living: <span>Portugal</span></p>
            </Object>
          
            
        </DevBoxx>
    )
}