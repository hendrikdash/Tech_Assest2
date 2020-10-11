declare module 'react-currency-format' {
    export class NumberFormat extends React.Component<NumberFormatProps, any> {
      // Any public method on the NumberFormat component?
    }
  
    export interface CurrencyFormat extends React.HTMLAttributes<HTMLInputElement> {
      thousandSeparator?: boolean | ',' | '.' | ' '
      thousandSpacing?: boolean | ',' | '.' | ' ' | string
      decimalSeparator?: boolean | ',' | '.'
      decimalScale?: boolean | ',' | '.'
      displayType?: 'input' | 'text'
      prefix?: string
      format?: string | Function
      mask?: string
      // value?: number | string
    }
  
    export default CurrencyFormat;
  }