import * as React from 'react'

declare class A extends React.Component<AProps, any> {}

export interface AProps {
  brand: string;
}

export default A