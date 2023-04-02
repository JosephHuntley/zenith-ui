import React from "react"
import { Label, Input, SwitchButton } from "./SwitchStyles"

import { ZenithProps } from "../../utils"

export type SwitchProps = ZenithProps & {
  onChange?: () => any
  isChecked?: boolean
  btnColor?: string
}

const Switch = (props: SwitchProps) => {
  return (
    <Label {...props}>
      <Input
        btnColor={props.btnColor}
        checked={props.isChecked}
        type="checkbox"
        onChange={() => props.onChange}
      />
      <SwitchButton {...props} />
    </Label>
  )
}

export default Switch
