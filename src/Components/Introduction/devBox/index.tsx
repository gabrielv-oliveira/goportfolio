import { DevBoxx, Object, P } from "./styled";

export function DevBox() {
    return (
        <DevBoxx>
            <p className="title">My Indroduction</p>
            <p className="object">Dev</p>
            <Object >   
            
            <P className="content" >From: <span>Brasil</span>,</P>
            <P className="content" >Living: <span>Portugal</span>,</P>
            <P className="content" >Developing: <span>Since2021</span></P>
            </Object>
          
            
        </DevBoxx>
    )
}