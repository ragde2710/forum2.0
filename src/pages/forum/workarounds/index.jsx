import React from "react";
import './index.scss';
import {
        Accordion,
        AccordionItem} from "carbon-components-react";
import SideNavBar from "../../../components/SideNav/sidenav";

const WorkArounds = () => {
    return (
        <div className="App">
            <SideNavBar/>
            <div className="wabox-container">

                <Accordion>
                    <div className="wa-box">
                        <AccordionItem
                        title="Falla de A bus (cables NearStack)">
                        <p>
                        <b>BC50E504</b> 
                        <br />
                            iohs(n0pxc1) (IOHS_DLP_FIR[xx] (SMP mode)) linkx sl ecc correctable
                            iohs(n0pxc2) (IOHS_DLP_FIR[xx] (SMP mode)) linkx sl ecc correctable
                            iohs(n0pxc4) (IOHS_DLP_FIR[xx] (SMP mode)) linkx sl ecc correctable
                            iohs(n0pxc6) (IOHS_DLP_FIR[xx] (SMP mode)) linkx sl ecc correctable
                        </p>
                        <p>
                            También puede tener las siguientes firmas (pero siempre en los buses 1,2,4,6).
                        </p>
                        <p>
                            iohs(nxpxcx) (IOHS_DLP_FIR[x] (SMP mode)) linkx crc error
                            iohs(nxpxcx) (IOHS_DLP_FIR[x] (SMP mode)) linkx spare done
                            iohs(nxpxcx) (IOHS_DLP_FIR[x] (SMP mode)) linkx sl ecc ue
                        </p>
                        <p>
                            0. Pegar error en el log.   <br />

                            1. Hacer swap del cable SMP marcado. <br />

                            2. Si la falla se mueve con el cable, reemplazar el cable SMP 
                            Si es cable Golden, es obligatorio escanear el 11S del SMP a 
                            reemplazar y el 11S del cable nuevo. <br />

                            3. Si la falla se queda donde mismo, ejecutar TDR, apagando el sistema 
                            a standby primero ( tc_run dnlidbg.py --tdr en la celda ) <br />

                            4. Si TDR falla apuntando a uno o varios cables, es obligatorio pegar 
                            el resultado en el log. Si TDR termina limpio o no se ejecuta, 
                            contactar TE. <br />

                            5. Reemplazar los cables Near Stack marcados por TDR. <br />

                            6. Si la falla se recrea exactamente igual después de reemplazar los 
                            cables, puede que sea un mal procesador, contactar TE.
                        </p>
                        </AccordionItem>
                    </div>
                </Accordion>

                <Accordion>    
                    <div className="wa-box">
                        <AccordionItem 
                        title="Falla de X bus (planar)">
                        <p>BC50E504</p>
                        <p> 
                        iohs(nxpxc0) (IOHS_DLP_FIR[x] (SMP mode)) linkx sl ecc correctable <br />
                        iohs(nxpxc3) (IOHS_DLP_FIR[x] (SMP mode)) linkx sl ecc correctable <br />
                        iohs(nxpxc5) (IOHS_DLP_FIR[x] (SMP mode)) linkx sl ecc correctable <br />
                        iohs(nxpxc7) (IOHS_DLP_FIR[x] (SMP mode)) linkx sl ecc correctable <br />
                        </p>
                        <p>
                        También puede tener las siguientes firmas (pero siempre en los 
                        buses 0,3,5,7).
                        </p>
                        <p>
                        iohs(nxpxcx) (IOHS_DLP_FIR[x] (SMP mode)) linkx crc error. <br /> 
                        iohs(nxpxcx) (IOHS_DLP_FIR[x] (SMP mode)) linkx spare done. <br />
                        </p>
                        <p>
                        0. Pegar error en el log. Este error debe marcar siempre 2 procesadores. <br />
                        1. Reemplazar uno de los dos procesadores y reiniciar el sistema. <br />
                        2. Si vuelve a fallar apuntando a los mismos 2 procesadores, reemplazar
                        el otro procesador. <br />
                        3. Si se recrea la falla después de reemplazar los dos procesadores, 
                        puede que se trate de un mal fab, contactar TE. <br />
                        </p>
                        </AccordionItem>
                    </div>
                </Accordion>
                
                <Accordion>
                    <div className="wa-box">
                        <AccordionItem
                        title=" B1504804 - Error returned from adal_iic_read()">
                        <p>
                        Si falla en el paso <br />
                        spcmd.py --command="tmgtclient -set_cust_requested_mode 1" :
                        </p>
                        <p>
                        0. Pegar error en el log. <br />
                        1.Hacer power cycle o en la consola telnet del FSP, ejecutar smgrtoolResetDelayed2. <br />
                        2.Reiniciar pruebas. <br />                   
                        </p>
                        </AccordionItem>
                    </div>
                </Accordion>

                <Accordion>    
                    <div className="wa-box">
                        <AccordionItem 
                        title="Fallas OMI (cualquiera de estos SRCs o firmas)">
                        <p>
                        </p>
                        </AccordionItem>
                    </div>
                </Accordion>
            </div>

        </div>
    )
}

export default WorkArounds;