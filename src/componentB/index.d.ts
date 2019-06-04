import * as React from 'react'

declare class B extends React.Component<BProps, any> {}

export interface BProps {
  brand: string;
}

export default B