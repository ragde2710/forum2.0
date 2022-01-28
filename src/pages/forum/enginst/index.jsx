import './index.scss';
import  { Accordion, AccordionItem } from 'carbon-components-react';
import React from 'react';
import SideNavBar from '../../../components/SideNav/sidenav';

const EngInst = () => {
    return (
        <div className="enginst-main">
            <SideNavBar/>
            <Accordion>
                <AccordionItem 
                title="Validación para Modulos NCM">
                  <p>Se han detectado procesadores en NCM que en realidad no arreglaron la 
                  falla cuando los reemplazaron, les pedimos que por favor antes de enviar 
                  cualquier componente a NCM validen si el reemplazo arreglo la falla para 
                  confirmar que el componente es el causante, han salido varios casos en las 
                  ultimas dos semanas para diferentes fallas como de OMI asi como de Abus, para 
                  esta ultima incluso en vez de reemplazar primero el cable NS, se han detectado 
                  cambios de proc que no arreglan la falla y que aun asi son enviados a NCM.
                  </p>
                  <p>
                  Si tienen cualquier duda sobre el proceso de rechazo lo pueden checar con los 
                  leads o con nosotros directamente y si tienen duda sobre como proceder en el 
                  debug igual les pido que nos los hagan saber.
                  </p>
                </AccordionItem>
                <AccordionItem title="Revisión de Leds en Grackle">
                  <p>
                  Por petición de calidad, estamos agregando una atención para revisar los LEDs 
                  de las Grackles en Fulfillment. El LED de la parte superior que representa la 
                  conexión a poder debe ser verde y el LED inferior que representa la atención 
                  debe ser ámbar/amarillo. Si no es así, esa Grackle está mal y se debe rechazar. 
                  </p>
                </AccordionItem>      
            </Accordion>
            </div>      
    )
}

export default EngInst;