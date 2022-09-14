import { Stage as PixiStage } from '@inlet/react-pixi'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import { ReactReduxContext } from 'react-redux'

// @ts-ignore
const ContextBridge = ({children, Context, render}) => {
  return (
    <Context.Consumer>
      {(value: any) => render(<Context.Provider value={value}>{children}</Context.Provider>)}
    </Context.Consumer>
  )
}

// @ts-ignore

export const Stage = ({children, ...props}) => {
  return (
    <ContextBridge Context={ ReactReduxContext } render={(children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => <PixiStage {...props}>{children}</PixiStage>}>
      {children}
    </ContextBridge>
  )
}
