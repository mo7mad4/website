import React from 'react'
import Style from './style'
import SelectIcon from "../../assets/SelectIcon.svg"
import RemoveSelectIcon from "../../assets/RemoveSelectIcon.svg"
import Trash from "../../assets/Trash.svg"
import Move from "../../assets/Move.svg"
import { Body1 } from '../Typography'

interface props{
  select:{
    active: boolean,
    selectedItems: string[]
  },
  setSelect: (obj:{active?:boolean,selectedItems?:string[]}) => void,
  data: {id:string,name:string}[],
  hideDelete?: boolean
}

const Operations = ({select,setSelect,data,hideDelete}:props) => {
  return (
    <Style className='containerWidth'>
      <div className="selectBlock hoverClass" 
          onClick={() => {
              select.active?
                  setSelect({active:false,selectedItems:[]})
                  :
                  setSelect({active:true})
          }}
          >
          <img className='selectIcon' src={select.active? RemoveSelectIcon : SelectIcon} alt="" />
          <Body1>{select.active?`${select.selectedItems.length} selected`:"Select"}</Body1>
      </div>

      {select.active &&
      <>
          {hideDelete ||
            <div className={`iconsClass ${select.selectedItems.length > 0?"hoverClass":"disabledClass"}`}>
                <img className='selectIcon' src={Trash} alt="" />
            </div>
          }

          <div className={`iconsClass ${select.selectedItems.length > 0?"hoverClass":"disabledClass"}`}>
              <img className='selectIcon' src={Move} alt="" />
          </div>

          <Body1 className='selectAll hoverClass'
              onClick={() => {
                  if(select.selectedItems.length !== data.length ){
                      setSelect({selectedItems:[...data.map(item => item.id)]})
                  }else{
                      setSelect({selectedItems:[]})
                  }
              }}
          >{select.selectedItems.length !== data.length?"Select All":"Remove All"}</Body1>
      </>

      }
    </Style>
  )
}

export default Operations