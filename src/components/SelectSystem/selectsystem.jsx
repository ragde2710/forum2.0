import React, { useState } from "react";
import { SelectItemGroup, 
         Button,
         TextInput, 
         Select, 
         SelectItem } from "carbon-components-react";
import { Add16, Delete16 } from "@carbon/icons-react";
import Replaces from "../Remplazos/replaces";
import './selectsystem.scss';

const variable = true;

function ZZ4U() {
  // const [backGround] = "#123"

  const [items, setItems] = useState([]);

  const [inputImg, setInputImg] = useState("");
  const [imgs, setImgs] = useState([]);

  function Add() {
    // console.log(inputText);
    if (inputText === "ZZ4U") {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
      addImg();
    } else {
      setInputText("no es ZZ 4U");
    }
  }
  function addImg() {
    setImgs((prevItems) => {
      return [...prevItems, inputImg];
    });
    setInputImg("");
  }

  function deleteImg() {
    setImgs(() => {
      return [];
    });
    setInputImg("");
  }
  function deleteItem() {
    setItems(() => {
      return [];
    });
    setInputText("");
    deleteImg();
  }

  const [inputText, setInputText] = useState();

  function handleChange(event) {
    // console.log();
    const newValue = event.target.value;
    // console.log(newValue);
    setInputText(newValue);
  }

  return (
      <div className="select__system--main">

        <div className="select__system--form">

          <div className="select__system--form-title">
            <h1>Sistema</h1>
          </div>
          
          <div className="select__system--form-container">
          <div className="select__system--form-system">
            <Select
              invalidText="This is an invalid error message."
              labelText="*Status"
              hideLabel="true"
              onChange={handleChange}>
                <SelectItemGroup label="--Remplazo--">
                  <SelectItem width="150px" text="ZZ 2U" value="ZZ2U" />
                  <SelectItem width="150px" text="ZZ 4U" value="ZZ4U" />
                  <SelectItem width="150px" text="Fleetwood" value="Fleetwood" />
                  <SelectItem width="150px" text="Zeppelin" value="Zeppellin" />
                  <SelectItem width="150px" text="MACK" value="MACK" />
                  <SelectItem width="150px" text="wsp-aire" value="WSP (AirCooled)" />
                  <SelectItem width="150px" text="wsp-agua" value="WSP (WaterCooled)" />
                  <SelectItem width="150px" text="Mihawk" value="Mihawk" />
                </SelectItemGroup>
            </Select>
          </div>

          <div className="select__system--form-manu">
            <TextInput
              // value={inputText}
              id="Remplazo"
              invalidText="Invalid error message."
              labelText="Text input label"
              placeholder="Manufactury Number"
              hideLabel="true"
            />
          </div>

          <div className="select__system--form-wu">
            <TextInput
              // value={inputText}
              id="Remplazo"
              invalidText="Invalid error message."
              labelText="Text input label"
              placeholder="W.U."
              hideLabel="true"
            />
          </div>
          

        <div>
          <ul>
            {items.map((todoItem) => (
              <Replaces text={todoItem} />
            ))}
          </ul>
        </div>
        </div>
        
        <div className="select__system--btncontainer">
        <div className="select__system--form-button">
          <Button
            renderIcon={Add16}
            iconDescription="Icon Description"
            hasIconOnly
            onClick={Add}>
              Select
          </Button>
        </div>
        
        <div className="select__system--form-delete">
          <Button
            renderIcon={Delete16}
            kind="danger"
            onClick={deleteItem}
            iconDescription="Delete">
              Delete
          </Button>
        </div>
        </div>

      </div>
      </div>
  );
}

export default ZZ4U;
