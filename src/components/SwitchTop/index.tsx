import Switch from 'react-switch'

type SwitchProps = {
  onChange: any
  checked: any
  checkedIcon: any
  uncheckedIcon: any
  height: any
  width: any
  handleDiameter: any
  offColor: any
  onColor: any
}

const SwitchTop = ({ ...props }: SwitchProps) => {
  return (
    <Switch { ...props } />
  )
}

export default SwitchTop
